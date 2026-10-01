const express = require("express");
const pool = require("./db");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Travel Destinations API is working"
  });
});

app.get("/destinations", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM destinations ORDER BY id");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Could not fetch destinations"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});