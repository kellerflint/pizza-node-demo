const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define a default route
app.get('/', (req, res) => {
    //res.send('hello world');
    res.render('home');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});