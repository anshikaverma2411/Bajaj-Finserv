const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.post("/bfhl", (req, res) => {
  const { data } = req.body;
  const user_id = "john_doe_17091999";
  const email = "john@xyz.com";
  const roll_number = "ABCD123";

  let numbers = [];
  let alphabets = [];

  data.forEach((item) => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === "string" && item.length === 1) {
      alphabets.push(item);
    }
  });

  const highest_alphabet = alphabets.length
    ? [alphabets.sort().reverse()[0]]
    : [];

  res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_alphabet,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
