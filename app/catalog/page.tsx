import AnimeCard from "@/components/anime-card";
import AnimeCards from "@/components/anime-cards";
import Container from "@/components/container";
import SidebarFilter from "@/components/sidebar-filter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const CatalogPage = () => {
  return (
    <div className="min-h-screen mt-8 mb-16">
      <Container>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Catalog</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Sort by <ChevronDown className="w-4 h-4 ml-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex space-x-9">
          <SidebarFilter />
          <AnimeCards />
        </div>
      </Container>
    </div>
  );
};

export default CatalogPage;
