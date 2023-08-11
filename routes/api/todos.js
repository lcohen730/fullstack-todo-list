const express = require('express');
const router = express.Router();
const todoCtrl = require('../../controllers/api/todos');

//  Index incomplete /api/todos
router.get('/', todoCtrl.indexNotComplete, todoCtrl.jsonTodos)
// Index complete  /api/todos/complete
router.get('/complete', todoCtrl.indexComplete, todoCtrl.jsonTodos)
// Delete /api/todos/:id
// display the todo
router.delete('/:id', todoCtrl.destroy, todoCtrl.jsonTodo)
// or just send a status code
// router.delete('/:id', todoCtrl.destroy, (req, res) = > res.status(204))
// Update
router.put('/:id', todoCtrl.update, todoCtrl.jsonTodo)
// Create
router.post('/', todoCtrl.create, todoCtrl.jsonTodo)
// Show
router.get('/:id', todoCtrl.show, todoCtrl.jsonTodo)

module.exports = router