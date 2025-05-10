const express = require('express');
const router = express.Router();
const axios = require('axios');

// Exemplo de chamada pra Novita (OpenAI compatible)
router.post('/chat', async (req, res) => {
  const { prompt, model } = req.body;

  if (!prompt || !model) {
    return res.status(400).json({ error: 'Prompt e modelo são obrigatórios, porra' });
  }

  try {
    const response = await axios.post(
      process.env.NOVITA_API_BASE + '/chat/completions',
      {
        model,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NOVITA_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error('ERRO NA API DA NOVITA:', err.response?.data || err.message);
    res.status(500).json({ error: 'Erro na requisição pro modelo da Novita' });
  }
});

module.exports = router;
