import { Request, Response } from "express";
import UserRepository from "./UserRepository";
import { IUserRepository } from "./types";

export default class UserController {
  constructor(private userRepository: IUserRepository) {}

  public create(request: Request, response: Response) {
    const { email, password } = request.body;
    return response.json(this.userRepository.createUser({ email, password }));
  }

  public list(_: Request, response: Response) {
    return response.json(this.userRepository.listUsers());
  }

  public findById(request: Request, response: Response) {
    const { userIdPar } = request.params;
    const userId = parseInt(userIdPar);
    return response.json(this.userRepository.findUserById(userId));
  }

  public deleteById(request: Request, response: Response) {
    const { userIdPar } = request.params;
    const userId = parseInt(userIdPar);
    return response.json(this.userRepository.deleteUserById(userId));
  }

  public updateUser(request: Request, response: Response) {
    const { email, password } = request.body;
    const { userIdPar } = request.params;
    const userId = parseInt(userIdPar);
    return response.json(
      this.userRepository.updateUser(userId, { email, password })
    );
  }
}
