import Sequelize, { Model } from 'sequelize';
import uuid from 'uuid-v4';
import appConfig from '../config/appConfig';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultvalue: '',
        unique: {
          msg: 'Meliante já cadastrado',
        },
        validate: {
          notEmpty: {
            msg: 'Campo não ode ficar vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultvalue: '',
        unique: {
          msg: 'Meliante já cadastrado',
        },
        validate: {
          notEmpty: {
            msg: 'Campo não ode ficar vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },

    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (thief) => thief.id = uuid());

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Thief, { foreignKey: 'thief_id' });
  }
}
