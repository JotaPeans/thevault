import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { Home, ShieldCheck } from "lucide-react";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import getUser from "../api/infrastructure/controllers/user/get-user";
import { SidebarUser } from "./components/sidebarUser";
import AppProvider from "./components/AppProvider";

interface PrivateLayoutProps {
  children: ReactNode;
}

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
  const { data: user, error } = await getUser();
  if (error || !user) {
    redirect("/");
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <div className="flex items-center gap-2 mt-6">
              <div className="ml-auto flex aspect-square size-8 items-center justify-center">
                <ShieldCheck size={32} className="text-primary" />
              </div>
              <div className="grid mr-auto text-left text-sm leading-tight">
                <span className="truncate text-2xl font-semibold text-primary">
                  TheVault
                </span>
              </div>
            </div>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="/app">
                      <Home />
                      <span>dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarUser user={user} />
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <AppProvider user={user}>
          <main className="flex-1 flex">{children}</main>
        </AppProvider>
      </SidebarInset>
    </SidebarProvider>
  );
  // return <main className="flex-1 flex">{children}</main>;
};

export default PrivateLayout;
