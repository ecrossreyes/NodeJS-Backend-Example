const { response, request } = require('express');


 const usersGet = (req = request, res = response) => {
    
    const { q, name, limit= 5, page = 1} = req.query;
    
    res.json({
        msg: 'get- api',
        q,
        name,
        limit,
        page
    })
  }
  const usersPut = (req = request, res = response) => {
    
    const { id } = req.params;
    
    res.json({
        msg: 'Put- api',
        id
    })
    }
  const usersPost = (req = request, res = response) => {
    
    const { name, age, id } = req.body;
    
    res.json({
        msg: 'Post- api',
        name,
        id,
        age

    })
  }
  const usersDelete = (req = request, res = response) => {

    const { id } = req.params;
    
    res.json({
        msg: 'Delete- api',
        id
    })
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