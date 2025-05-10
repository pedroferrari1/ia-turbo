
FROM node:18

# Instalando serve para rodar o front
RUN npm install -g serve

WORKDIR /app

COPY ./backend ./backend
COPY ./frontend ./frontend

EXPOSE 80
EXPOSE 3001
