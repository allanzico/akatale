const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const {
    config
} = require('firebase-functions');
const {
    request,
    response
} = require('express');
const stripe = require('stripe')('sk_test_51HZyRFJBd9d7yEVyvjUWxaOD0eVIETzHio39HpEXAWPUs5QwUIie4q8FuuPoZdGr3FVI84ks17y8vafW0a2LDQBw00Y8K7GKbY');


//API

//App config
const app = express();

//API Middlewares
app.use(cors({
    origin: true
}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('I WORK'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "eur",
    });

    //Successful
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen Command
exports.api = functions.https.onRequest(app);