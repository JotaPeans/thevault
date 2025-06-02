import { Password } from '../../domain/models/Password';
import { CreatePasswordParams, IPasswordRepository, ListPasswordsParams } from './../../domain/repositories/Password.interface';
import { db } from '../prisma/db';
import { User } from '../../domain/models/User';

export class PasswordRepository implements IPasswordRepository {
  public constructor(private user: User) {}

  async createPassword(params: CreatePasswordParams): Promise<Password> {
    throw new Error('Method not implemented.');
  }

  async listPasswords({ page = 1, size = 10, filters }: ListPasswordsParams): Promise<Password[]> {
    return await db.password.findMany({
      where: {
        userId: this.user.id,
        title: filters?.name || undefined
      },
      take: size,
      skip: size * (page - 1)
    });
  }

  async favoritePassword(id: string): Promise<Password> {
    throw new Error('Method not implemented.');
  }

  async deletePasswordById(id: string): Promise<Password> {
    throw new Error('Method not implemented.');
  }

}