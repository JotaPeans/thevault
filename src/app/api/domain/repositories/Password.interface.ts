import { Password } from "../models/Password";

export interface ListPasswordsParams {
  page?: number;
  size?: number;
  filters?: {
    name?: string;
  };
}

export type CreatePasswordParams = Pick<
  Password,
  | "title"
  | "password"
  | "website"
  | "strength"
  | "userId"
  | "username"
  | "category"
>;

export interface IPasswordRepository {
  createPassword(params: CreatePasswordParams): Promise<Password>;
  listPasswords(params: ListPasswordsParams): Promise<Password[]>;
  deletePasswordById(id: string): Promise<Password>;
  favoritePassword(id: string): Promise<Password>;
}
