import Sequelize from 'sequelize';

import Workers from '../app/models/Workers';

import databaseConfig from '../config/database';

const models = [Workers];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
