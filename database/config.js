const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.MONGODV_CNN);
        console.log("Conexion a base de datos exitosa!")

    } catch (error) {
        console.log(error);
        throw new error('Error a la hora de iniciar la base de datos')
    }

}

module.exports = dbConnection;