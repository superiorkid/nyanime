import AnimeCollectionCard from "@/components/anime-collection-card";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const CollectionsPage = () => {
  return (
    <main className="min-h-screen mt-8 mb-16">
      <Container>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Catalog</h1>
          <Button variant="secondary">
            <Plus className="w-4 h-4 mr-2" />
            Create New
          </Button>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <AnimeCollectionCard key={index} />
            ))}
          </div>
          <Button
            className="w-full bg-background text-foreground hover:bg-muted-foreground hover:text-background"
            size="lg"
          >
            Show More
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default CollectionsPage;
