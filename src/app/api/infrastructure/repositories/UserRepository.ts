import { User } from "../../domain/models/User";
import {
  IUserRepository,
} from "../../domain/repositories/UserRepository.interface";
import { db } from "../prisma/db";

export class UserRepository implements IUserRepository {
  async getUserByEmail(email: string): Promise<User | null> {
    return await db.user.findUnique({ where: { email } });
  }

  async createUser(
    name: string,
    email: string,
    organizationId?: string
  ): Promise<User> {
    return await db.user.create({
      data: { name, email, organizationId, emailVerified: false },
    });
  }

  async getUserById(id: string): Promise<User | null> {
    return await db.user.findUnique({ where: { id } });
  }
}
