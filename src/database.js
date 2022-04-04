const mongoose = require('mongoose');
const URI = 'mongodb+srv://LauraVargas:Lauris1019033@cluster0.hsbht.mongodb.net/todoList?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;