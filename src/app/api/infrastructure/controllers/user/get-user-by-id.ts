"use server"

import createServerAction from "@/app/api/createServerActions";
import { UserRepository } from '@/app/api/infrastructure/repositories/UserRepository';
import { UserService } from '@/app/api/domain/services/User.service';

export default async function getUserById(id: string) {
  return await createServerAction(async () => {
    const userService = new UserService(new UserRepository());
    return await userService.getUserById(id);
  }, "get-user-by-id", true);
}