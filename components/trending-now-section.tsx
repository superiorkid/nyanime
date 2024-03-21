import AnimeCard from "@/components/anime-card";

const TrendingNowSection = () => {
  return (
    <section className="min-h-[38dvh] grid grid-cols-1 items-center mb-16">
      <div className="space-y-3.5">
        <h1 className="text-2xl font-bold">Trending Now</h1>

        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <AnimeCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNowSection;
