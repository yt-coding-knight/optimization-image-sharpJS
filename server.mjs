import cors from "cors";
import express from "express";
import multer from "multer";
import router from "./routes.mjs";

const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();

app.use(multer({ storage }).single("image"));
app.use(router);

app.listen(3000, () => console.log(`server running on port ${3000}`));
