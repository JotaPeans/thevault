import { ICloudRepository } from "../repositories/Cloud.interface";

export class CloudService {
  constructor(private repository: ICloudRepository) {}

  async uploadFile(name: string, file: Buffer) {
    return await this.repository.uploadFile(name, file);
  }

  async uploadFileWithPreSignedUrl(name: string) {
    return await this.repository.uploadFileWithPreSignedUrl(name);
  }

  async getFile(key: string) {
    return await this.repository.getFile(key);
  }

  async deleteFile(key: string) {
    return await this.repository.deleteFile(key);
  }
}