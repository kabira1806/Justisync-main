const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Connect to Database (THIS WAS MISSING)
require('./db'); 

const app = express();

// Middleware
app.use(cors({
  origin: "https://justisync-main-uck7.vercel.app", // Yahan apna frontend URL daalein
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("JustiSync Backend is LIVE 🚀");
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/cases', require('./routes/cases'));
app.use('/api/schedule', require('./routes/schedule'));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});