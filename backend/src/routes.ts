import { Router } from "express";
import userRouter from "./module/user";

const routes = Router();

routes.use("/users", userRouter);

export default routes;
