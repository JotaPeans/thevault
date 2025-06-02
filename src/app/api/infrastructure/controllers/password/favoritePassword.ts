"use server";

import createServerAction from "@/app/api/createServerActions";
import { PasswordService } from "@/app/api/domain/services/Password.service";
import { PasswordRepository } from "../../repositories/Password.repository";

export default async function favoritePassword(id: string) {
  return await createServerAction(
    async (user) => {
      const passwordService = new PasswordService(new PasswordRepository(user));
      return await passwordService.favoritePassword(id);
    },
    "favorite-password",
  );
}
