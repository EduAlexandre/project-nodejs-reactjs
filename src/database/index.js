import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Thief from '../models/Thief';
import User from '../models/User';

const models = [Thief, User];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
