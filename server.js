//Dependencies
const express = require('express');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;


// set up express app for parsing 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Notes Data


// App listener to start server
app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`)

});
