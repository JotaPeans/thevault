import { IUserRepository } from "../repositories/UserRepository.interface";
import { User } from "../models/User";

export class UserService {
  constructor(private repository: IUserRepository) {}

  async getUser(email: string): Promise<User | null> {
    return await this.repository.getUserByEmail(email);
  }

  async createUser(
    name: string,
    email: string,
    organizationId?: string
  ): Promise<User> {
    return await this.repository.createUser(name, email, organizationId);
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.repository.getUserById(id);
  }
}
