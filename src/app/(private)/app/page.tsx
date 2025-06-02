"use client";

import { useContext } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import AddNewPassword from "./components/AddNewPassword";
import AppHeader from "./components/AppHeader";
import ListPassword from "./components/ListPassword";
import { AppContext } from "../components/AppProvider";

const Page = () => {
  const { setSearch, search } = useContext(AppContext);

  

  return (
    <div className="flex-1 flex flex-col p-2 sm:p-4">
      <AppHeader />

      <div className="w-full h-10 flex items-center gap-4">
        <div className="relative flex items-center">
          <Input
            className="max-w-60 pl-8 placeholder:text-sm"
            placeholder="Search password"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-2 text-zinc-500" size={18} />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <AddNewPassword />
        </div>
      </div>
      <div className="my-2 sm:my-4 border-b"></div>

      <ListPassword />
    </div>
  );
};

export default Page;
