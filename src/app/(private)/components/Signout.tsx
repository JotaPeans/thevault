"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { signOut } from "@/utils/better-auth/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const Signout = () => {
  const router = useRouter();

  return (
    <form
      className="w-full"
      action={async () => {
        await signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
            },
          },
        });
      }}
    >
      <DropdownMenuItem asChild className="w-full">
        <button>
          <LogOut className="group-[data-highlighted]:text-primary"/>
          Log out
        </button>
      </DropdownMenuItem>
    </form>
  );
};

export default Signout;
