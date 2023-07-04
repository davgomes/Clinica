/*IMPORT DO PACOTE EXPRESS*/
const express = require  ('express');

// IMPORT DO PACOTE MULTER
const multer = require ('multer')

/*INSTANCIA EXECUTAVEL DO EXPRESS*/
const app = express();

/*HABILITA A APLICAÇÃO A MANIPULAR JSON*/
app.use(express.json());

/*HABILITA A APLICAÇÃO A MANIPULAR DADOS DE UM CORPO DE DADOS*/
app.use(express.urlencoded({extended:true}));

/*ROTA PACIENTE */
const pacienteController = require ('./controller/pacienteController');
app.use('/', pacienteController);

/*ROTA MEDICO */
const medicoController = require ('./controller/medicoController');
app.use('/', medicoController);

// ESCUTADOR
app.listen(3000, ()=>{
  console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});