import { FileType } from "../models/File";
import {
  CreateFileProps,
  IFileRepository,
} from "../repositories/File.interface";

export class FileService {
  public constructor(private repository: IFileRepository) {}

  async getFileByKey(key: string): Promise<FileType | null> {
    return this.repository.getFileByKey(key);
  }
  async getFileByUserId(userId: string): Promise<FileType | null> {
    return this.repository.getFileByUserId(userId);
  }
  async createFile(props: CreateFileProps): Promise<FileType> {
    return this.repository.createFile(props);
  }
}
