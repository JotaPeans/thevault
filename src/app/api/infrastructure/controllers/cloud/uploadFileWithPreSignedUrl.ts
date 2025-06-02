"use server";

import createServerAction from "@/app/api/createServerActions";
import { CloudService } from "@/app/api/domain/services/Cloud.service";
import { R2Repository } from "../../repositories/R2.repository";

export default async function uploadFileWithPreSignedUrl(name: string) {
  return await createServerAction(async () => {
    const cloudService = new CloudService(new R2Repository());
    return await cloudService.uploadFileWithPreSignedUrl(name);
  }, "upload-file-with-pre-signed-url", true);
}
