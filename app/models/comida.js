var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var comidaSchema = new Schema({
  titulo: String,
  descripcion: String,
  imagen: String,
  precio: Number
},{collection: 'Comida'});

mongoose.model('Comida', comidaSchema);
