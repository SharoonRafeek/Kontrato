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
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  contractName: string;
  agreement: string;
  description: string;
};
const Dialogue = (props: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  // const { currentLink } = props;
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dialog open={isFirstDialogOpen} onOpenChange={setFirstDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openFirstDialog} variant="outline">
              Create Contract
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create new Contract</DialogTitle>
              <DialogDescription>Enter the Contract Details</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="contractName" className="text-right">
                  Name
                </Label>
                <Input
                  {...register("contractName", {
                    required: true,
                  })}
                  id="contractName"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="agreement" className="text-right">
                  Agreement
                </Label>
                <Input
                  {...register("agreement")}
                  id="agreement"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  {...register("description")}
                  id="description"
                  className="col-span-3"
                />
              </div>
            </div>
            {errors.contractName && <span>This field is required</span>}
            <DialogFooter>
              <Button onClick={openSecondDialog}>Next</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isSecondDialogOpen} onOpenChange={setSecondDialogOpen}>
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
              <Button>
                <input type="submit" />
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </div>
  );
};

export default Dialogue;
