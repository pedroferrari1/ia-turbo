FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos
COPY package*.json ./
RUN npm install

COPY . .

# Porta que o app escuta
EXPOSE 3001

# Start
CMD ["node", "server.js"]