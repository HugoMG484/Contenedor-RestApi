#!/usr/bin/env node

// Importa las bibliotecas necesarias
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();  // Importa la configuración de variables de entorno
const rutaHelados = require("./routes/helados");

// Configuración
const app = express();  // Crea una instancia de Express
const puerto = process.env.PUERTO || 9000;  // Puerto del entorno a utilizar

app.use(express.json());  // Habilita el parsing de JSON en las solicitudes
app.use("/api", rutaHelados);  // Rutas para las solicitudes que comienzan con "/api"

// Rutas
app.get("/", (req, res) => {
  res.send("API de Helados");  // Mensaje cuando se accede a la raíz del servidor
});

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)  // Conecta a la base de datos MongoDB utilizando la URI especificada en las variables de entorno
  .then(() => console.log("Conectado a MongoDB Atlas"))  // Mensaje si la conexión es exitosa
  .catch((error) => console.error(error));  // Mensaje de error si hay algún problema con la conexión

// Inicia el servidor
app.listen(puerto, () => console.log("Servidor escuchando en el puerto", puerto));
