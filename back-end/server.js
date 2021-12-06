const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const mongoose = require('mongoose');
// connect to the database
mongoose.connect('mongodb://localhost:27017/sales', {
  useNewUrlParser: true
});

// app.get()
// app.post()
// app.delete()
// app.put()


app.listen(3000, () => console.log('Server listening on port 3000!'));
