// Express is a tool for creating web servers with Node
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

// If the variable exists, that means we are on Heroku and we do want to use the port value that it assigns.
// If it doesn't, we can default to something like 3000.

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});