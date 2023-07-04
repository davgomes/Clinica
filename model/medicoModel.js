/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

const medico = connection.define(
  'tbl_medico',
  {
    nome_medico:{
      type: sequelize.STRING,
      allowNull: false
    }
  }
);

module.exports = medico;