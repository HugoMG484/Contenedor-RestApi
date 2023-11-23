# Establece la imagen base de Node.js con la versión 16
FROM node:16

# Crea el directorio de la aplicación en la imagen
RUN mkdir -p /usr/src/app

# Establece el directorio de trabajo 
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación a la imagen
COPY . .

# Expone el puerto 9000 para que la aplicación pueda ser accedida desde fuera del contenedor
EXPOSE 9000

# Define el comando predeterminado que se ejecutará cuando el contenedor se inicie
CMD ["npm", "start"]
