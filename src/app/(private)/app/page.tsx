import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import AddNewPassword from "./components/AddNewPassword";
import AppHeader from "./components/AppHeader";

const Page = () => {
  return (
    <div className="flex-1 p-2 sm:p-4">
      <AppHeader/>

      <div className="flex-1 h-10 flex items-center gap-4">
        <div className="relative flex items-center">
          <Input
            className="max-w-60 pl-8 placeholder:text-sm"
            placeholder="Search password"
          />
          <Search className="absolute left-2 text-zinc-500" size={18} />
        </div>
        <div className="flex-1 flex items-center justify-end">
          <AddNewPassword />
        </div>
      </div>
      <div className="my-2 sm:my-4 border-b"></div>
    </div>
  );
};

export default Page;
