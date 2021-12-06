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

const itemSchema = new mongoose.Schema({
  title: String,
  path: String,
  description: String,
  category: String,
});
const Item = mongoose.model('Item', itemSchema);

const userSchema = new mongoose.Schema({
  name: String,
  cart: Array,
});
const User = mongoose.model('User', userSchema);

// add user to server
app.post('/api/user', async (req, res) => {
  const user = new User({
    name: req.body.name,
    cart: [],
  });
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// retrieve user Cart
app.get('/api/user/:id', async (req, res) => {
  try {
    let user = await User.findOne({
      _id: req.params.id
    });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// modify user cart
app.put('/api/user/:id', async (req, res) => {
  try {
    let user = await User.findOne({
      _id: req.params.id
    });
    user.cart = req.body.cart;
    await user.save();
    res.send(user);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// add images to server for later use
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// adds the actual item to the server
app.post('/api/items', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    path: req.body.path,
    description: req.body.description,
    category: req.body.category,
  });
  try {
    await item.save();
    res.send(item);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// retrieves all items from server
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// removes an item from server
app.delete('/api/items/:id', async (req, res) => {
  try {
    Item.deleteOne({
      _id: req.params.id
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// modify item on server
app.put('/api/items/:id', async (req, res) => {
  try {
    let item = await Item.findOne({
      _id: req.params.id
    });
    item.title = req.body.title;
    item.description = req.body.description;
    item.path = req.body.path;
    item.category = req.body.category;
    await item.save();
    res.send(item);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
