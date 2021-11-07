import express from "express";
import cors from "cors";
import routes from "./routes/index";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: `http://localhost:3000`,
  })
);

app.use("/api", routes);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
