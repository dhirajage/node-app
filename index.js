const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root landing page
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the DevOps Winter Arc Integration Project!",
    status: "Running",
    timestamp: new Date()
  });
});

// Health check endpoint for monitoring & probes
app.get('/health', (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});