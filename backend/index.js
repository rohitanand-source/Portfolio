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

      // 2. Send Email
      // const transporter = nodemailer.createTransport({
      // service: "gmail",
      // auth: {
      //   user: process.env.EMAIL_USER,
      //   pass: process.env.EMAIL_PASS,
      // },
      // });

      // await transporter.sendMail({
      // from: email,
      // to: process.env.EMAIL_USER,
      // subject: `New Message from ${name}`,
      // text: `
      // Name: ${name}
      // Email: ${email}
      // Message: ${message}
      // `,
      // });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error:",error);
    res.status(500).json({ success: false, error:error.message });
  }
});