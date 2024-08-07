import express from "express";
const app = express();

app.get("/gets", (req, res)=>{
  res.json({message:"Hello"});
})

app.listen(3000);