import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  PutObjectCommandInput,
  DeleteObjectCommand,
  DeleteObjectCommandInput,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import mimeTypes from "mime-types";
import { v4 as uuidv4 } from "uuid";

import { convertDateToHex } from "@/lib/utils";
import { settings } from "@/lib/settings";

import { ICloudRepository } from "../../domain/repositories/Cloud.interface";

const ACCOUNT_ID = settings.CLOUDFLARE_ACCOUNT_ID ?? "";
const ACCESS_KEY_ID = settings.CLOUDFLARE_ACCESS_KEY_ID ?? "";
const SECRET_ACCESS_KEY = settings.CLOUDFLARE_SECRET_ACCESS_KEY ?? "";
const BUCKET = settings.CLOUDFLARE_BUCKET ?? "";

export class R2Repository implements ICloudRepository {
  private S3: S3Client;
  private bucket: string;

  public constructor(bucket: string = BUCKET) {
    if (bucket === undefined) {
      this.bucket = BUCKET;
    }
    this.bucket = bucket;

    this.S3 = new S3Client({
      region: "auto",
      endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
      },
    });
  }

  async uploadFile(name: string, file: Buffer): Promise<string> {
    const fileId = `file-${uuidv4()}-${convertDateToHex(
      new Date().toISOString()
    )}`;

    const contentType = mimeTypes.lookup(name) || undefined;

    const extension = name.split(".").pop();

    const key = fileId + "." + extension;

    const params: PutObjectCommandInput = {
      Bucket: this.bucket,
      Body: file,
      ContentType: contentType,
      Key: key,
    };

    const command = new PutObjectCommand(params);
    await this.S3.send(command);
    return key;
  }

  async uploadFileWithPreSignedUrl(
    name: string
  ): Promise<{ key: string; url: string }> {
    const fileId = `file-${uuidv4()}-${convertDateToHex(
      new Date().toISOString()
    )}`;

    const contentType = mimeTypes.lookup(name) || undefined;

    const extension = name.split(".").pop();

    const key = fileId + "." + extension;

    const params: PutObjectCommandInput = {
      Bucket: this.bucket,
      ContentType: contentType,
      Key: key,
    };

    return {
      key,
      url: await getSignedUrl(this.S3, new PutObjectCommand(params), {
        expiresIn: 3600,
      }),
    };
  }

  async getFile(key: string): Promise<string | null> {
    const params = { Bucket: this.bucket, Key: key };

    return await getSignedUrl(this.S3, new GetObjectCommand(params), {
      expiresIn: 3600,
    });
  }

  async deleteFile(key: string): Promise<void> {
    const params: DeleteObjectCommandInput = {
      Bucket: this.bucket,
      Key: key,
    };

    const command = new DeleteObjectCommand(params);
    await this.S3.send(command);
  }
}
