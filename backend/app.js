require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
app.use(express.json());
const cors = require('cors');

// allowes access to the back-end to all pages sources
const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));

app.post('/checkout', async (req, res) => {
  const products = req.body
  const lineItems = products.map(product => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.counter,
  }))
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `http://localhost:${port}/success`,
    // cancel_url: `http://localhost:${port}/cancel`,
  });
  res.status(200).json(session.url)
  // res.redirect(303, session.url);
});



app.get('/checkout', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})