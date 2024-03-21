import Image from "next/image";

const AnimeTopWallpaper = () => {
  return (
    <section className="absolute top-0 left-0 w-full h-[85dvh] -z-30">
      <Image
        fill
        priority
        src="https://images.unsplash.com/photo-1625895197185-efcec01cffe0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="background image"
        className="object-cover brightness-50"
        decoding="async"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* <div className="bg-gradient-to-b from-gray-800 via-stone-700 to-stone-500 absolute z-10 w-full h-full top-0 left-0 opacity-30" /> */}
    </section>
  );
};

export default AnimeTopWallpaper;
