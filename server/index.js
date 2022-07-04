import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import homepage from "./routers/homepage.js"

const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use('/home', homepage);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
