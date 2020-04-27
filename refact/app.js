
let routesMain=require('./routes/main');
let routesHeroe= require('./routes/heroes');
const express = require('express');

const app = express();
// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/',routesMain);
app.use('/heroes',routesHeroe);

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
