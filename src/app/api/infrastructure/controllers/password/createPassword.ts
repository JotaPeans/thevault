"use server";

import createServerAction from "@/app/api/createServerActions";
import { PasswordService } from "@/app/api/domain/services/Password.service";
import { CreatePasswordParams } from "@/app/api/domain/repositories/Password.interface";
import { PasswordRepository } from "../../repositories/Password.repository";

export default async function createPassword(params: CreatePasswordParams) {
  return await createServerAction(
    async (user) => {
      const passwordService = new PasswordService(new PasswordRepository(user));
      return await passwordService.createPassword(params);
    },
    "create-password",
  );
}
