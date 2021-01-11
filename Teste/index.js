const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/database.js');
const { User } = require('./app/models'); 

const db = {};
const sequelize = new Sequelize(config);

const app = express();
const axios = require('axios');
const { Console } = require('console');
const { url } = require('inspector');

var express = require('express')
var app = express()

app.get('/users', (req, res) => {}); 
app.post('/users', (req, res) => {}); 
app.get('/users:cpf', (req, res) => {}); 

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get('/', async (req, res) => {
  const {cep} = req.query
  const apicep = await axios({url: `http://viacep.com.br/ws/${cep}/json/`})
  res.json(apicep)
})

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
