// Dependencies
const express = require("express");
const app = express();



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Set a  Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on PORT: ${port}...'));