const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

let orders = []

// Define a default route
app.get('/', (req, res) => {
    //res.send('hello world');
    res.render('home');
});

// Route for the order form
app.get('/order', (req, res) => {
    res.render('order');
});

// Route to handle form submission
app.post('/submit-order', (req, res) => {
    // Capture the order details from the form
    const orderDetails = req.body;

    // Add to list
    orders.push(orderDetails);

    console.log(orders);

    // Pass the order details to the view
    res.render('confirmation', { order: orderDetails });
});

app.get('/admin', async (req, res) => {
    // Pass the orders to the view
    res.render('admin', { orders: orders });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});