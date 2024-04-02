import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Data } from "@/types/Staff";
import Image from "next/image";

interface StaffTabsContentProps {
  staffs: Data[];
}

const StaffTabsContent = ({ staffs }: StaffTabsContentProps) => {
  return (
    <>
      <h1 className="text-xl font-semibold">Staff</h1>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-5"
      >
        <CarouselContent>
          {staffs.map((staff, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
              <Card className="overflow-hidden border-0 rounded-2xl">
                <CardContent className="p-0 m-0 rounded-2xl">
                  <div className="relative h-[278px] w-full">
                    <Image
                      fill
                      src={staff.person.images.jpg.image_url}
                      alt={`card image`}
                      className="object-cover brightness-75"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      decoding="async"
                      quality={75}
                    />

                    <div className="absolute bottom-0 left-0 m-2 text-background text-sm">
                      <h3 className="font-semibold">{staff.person.name}</h3>
                      <p className="text-zinc-300">{staff.positions.at(0)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="secondary" className="ml-8" />
        <CarouselNext variant="secondary" className="mr-8" />
      </Carousel>
    </>
  );
};

export default StaffTabsContent;
