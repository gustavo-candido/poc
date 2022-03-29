import { Router, Request, Response } from "express";
import UserController from "./UserController";
import UserRepository from "./UserRepository";

const userRouter = Router();

const userRepository = new UserRepository();
const userController = new UserController(userRepository);

userRouter.post("/create", (req, res) => userController.create(req, res));
userRouter.patch("/:userIdPar/update", (req, res) =>
  userController.updateUser(req, res)
);
userRouter.get("/", (req, res) => userController.list(req, res));
userRouter.get("/:userIdPar", (req, res) => userController.findById(req, res));
userRouter.delete("/:userIdPar", (req, res) =>
  userController.deleteById(req, res)
);

export default userRouter;
