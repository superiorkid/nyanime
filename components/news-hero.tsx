import { Button } from "@/components/ui/button";

const NewsHero = () => {
  return (
    <section className="min-h-[64dvh] pt-16 grid grid-cols-2 items-center">
      <div>
        <div className="space-y-4">
          <p className="font-medium text-zinc-400">15 minute ago</p>
          <h1 className="text-5xl font-bold">
            A New Season Of &quot;Bleach: Sennen Kessen-Hen&quot; Has Been
            Announced
          </h1>
          <Button variant="secondary" size="lg" className="font-semibold">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
