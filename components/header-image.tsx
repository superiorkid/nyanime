import React from "react";
import Image from "next/image";

interface HeaderImageProps {
  src: string;
}

const HeaderImage = ({ src }: HeaderImageProps) => {
  return (
    <section className="absolute top-0 left-0 w-full h-[20rem] -z-30">
      <div className="relative h-full">
        <Image
          fill
          priority
          src={src}
          alt="background image"
          className="object-cover brightness-50"
          decoding="async"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
};

export default HeaderImage;
