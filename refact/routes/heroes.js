const express=require('express');
const app=express();
let controllerHeroes=require('../controllers/heroesController');

app.get('/',controllerHeroes.mostrarArray);
app.get('/detalles/:id',controllerHeroes.detalle);
app.get('/bio/:id/:ok?',controllerHeroes.biografia);

module.exports=app;

