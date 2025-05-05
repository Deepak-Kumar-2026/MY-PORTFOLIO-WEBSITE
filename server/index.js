

require('dotenv').config();  // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Database connected to MongoDB Atlas'))
.catch(err => console.log('❌ Database connection error:', err));

// Mongoose Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model('Contact', contactSchema);

// POST endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log("📥 Incoming contact data:", req.body);
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("✅ Contact saved to MongoDB Atlas");
    res.status(200).json({ message: '✅ Contact form submitted successfully' });
  } catch (err) {
    console.error('❌ Error saving contact:', err);
    res.status(500).json({ message: '❌ Error saving contact form' });
  }
});

// Start server
app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
