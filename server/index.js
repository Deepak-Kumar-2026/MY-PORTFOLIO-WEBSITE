

// require('dotenv').config();  // Load environment variables

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors({ origin: process.env.CORS_ORIGIN }));
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('✅ Database connected to MongoDB Atlas'))
// .catch(err => console.log('❌ Database connection error:', err));

// // Mongoose Schema and Model
// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
// });
// const Contact = mongoose.model('Contact', contactSchema);

// // POST endpoint
// app.post('/api/contact', async (req, res) => {
//   const { name, email, message } = req.body;
//   console.log("📥 Incoming contact data:", req.body);
//   try {
//     const newContact = new Contact({ name, email, message });
//     await newContact.save();
//     console.log("✅ Contact saved to MongoDB Atlas");
//     res.status(200).json({ message: '✅ Contact form submitted successfully' });
//   } catch (err) {
//     console.error('❌ Error saving contact:', err);
//     res.status(500).json({ message: '❌ Error saving contact form' });
//   }
// });

// // Start server
// app.listen(5000, () => {
//   console.log('🚀 Server running on http://localhost:5000');
// });












// Load environment variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model('Contact', contactSchema);

// API endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ message: '✅ Contact form submitted successfully' });
  } catch (err) {
    console.error('❌ Error saving contact:', err);
    res.status(500).json({ message: '❌ Failed to submit contact form' });
  }
});

// Serve React frontend (from client/build)
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
