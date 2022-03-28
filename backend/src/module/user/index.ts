import { Router, Request, Response } from "express";

const userRouter = Router();

class UserController {
  public create(request: Request, response: Response) {
    const { email, password } = request.body;

    console.log({ email, password });
  }
}

userRouter.get("/", (req, res) => {
  return res.json({ msg: "Hello" });
});

export default userRouter;
