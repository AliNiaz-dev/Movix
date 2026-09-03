require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { getAIResponse } = require("./services/grokservice");



const app = express();
app.use(cors());
app.use(express.json());




app.post("/chatbot", async(req, res) => {
     try {
    const userMessage = req.body.message;

    const aiReply = await getAIResponse(userMessage);

    res.json({
      reply: aiReply,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      reply: "AI error occurred"
    });
  }
});


 app.listen(3000, () => {
    console.log("Server is running on port 3000");
});