import { User } from "../models/User";

export interface IUserRepository {
  getUserByEmail(email: string): Promise<User | null>;
  createUser(name: string, email: string, organizationId?: string): Promise<User>;
  getUserById(id: string): Promise<User | null>
}