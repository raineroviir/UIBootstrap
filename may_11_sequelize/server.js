'use strict';

var express = require('express');
var app = express();
var notesRouter = express.Router();

require('./routes/notes_routes')(notesRouter)

app.use('/api', notesRouter);
app.listen(3000, function() {
  console.log('server running');
});
