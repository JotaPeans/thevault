"use client";

import { User } from "@/app/api/domain/models/User";
import { createContext, ReactNode, useState } from "react";

interface AppContextProps {
  user: User | null;
  search: string;
  setSearch: (v: string) => void;
}

export const AppContext = createContext<AppContextProps>({
  user: null,
  search: "",
  setSearch: () => {},
});

interface AppProviderProps {
  children: ReactNode;
  user: User;
}

const AppProvider = ({ children, user }: AppProviderProps) => {
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider value={{ user, search, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
