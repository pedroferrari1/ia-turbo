const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Rotas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/stripe', require('./routes/stripe'));
app.use('/api/ai', require('./routes/ai'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porra da porta ${PORT}`);
});
