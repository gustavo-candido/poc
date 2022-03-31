import { Request, Response } from "express";
import UserRepository from "./UserRepository";
import { IUserRepository } from "./types";

type UserRepoType = UserRepository;
export default class UserController {
  constructor(private userRepository: UserRepoType) {}

  public async create(request: Request, response: Response) {
    const { email, password } = request.body;
    const createdUser = this.userRepository.createUser({
      email,
      password,
    });

    return response.json(createdUser);
  }

  public async list(_: Request, response: Response) {
    const users = await this.userRepository.listUsers();
    return response.json(users);
  }

  public async findById(request: Request, response: Response) {
    const { userIdPar } = request.params;
    const userId = parseInt(userIdPar);

    const user = await this.userRepository.findUserById(userId);
    return response.json(user);
  }

  public async deleteById(request: Request, response: Response) {
    const { userIdPar } = request.params;
    const userId = parseInt(userIdPar);
    return response.json(await this.userRepository.deleteUserById(userId));
  }

  public async updateUser(request: Request, response: Response) {
    const { email, password } = request.body;
    const { userIdPar } = request.params;
    const userId = parseInt(userIdPar);
    return response.json(
      await this.userRepository.updateUser(userId, { email, password })
    );
  }
}
