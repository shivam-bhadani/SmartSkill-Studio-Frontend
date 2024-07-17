import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Notices() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-[1000px] max-w-[90%] m-auto mt-6"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          nostrum dolore sit corporis veniam enim libero laudantium esse velit,
          facere excepturi ipsum doloremque vero, ipsa consectetur ad illum
          autem necessitatibus!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia at,
          sed magni nulla officia unde vitae, minus quia veritatis aliquam
          facere est voluptate doloribus aliquid velit numquam qui iusto
          praesentium ducimus, impedit quaerat vel corrupti consectetur?
          Sapiente magnam fugiat laudantium fuga corrupti, quidem ullam
          inventore dolor eligendi eum tempora repudiandae quo optio at harum
          dicta magni veritatis fugit aperiam atque dolorum quos perferendis
          alias explicabo? Ullam corporis laboriosam quidem perspiciatis quas
          magnam provident placeat vitae nam consequatur! Cum porro repellat,
          odio rerum dolor praesentium eligendi voluptatibus eveniet id
          blanditiis tempora voluptatem voluptatum quas recusandae ipsa dolorem,
          excepturi quisquam. Nobis, nulla.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
