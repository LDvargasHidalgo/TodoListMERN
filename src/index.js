const express = require('express');
const morgan =require('morgan');
const path = require('path');
const app = express();

// Db connection
const { mongoose } = require('./database');

//setting
app.set('port',process.env.PORT || 3005); //Sirve para que tome el puerto del servidor de la nube ,sino le dejamos por defecto el 3000


//middlewares (funciones que se ejecutan antes de que lleguen  las rutas)
app.use(morgan('dev'));
app.use(express.json());

//Routes (url de nuestro server)
app.use('/api/tasks', require('./routes/task.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

app.listen(app.get('port'), ()=>{
   console.log(`server on ${app.get('port')}`);
});