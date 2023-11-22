import express from "express";
import path from "path";
import { PORT } from "./config.js";
import indexRoutes from "./routes/payment.routes.js";

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(indexRoutes);

app.use(express.static(path.resolve("src/public")));

app.listen(PORT);
console.log("Server on port", PORT);
