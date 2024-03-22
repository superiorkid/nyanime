import Image from "next/image";

interface AnimeTopWallpaperProps {
  imageUrl: string;
}

const AnimeTopWallpaper = ({ imageUrl }: AnimeTopWallpaperProps) => {
  return (
    <section className="absolute top-0 left-0 w-full h-[85dvh] -z-30">
      <Image
        fill
        priority
        src={imageUrl}
        alt="background image"
        className="object-cover brightness-50"
        decoding="async"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </section>
  );
};

export default AnimeTopWallpaper;
