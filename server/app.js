import express from "express";
import bodyParser from "body-parser"
import cors from 'cors'
import path from 'path';
import router from "./routes/index.js";
import connectDB from '../server/config/db.js'

const app = express();
const __dirname = path.resolve();

// JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(router)

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("I'm Working!!");
// });

connectDB();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
