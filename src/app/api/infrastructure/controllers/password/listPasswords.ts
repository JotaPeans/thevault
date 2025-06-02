"use server";

import createServerAction from "@/app/api/createServerActions";
import { PasswordService } from "@/app/api/domain/services/Password.service";
import { ListPasswordsParams } from "@/app/api/domain/repositories/Password.interface";
import { PasswordRepository } from "../../repositories/Password.repository";

export default async function listPasswords(params: ListPasswordsParams) {
  return await createServerAction(
    async (user) => {
      const passwordService = new PasswordService(new PasswordRepository(user));
      return await passwordService.listPasswords(params);
    },
    "list-passwords",
  );
}
