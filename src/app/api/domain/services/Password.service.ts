import { Password } from '../models/Password';
import { CreatePasswordParams, IPasswordRepository, ListPasswordsParams } from './../repositories/Password.interface';

export class PasswordService {
  public constructor(private repository: IPasswordRepository) {}

  async createPassword(params: CreatePasswordParams): Promise<Password> {
    return await this.repository.createPassword(params);
  }
  
  async favoritePassword(id: string): Promise<Password[]> {
    return await this.repository.favoritePassword(id);
  }

  async listPasswords(params: ListPasswordsParams): Promise<Password[]> {
    return await this.repository.listPasswords(params);
  }
  
  async deletePasswordById(id: string): Promise<Password> {
    return await this.repository.deletePasswordById(id);
  }

}