"use client";

import { useContext, useEffect, useState, useTransition } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Password as PasswordType } from "@/app/api/domain/models/Password";
import { Skeleton } from "@/components/ui/skeleton";
import listPasswords from "@/app/api/infrastructure/controllers/password/listPasswords";

import { AppContext } from "../../components/AppProvider";
import Password from "./Password";

const PAGE_SIZE = 20;

const ListPassword = () => {
  const { search } = useContext(AppContext);

  const [page, setPage] = useState(1);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [passwords, setPasswords] = useState<PasswordType[]>([]);

  const [isLoading, startFetch] = useTransition();

  useEffect(() => {
    startFetch(async () => {
      const { data } = await listPasswords({
        filters: {
          name: search,
        },
        page: page,
        size: PAGE_SIZE,
      });

      if (data) {
        setPasswords(data);

        if (data.length < PAGE_SIZE) setNextDisabled(true);
      }
    });
  }, [page, search]);

  return (
    <>
      <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-4">
        {isLoading ? (
          <Skeleton className="flex-1" />
        ) : (
          passwords.map((password, key) => (
            <Password key={key} password={password} />
          ))
        )}
      </div>

      <div className="w-full h-20 flex items-center justify-center gap-2">
        <Button
          size="icon"
          disabled={page <= 1}
          onClick={() => setPage((p) => --p)}
        >
          <ChevronLeft />
        </Button>
        <div className="size-10 flex items-center justify-center border border-input rounded-lg">
          {page}
        </div>
        <Button
          size="icon"
          onClick={() => setPage((p) => ++p)}
          disabled={nextDisabled}
        >
          <ChevronRight />
        </Button>
      </div>
    </>
  );
};

export default ListPassword;
