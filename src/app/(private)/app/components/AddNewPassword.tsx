"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

const AddNewPassword = () => {
  return (
    <Dialog>
      <DialogTrigger className="hidden md:flex" asChild>
        <Button>Add Password</Button>
      </DialogTrigger>
      <DialogTrigger className="md:hidden" asChild>
        <Button size="icon">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new password</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewPassword;
