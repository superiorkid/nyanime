import AnimeCollectionCard from "@/components/anime-collection-card";

const FeaturedCollectionSection = () => {
  return (
    <section className="min-h-[38dvh] grid grid-cols-1 items-center mb-16">
      <div className="space-y-3.5">
        <h1 className="text-2xl font-bold">Featured Collections</h1>

        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <AnimeCollectionCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollectionSection;
