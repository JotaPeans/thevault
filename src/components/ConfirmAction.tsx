"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "./ui/button";
import { ReactElement, ReactNode, useState, useTransition } from "react";
import Alert from "./Alert";

interface ConfirmActionProps {
  title: string;
  description: string;
  children: ReactNode;
  onConfirm?: () => void | Promise<void>;
  isDanger?: boolean;
  confirmButtonText?: string;
  confirmButtonIcon?: ReactElement;
}

const ConfirmAction = ({
  children,
  description,
  title,
  onConfirm,
  confirmButtonIcon,
  confirmButtonText,
  isDanger,
}: ConfirmActionProps) => {
  const [open, setOpen] = useState(false);

  const [isLoading, startAsync] = useTransition();

  function handleClick() {
    startAsync(async () => {
      if (onConfirm) {
        await onConfirm();
        setOpen(false);
      }
    });
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>

          {isDanger === false && (
            <AlertDialogDescription className="items-center">
              {description}
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>

        {isDanger && (
          <Alert
            title="Attention"
            description={description}
          />
        )}
        
        <AlertDialogFooter>
          <AlertDialogCancel
            type="button"
            className={buttonVariants({ variant: "ghost" })}
          >
            Cancel
          </AlertDialogCancel>
          <Button
            variant={isDanger ? "flat_destructive" : "default"}
            onClick={handleClick}
            loading={isLoading}
          >
            {confirmButtonIcon}
            {confirmButtonText ?? "Confirm"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmAction;
