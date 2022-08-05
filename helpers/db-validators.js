const Role = require('../models/role');
const Usuario = require('../models/user');

const isValidRole = async(role = '') =>{

    const exist = await Role.findOne({role});

    if (!exist) {
        throw new Error(`El rol: ${ role } no está registrado en la DB`);
    }
}

const emailExist = async(email = '') => {
    const exist = await Usuario.findOne({email}); 

    if (exist) {
        throw new Error(`El correo: ${ email } ya está registrado`);
    }
}
const idExist = async(id = '') => {
    const exist = await Usuario.findOne({id}); 

    if (!exist) {
        throw new Error(`El ID: ${ id } no existe`);
    }
}

module.exports = {
    isValidRole,
    emailExist,
    idExist
}