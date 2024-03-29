import { Button } from "@/components/ui/button";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

export default function FinalForm({ watch }) {
  const data = watch();
  const renderFormFields = () => {
    return Object.entries(data).map(([key, value]) => (
      <div
        key={key}
        className={`grid grid-cols-2 gap-4 ${key == "images" ? "hidden" : ""}`}
      >
        <label className="text-gray-600">{key}</label>
        <input
          type="text"
          className="border rounded-md px-2 py-1"
          value={value}
          readOnly
        />
      </div>
    ));
  };
  return (
    <div className="w-5/6 mx-auto grid gap-4 md:gap-10 items-start order-1 md:order-1">
      <Carousel
        style={{ direction: "ltr" }}
        className="w-full max-w-xl mx-auto"
      >
        <CarouselContent>
          {data.images.map((image) => (
            <CarouselItem key={image} className="h-[10rem] w-full">
              <div className="relative h-full w-full">
                <img
                  alt={`Ad Image `}
                  className="object-cover w-full h-full rounded-md-lg overflow-hidden"
                  src={image}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="shadow-lg" />
        <CarouselNext className="shadow-lg" />
      </Carousel>
      <div className="grid grid-cols-2 gap-4">{renderFormFields()}</div>
      <Button type="submit" className="main-bg  mt-4">
        Submit
      </Button>
    </div>
  );
}
