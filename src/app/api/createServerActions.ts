import { AxiosError } from "axios";
import { getServerSession } from "@/utils/better-auth/getServerSession";

import { User } from "./domain/models/User";
import { UserService } from "./domain/services/User.service";
import { UserRepository } from "./infrastructure/repositories/UserRepository";
import { UserNotFoundError } from "./errors/UserNotFoundError";

export interface ResponseProps<T> {
  data: T | null;
  error: {
    message: string;
  } | null;
}

export default async function createServerAction<T>(
  callback: (user: User) => Promise<T>,
  caller: string,
  disableGetUser?: false
): Promise<ResponseProps<T>>;

export default async function createServerAction<T>(
  callback: (user: undefined) => Promise<T>,
  caller: string,
  disableGetUser?: true
): Promise<ResponseProps<T>>;

export default async function createServerAction<T>(
  callback: (user: any) => Promise<T>,
  caller: string,
  disableGetUser?: boolean
): Promise<ResponseProps<T>> {
  try {
    if (disableGetUser) {
      const returnData = await callback(undefined);

      return {
        data: returnData,
        error: null,
      };
    }

    const data = await getServerSession();

    if(data === null) throw new Error("Error to get server session");
    
    const userService = new UserService(new UserRepository());
    const user = await userService.getUser(data.user.email);

    if(user === null) throw new UserNotFoundError()

    const returnData = await callback(user);

    return {
      data: returnData,
      error: null,
    };
  } catch (error) {
    let message = "";
    if (error instanceof AxiosError) {
      message = error.response?.data.error || "";
    }

    if (error instanceof Error) {
      message = error.message;
    }

    console.log(`🚀 ~ ${caller} error:`, message);

    return {
      data: null,
      error: {
        message: message,
      },
    };
  }
}
