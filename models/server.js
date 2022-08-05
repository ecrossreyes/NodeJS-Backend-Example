const express = require('express')
var cors = require('cors');
const { route } = require('../routes/users.route');
const dbConnection = require('../database/config');


class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT;
        this.endPoint = '/api';
        this.usersPath = this.endPoint +'/users';
        
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){

        // CORS
        this.app.use(cors())

        // lectura y parseo del body
        this.app.use(express.json());

        // Directorio Publico
        this.app.use(express.static('public'));
    }

    routes() {
        
         this.app.use(this.usersPath, require('../routes/users.route')); 
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto:',this.port);
        });

    }
}

module.exports = Server;
