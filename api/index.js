import express from "express";
import routes from "./routes/index";

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/", routes);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
