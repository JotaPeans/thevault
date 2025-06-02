import { FileType } from "../../domain/models/File";
import {
  CreateFileProps,
  IFileRepository,
} from "../../domain/repositories/File.interface";
import { db } from "../prisma/db";

export class FileRepository implements IFileRepository {
  async getFileByKey(key: string): Promise<FileType | null> {
    return db.file.findUnique({
      where: {
        key: key,
      },
    });
  }

  async getFileByUserId(userId: string): Promise<FileType | null> {
    return db.file.findUnique({
      where: {
        userId: userId,
      },
    });
  }

  async createFile(props: CreateFileProps): Promise<FileType> {
    return db.file.create({
      data: {
        ...props,
      },
    });
  }
}
