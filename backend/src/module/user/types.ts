export type UserType = {
  id: number;
  email: string;
  password: string;
};

export type CreateUserDTO = Omit<UserType, "id">;

export interface IUserRepository {
  createUser: (newUserDTO: CreateUserDTO) => UserType;
  deleteUserById: (userId: UserType["id"]) => UserType;
  findUserById: (userId: UserType["id"]) => UserType;
  listUsers: () => UserType[];
  updateUser: (userId: UserType["id"], newInfo: CreateUserDTO) => UserType;
}
