import express, { Application } from "express";
import cors from "cors";
import routes from "./routes";
import { connect as DBConnect } from "mongoose";
import config from "./config";
import { pluralize as DBPluralize } from "mongoose";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

DBPluralize(null);

app
  .listen(config.app.port, () => {
    console.log("Connected to port " + config.app.port);

    DBConnect(config.db.url, (err) => {
      if (err) return console.log("Connection failed " + err);

      console.log("Connected to database");
    });
  })
  .on("error", (err) => {
    console.log("Connection failed " + err);
  });
