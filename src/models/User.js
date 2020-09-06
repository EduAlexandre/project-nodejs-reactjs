import Sequelize, { Model } from 'sequelize';
import uuid from 'uuid-v4';
import bcrypt from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultvalue: '',
        validate: {
          len: {
            args: [5, 150],
            msg: 'Campo nome de ter no mínimo 5 e máximo de 150 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultvalue: '',
        unique: {
          msg: 'E-mail já cadastrado',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      register: {
        type: Sequelize.INTEGER,
        defaultvalue: '',
        unique: {
          msg: 'Matrícula já cadastrada',
        },
        validate: {
          len: {
            args: [5, 10],
            msg: 'Campo matrícula de ter no mínimo 5 e máximo de 10 caracteres',
          },
        },
      },
      has_password: {
        type: Sequelize.STRING,
        defaultvalue: '',
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultvalue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultvalue: '',
        validate: {
          len: {
            args: [5, 20],
            msg: 'A senha deve ter no mínimo 5 e máximo de 20 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      if (!user.id) {
        user.id = uuid();
      }
    });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.has_password = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.has_password);
  }
}
