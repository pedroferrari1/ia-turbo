const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Plano Pro IA Turbo',
          },
          unit_amount: 3900,
          recurring: {
            interval: 'month',
          }
        },
        quantity: 1,
      }],
      success_url: 'https://premiumdash.site/sucesso',
      cancel_url: 'https://premiumdash.site/cancelado',
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar sessão do Stripe' });
  }
};
