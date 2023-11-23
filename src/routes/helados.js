const express = require("express");
const esquemaHelado = require("../models/helados");

// Crea un enrutador de Express
const router = express.Router();

// Crear helado
router.post("/helados", (req, res) => {
  // Crea una instancia del modelo Helados con los datos del cuerpo de la solicitud
  const helado = new esquemaHelado(req.body);

  // Guarda el helado en la base de datos
  helado
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

// Obtener todos los helados
router.get("/helados", (req, res) => {
  // Busca todos los helados en la base de datos
  esquemaHelado
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

// Obtener un helado por ID
router.get("/helados/:id", (req, res) => {
  const { id } = req.params;

  // Busca un helado por su ID en la base de datos
  esquemaHelado
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

// Eliminar un helado por ID
router.delete("/helados/:id", (req, res) => {
  const { id } = req.params;

  // Elimina un helado por su ID de la base de datos
  esquemaHelado
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

// Actualizar un helado por ID
router.put("/helados/:id", (req, res) => {
  const { id } = req.params;
  const { sabor } = req.body;

  // Actualiza un helado por su ID en la base de datos
  esquemaHelado
    .updateOne({ _id: id }, { $set: { sabor } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});

// Exporta el enrutador
module.exports = router;
