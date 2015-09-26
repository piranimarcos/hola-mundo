var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'app-codigofacilito'
    },
    port: 3000,
    db: 'mongodb://localhost/primera_pagina'
  },

  test: {
    root: rootPath,
    app: {
      name: 'app-codigofacilito'
    },
    port: 3000,
    db: 'mongodb://localhost/app-codigofacilito-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'app-codigofacilito'
    },
    port: 3000,
    db: 'mongodb://localhost/app-codigofacilito-production'
  }
};

module.exports = config[env];
