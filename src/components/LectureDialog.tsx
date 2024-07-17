"use client";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function LectureDialog() {
  return (
    <DialogContent
      className="sm:max-w-[500px]"
      onInteractOutside={(e) => {
        e.preventDefault();
      }}
    >
      <DialogHeader>
        <DialogTitle>Lecture 1 of Web Development</DialogTitle>
      </DialogHeader>
      <div className="py-4">
        <div>Todo to add video player</div>
      </div>
    </DialogContent>
  );
}
