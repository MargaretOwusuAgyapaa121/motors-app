require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS (for frontend requests)
app.use(express.json()); // Parse JSON requests

// Route to fetch cars securely
app.get("/api/cars", async (req, res) => {
  try {
    const { page = 1, limit = 8 } = req.query; // Get pagination details
    const response = await axios.get("https://carapi.app/features/json-api-specs", {
      params: { limit, page },
      headers: { Authorization: `Bearer ${process.env.CAR_API_KEY}` },
    });

    res.json(response.data); // Send data to the frontend
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: "Failed to fetch cars" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

