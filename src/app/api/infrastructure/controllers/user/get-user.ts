"use server";

import createServerAction from "@/app/api/createServerActions";

export default async function getUser() {
  return await createServerAction(async (user) => {
    return user;
  }, "get-user");
}
