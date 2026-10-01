const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Travel Destinations API is working"
  });
});

app.get("/destinations", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Tokyo Trip",
      country: "Japan",
      location: "Tokyo"
    },
    {
      id: 2,
      title: "Rome Holiday",
      country: "Italy",
      location: "Rome"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});