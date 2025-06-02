import { ShieldCheck } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="md:hidden flex items-center justify-center">
      <div className="flex items-center gap-2 my-3 mb-5">
        <div className="ml-auto flex aspect-square size-8 items-center justify-center">
          <ShieldCheck size={32} className="text-primary" />
        </div>
        <div className="grid mr-auto text-left text-sm leading-tight">
          <span className="truncate text-2xl font-semibold text-primary">
            TheVault
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
