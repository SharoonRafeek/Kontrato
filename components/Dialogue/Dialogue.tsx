"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
const Dialogue = () => {
  const [isFirstDialogOpen, setFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setSecondDialogOpen] = useState(false);

  const openFirstDialog = () => setFirstDialogOpen(true);
  const closeFirstDialog = () => setFirstDialogOpen(false);

  const openSecondDialog = () => {
    setFirstDialogOpen(false);
    setSecondDialogOpen(true);
  };
  const closeSecondDialog = () => setSecondDialogOpen(false);

  return (
    <div>
      <Dialog open={isFirstDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contract</DialogTitle>
            <DialogDescription>Enter the project Details</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input id="description" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={openSecondDialog}>Next</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isSecondDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Next Page</DialogTitle>
            <DialogDescription>
              Enter details for the next page
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="details" className="text-right">
                Additional Details
              </Label>
              <Input id="details" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={closeSecondDialog}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button onClick={openFirstDialog} variant="outline">
        Create Contract
      </Button>
    </div>
  );
};

export default Dialogue;
