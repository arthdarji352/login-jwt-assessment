import connectToMongo from "./database/db.js";
import express from "express";
import auth from "./routes/auth.js";
import cors from "cors";
import path from "path";

connectToMongo();
const app = express();
const port = 8000;

const __dirname = path.resolve();

// middleware
app.use(express.json());
app.use(cors());

app.use("/api/auth", auth);
app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`App runinng on port ${port}`);
});
