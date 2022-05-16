const express = require('express');
const router = express.Router();

const UserService = require('../services/user.service');

module.exports = () => {

  router.get('/', UserService.getUsers);
  router.get('/:id', UserService.getUser);
  router.post('/', UserService.addUser);
  router.put('/', UserService.updateUser);
  router.delete('/:id', UserService.deleteUser);

  return router;
}
