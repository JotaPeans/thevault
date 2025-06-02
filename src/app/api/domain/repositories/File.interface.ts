import { FileType } from "../models/File";

export interface CreateFileProps {
  name: string;
  key: string;
  userId: string;
}

export interface IFileRepository {
  getFileByKey(key: string): Promise<FileType | null>;
  getFileByUserId(userId: string): Promise<FileType | null>;
  createFile(props: CreateFileProps): Promise<FileType>;
}