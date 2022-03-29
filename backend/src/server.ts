import express from "express";
import routes from "./routes";
import { knex as knx } from "knex";
import knexconfig from "./db/knexfile";

const app = express();
const port = 3000;

const knex = knx(knexconfig["development"]);

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
