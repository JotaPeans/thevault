export interface ICloudRepository {
  uploadFile(name: string, file: Buffer): Promise<string>;
  uploadFileWithPreSignedUrl(name: string): Promise<{ key: string; url: string }>;
  getFile(key: string): Promise<string | null>; //file url access
  deleteFile(key: string): Promise<void>;
}