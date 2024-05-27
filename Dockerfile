# Usa una imagen de Node.js como base
FROM node:16-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install --legacy-peer-deps

# Copia todo el código fuente
COPY . .

# Construye la aplicación React.js
RUN npm run build

# ir al directorio server y construir el servidor de express
WORKDIR /app/server
RUN npm install

# Usa una imagen ligera para el entorno de producción
FROM node:16-alpine

# Instala PM2 globalmente
RUN npm install -g pm2

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios desde la fase de construcción
COPY --from=builder /app/server ./server
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expone el puerto que usa Next.js
EXPOSE 9000

# Comando por defecto para ejecutar la aplicación
CMD ["pm2-runtime", "npm", "--", "start"]
