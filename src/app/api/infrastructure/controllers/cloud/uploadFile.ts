"use server";

import createServerAction from "@/app/api/createServerActions";
import { CloudService } from "@/app/api/domain/services/Cloud.service";
import { FileService } from "@/app/api/domain/services/File.service";

import { R2Repository } from "../../repositories/R2.repository";
import { FileRepository } from "../../repositories/File.repository";

interface UploadFileWithPreSignedUrlProps {
  name: string;
  file: Buffer;
}

export default async function uploadFileWithPreSignedUrl({
  name,
  file,
}: UploadFileWithPreSignedUrlProps) {
  return await createServerAction(async (user) => {
    const cloudService = new CloudService(new R2Repository());
    const key = await cloudService.uploadFile(name, file);

    const fileService = new FileService(new FileRepository());
    await fileService.createFile({
      name,
      key,
      userId: user.id,
    });

    return key;
  }, "upload-file");
}
