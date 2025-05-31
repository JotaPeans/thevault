import { ReactNode } from "react";
import getUser from "../api/infrastructure/controllers/user/get-user";
import { redirect } from "next/navigation";

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
  const { data: user, error } = await getUser();
  if (error || !user) {
    redirect("/");
  }

  return <main className="flex-1 flex">{children}</main>;
};

export default PrivateLayout;
