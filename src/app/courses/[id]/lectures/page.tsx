import LectureDialog from "@/components/LectureDialog";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Lectures() {
  return (
    <div className="w-[1000px] max-w-[90%] m-auto mt-4">
      <Collapsible className="bg-slate-200 p-4 mt-6">
        <div className="flex justify-between">
          <CollapsibleTrigger className="w-full text-left font-bold">
            Can I use this in my project?
          </CollapsibleTrigger>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Watch</Button>
            </DialogTrigger>
            <LectureDialog />
          </Dialog>
        </div>
        <CollapsibleContent className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus facere suscipit quo eos, corporis, odio dolore quae
          consequatur nostrum consectetur impedit quibusdam deserunt atque
          explicabo fugiat unde cumque saepe illo!
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
