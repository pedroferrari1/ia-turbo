const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Rota de login falsa pra teste
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  if (email === 'admin@admin.com' && senha === '123456') {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });
    return res.json({ token });
  }

  res.status(401).json({ error: 'Acesso negado' });
});

module.exports = router;
