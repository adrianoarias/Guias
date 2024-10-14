# Fase de construcción (Build)
FROM node:20-alpine 

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de definición de dependencias
COPY package*.json ./

# Instalar las dependencias de Node.js
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación frontend
RUN npm run build

# Exponer el puerto 80
EXPOSE 8080

# Comando por defecto para iniciar Nginx
CMD ["npm", "run", "serve"]
