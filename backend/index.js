const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Message = require("./models/Message");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors({
  origin:"*"
}));
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();


    // 3) Always success (DB ho gaya)
    return res.status(200).json({ success: true });

  } catch (error) {
    console.log("ERROR:", error);
    return res.status(500).json({ success: false });
  }
});