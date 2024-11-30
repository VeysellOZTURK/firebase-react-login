const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;
const MONGO_URI = "mongodb://localhost:27017/userDB";

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);

// MongoDB Bağlantısı
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB bağlantısı başarılı."))
  .catch(err => console.error(err));

// Sunucu Başlat
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
