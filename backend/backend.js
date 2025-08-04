const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;
const SECRET_PASSWORD = process.env.SECRET_PASSWORD || 'default-pass';

// List of allowed origins
const allowedOrigins = [
  'http://localhost:3001',
  'http://lfrontend-service'
];

// CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));


    }
  }
}));

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello123 from backend!', secret: SECRET_PASSWORD });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
