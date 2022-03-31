import knex, { Knex } from "knex";
import knexconfig from "../../db/knexfile";

import { CreateUserDTO, IUserRepository, UserType } from "./types";

// TODO: review types and link with IUserRepository
export default class UserRepository {
  private repository: Knex;

  constructor() {
    this.repository = knex(knexconfig["development"]);
  }

  public async listUsers(): Promise<Knex.QueryBuilder<UserType, UserType>> {
    return this.repository<UserType, UserType>("users").select();
  }

  public async createUser(newUserDTO: CreateUserDTO): Promise<void> {
    await this.repository
      .insert<CreateUserDTO>(newUserDTO)
      .into<UserType>("users");
    return;
  }

  public async findUserById(userId: UserType["id"]): Promise<UserType> {
    const user = await this.repository<UserType, UserType>("users")
      .select()
      .whereRaw("id = ?", [userId]);

    return user;
  }

  public async deleteUserById(userId: UserType["id"]): Promise<UserType> {
    const deletedUser = await this.findUserById(userId);

    await this.repository<UserType>("users").where("id", userId).del();

    return deletedUser;
  }

  public async updateUser(
    userId: UserType["id"],
    newInfo: CreateUserDTO
  ): Promise<void> {
    await this.repository<UserType>("users")
      .where({ id: userId })
      .update<CreateUserDTO>(newInfo);

    return;
  }
}
