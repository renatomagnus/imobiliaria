import express from "express";

const app = express()

app.listen(3002, () => {
  console.log("server is running!");
});

app.use("/api/test", (req, res) => {
  res.send("it works")
})