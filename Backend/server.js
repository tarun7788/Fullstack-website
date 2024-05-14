const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');
const cors = require('cors');


const app = express();
const PORT = 5000;
const uri = "mongodb+srv://tarunsaraswat77:Tarun77%40@cluster0.5yo78oj.mongodb.net/";

let login=false;


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(cors());
app.use(bodyParser.json());

app.post('/contactme', async (req, res) => {
  console.log(req.body)
  try {
    const data = await req.body;
    const {name, email, message} = data;
    const newUser = new User({ name, email, message });

    await newUser.save();
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
});
