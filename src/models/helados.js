// Importa la biblioteca Mongoose
const mongoose = require("mongoose");

// Define el esquema de solicitud de helados
const esquemaHelado = mongoose.Schema({
  // Campo "sabor" de tipo String, obligatorio
  sabor: {
    type: String,
    required: true,
  }
});

// Exporta el modelo Mongoose llamado 'Helados' basado en el esquema definido
module.exports = mongoose.model('Helados', esquemaHelado);
