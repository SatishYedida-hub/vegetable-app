const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const vegetables = [
  { id: 1, name: "Tomato", price: 20 },
  { id: 2, name: "Potato", price: 30 },
  { id: 3, name: "Carrot", price: 40 }
];

app.get("/api/vegetables", (req, res) => {
  res.json(vegetables);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
