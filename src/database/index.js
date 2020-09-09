import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Thief from '../models/Thief';
import User from '../models/User';
import Photo from '../models/Photo';

const models = [Thief, User, Photo];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
