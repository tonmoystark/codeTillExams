import React from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ShadCN = () => {
  return (
    <div>
      <h1>Exploring ShadCN UI</h1>
      <div className="w-full h-screen flex-col bg-slate-700 flex justify-center items-center">
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>What are you learning?</AccordionTrigger>
            <AccordionContent>
              I am learning to use ShadCN UI components.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Why are you learning?</AccordionTrigger>
            <AccordionContent>I need it to use in my project.</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Are you enjoying it?</AccordionTrigger>
            <AccordionContent>
              Yes, I am enjoying it. I can use many components.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className={"bg-destructive text-destructive-foreground"} variant="outline">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Button>Button</Button>
    </div>
  );
};

export default ShadCN;
