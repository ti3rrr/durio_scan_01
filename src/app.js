// Import

const express = require('express');
const route = require('./routes/route');
const app = express();
const path = require('path');

// Static Files
app.use(express.static(path.join(__dirname, '../public')));
// app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.use('/js', express.static(path.join(__dirname, '../public/js')));
app.use('/img', express.static(path.join(__dirname, '../public/img')));

app.get("/test", (req, res) => {
  res.send("API is working!");
});

app.use('/', route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Bubble node app running on port " + port);
});
