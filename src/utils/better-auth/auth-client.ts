import { settings } from "@/lib/settings"
import { createAuthClient } from "better-auth/react"

export const { signIn, signUp, signOut, useSession } = createAuthClient({
  baseURL: settings.NEXT_PUBLIC_BETTER_AUTH_URL,
})