const { response, request } = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');



 const usersGet = async(req = request, res = response) => {
    
    const { q, name, limit= 10, skip = 0} = req.query;
    
    const query = { status: true }

    const [total, users] = await Promise.all( [
        User.countDocuments(query),
        User.find(query)
        .skip(Number(skip))
        .limit(Number(limit))
    ]
 )


    res.json({total,users})
  }
  const usersPut = async (req = request, res = response) => {
    
    const { id } = req.params;
    const { _id, password,...putUser } = req.body; 
    
  
    if (password) {
        // Password encripting 
        const salt = bcryptjs.genSaltSync();
        putUser.password = bcryptjs.hashSync(password, salt);
    }
    const user = await User.findByIdAndUpdate(id, putUser)

    
    res.json(user)
    }
  const usersPost  = async (req = request, res = response) => {
  
    const { name, age, id, email, password, role } = req.body;  
    const user = new User({
        name,
        email,
        password,
        role
    });

    // Password encripting 
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.json({
        user

    })
  }
  const usersDelete = async(req = request, res = response) => {

    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id,{status:false})

    res.json(user)
  }
  const usersPatch = (req, res = response) => {
    res.json({
        msg: 'Patch- api'
    })
  }

  module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
  }