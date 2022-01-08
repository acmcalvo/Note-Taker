//Dependencies
const express = require('express');
const path = require('path')
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');


// set up express App
const app = express();
const PORT = process.env.PORT || 3000;


// set up express app for parsing 
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

// Routes 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Notes Data


// App listener to start server
app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`)

});
