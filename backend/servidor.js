const express = require('express');
const app = express();
const { mongoose } = require('./database');
const cors = require('cors');
const path = require('path');

//settings
app.set('puerto', process.env.PORT || 3000);
app.set('nombreApp', 'Aplicacion para el restaurante: "La Parrilla de Fabii"');

//Middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/admin', require('./routes/admins.routes'));
app.use('/api/info', require('./routes/info.routes'));
app.use('/api/menu', require('./routes/menuDia.routes'));
app.use('/api/plato', require('./routes/plato.routes'));
app.use('/api/coment', require('./routes/coments.routes'));
app.use('/uploads', express.static(path.resolve('uploads')));

//Starting the server
app.listen(app.get('puerto'), () =>{
    console.log('Nombre de la App:', app.get('nombreApp'));
    console.log('Puerto del servidor:', app.get('puerto'));
})