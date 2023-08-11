const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
// const logger = require('morgan');

// middleware
app.use(express.json()) // req.body
app.use((_, res, next) => {
    res.locals.data = {}
    next()
})
// app.use(logger('dev'))
// if you want to use the below, google favicon and add it to your project
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(favicon(path.join(__dirname, 'public', 'img', 'logo.png')))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/todos', require('./routes/api/todos'))
app.get('*', (_, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app