const express=require('express');
const app=express();
let controllerMain=require('../controllers/mainController');

app.get('/',controllerMain.main);
app.get('/creditos',controllerMain.creditos);
 
module.exports=app;