/* IMPORTAÇÃO DO SEQUELIZE */
const sequelize = require('sequelize');

/* IMPORTAÇÃO DA CONEXÃO COM O BANCO DE DADOS */
const connection = require('../database/database');

/* 
DEFINIÇÃO DA ESTRUTURA DA TABELA PACIENTE 
PARAMETROS:
1 - NOME DA TABELA
2 - UM OU MAIS OBJETOS JSON QUE VÃO REPRESENTAR OS CAPOS, SEUS TIPOS E
    REGRAS DE PREENCHIMENTO
*/

/* IMPORTAÇÃO DA MODEL DE MEDICO */
const categoria = require('../model/medicoModel');

const paciente = connection.define(
  'tbl_paciente',
  {
      cod_paciente:{
          type: sequelize.STRING(500),
          allowNull:false
      },
      nome_paciente:{
          type: sequelize.STRING(500),
          allowNull:false
      },
      telefone_paciente:{
          type: sequelize.STRING(500),
          allowNull:false
      },
      celular_paciente:{
          type: sequelize.STRING(500),
          allowNull:false
      },
      email_paciente:{
          type: sequelize.STRING(500),
          allowNull:false
      },
      foto_paciente:{
          type: sequelize.STRING(500),
          allowNull:false
      },
      nome_responsavel:{
          type: sequelize.STRING(500),
          allowNull:true
      },
      telefone_responsavel:{
          type: sequelize.STRING(500),
          allowNull:true
      },
  }
);

/* A CHAVE PRIMÁRIA (1) DE CATEGORIA VIRA UMA CHAVE ESTRAGEIRA (N) EM LIVRO */
paciente.hasMany(medico);

/*A CHAVE ESTRANGEIRA DE LIVRO (N) É ACHAVE PRIMARIA DE CATEGORIA (1)*/
medico.belongsTo(paciente);

//paciente.sync({force:true});

module.exports = paciente;
