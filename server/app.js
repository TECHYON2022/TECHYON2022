import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("I'm Working!!");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
