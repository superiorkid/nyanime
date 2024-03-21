import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const SidebarFilter = () => {
  const seasons = [
    {
      id: "winter",
      label: "Winter",
    },
    {
      id: "spring",
      label: "Spring",
    },
    {
      id: "summer",
      label: "Summer",
    },
    {
      id: "fall",
      label: "Fall",
    },
  ];

  return (
    <aside className="w-56">
      <Accordion type="multiple">
        <AccordionItem value="year">
          <AccordionTrigger>Year</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" className="bg-foreground">
                2021
              </Button>
              <Button variant="outline" className="bg-foreground">
                2022
              </Button>
              <Button variant="outline" className="bg-foreground">
                2023
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="season">
          <AccordionTrigger>Season</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2">
              {seasons.map((season, index) => (
                <div className="flex items-center space-x-2">
                  <Checkbox id={season.id} />
                  <label
                    htmlFor="terms2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {season.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="genres">
          <AccordionTrigger>Genres</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="studio">
          <AccordionTrigger>Studio</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="format">
          <AccordionTrigger>Format</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="airing-status">
          <AccordionTrigger>Airing Status</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default SidebarFilter;
