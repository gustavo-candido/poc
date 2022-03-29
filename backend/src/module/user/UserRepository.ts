import { CreateUserDTO, IUserRepository, UserType } from "./types";

export default class UserRepository implements IUserRepository {
  private repository: UserType[];

  constructor() {
    this.repository = [];
  }

  public listUsers(): UserType[] {
    return this.repository;
  }

  public createUser(newUserDTO: CreateUserDTO): UserType {
    const newUser = { id: this.repository.length, ...newUserDTO };
    this.repository.push(newUser);
    return newUser;
  }

  public findUserById(userId: UserType["id"]): UserType {
    const user = this.repository.find((user: UserType) => user.id === userId);
    return user!; // TODO: remove !
  }

  public deleteUserById(userId: UserType["id"]): UserType {
    const deletedUser = this.findUserById(userId);

    this.repository = this.repository.filter(
      (user: UserType) => user.id !== userId
    );

    return deletedUser;
  }

  public updateUser(userId: UserType["id"], newInfo: CreateUserDTO): UserType {
    // TODO: this can be undefined
    const userIndex = this.repository.findIndex(
      (user: UserType) => user.id === userId
    );

    this.repository[userIndex] = { ...this.repository[userIndex], ...newInfo };

    return this.repository[userIndex];
  }
}
