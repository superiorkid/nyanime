import Image from "next/image";
import Container from "./container";
import WatchTrailerButton from "./watch-trailer-button";

interface HeaderImageProps {
  src: string;
  trailerUrl: string;
}

const HeaderImage = ({ src, trailerUrl }: HeaderImageProps) => {
  return (
    <section className="absolute top-0 left-0 w-full h-[20rem]">
      <div className="relative h-full">
        <Image
          fill
          priority
          src={src}
          alt="background image"
          className="object-cover brightness-50 -z-10"
          decoding="async"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      {trailerUrl && (
        <Container className="relative">
          <WatchTrailerButton url={trailerUrl} />
        </Container>
      )}
    </section>
  );
};

export default HeaderImage;
