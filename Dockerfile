FROM node:18

RUN npm install -g serve

WORKDIR /app

COPY ./backend ./backend
COPY ./frontend ./frontend

# Build do frontend com variável de ambiente
ENV VITE_API_URL=$VITE_API_URL

EXPOSE 80
EXPOSE 3001