import Sequelize, { Model } from 'sequelize';
import uuid from 'uuid-v4';

export default class Thief extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultvalue: '',
        unique: {
          msg: 'Meliante já cadastrado',
        },
        validate: {
          len: {
            args: [5, 100],
            msg: 'Campo nome de ter no mínimo 5 e máximo de 100 caracteres',
          },
        },
      },
      nickname: Sequelize.STRING,
      actingarea: Sequelize.STRING,
      obs: Sequelize.TEXT,
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (thief) => thief.id = uuid());

    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'thief_id' });
  }
}
