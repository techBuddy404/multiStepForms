"use client";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Building,
  DoorClosed,
  Home,
  DoorOpen,
  HomeIcon,
  Hotel,
  LandPlot,
  School,
  Store,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function AccordionCategory({ profile }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }
    router.push(pathname + "?" + updatedParams.toString());
  };

  return (
    <div className="w-full py-6 grid gap-6 md:py-12">
      <Accordion className="mx-auto w-5/6" collapsible>
        {categoryData.map((category, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger className="rounded-lg p-4 flex w-full justify-between 	">
              {category.icon} {category.title}
            </AccordionTrigger>
            <AccordionContent
              id={`accordion-content-${index}`}
              className="grid gap-4 p-2 flex flex-wrap"
              aria-labelledby={`accordion-trigger-${index}`}
            >
              {category.nested &&
                category.nested.map((nestedItem, nestedIndex) => (
                  <section key={nestedIndex}>
                    <Button
                      onClick={() =>
                        createQueryString({
                          category: category.link,
                          type: nestedItem.type.toLocaleLowerCase(),
                        })
                      }
                      className="flex gap-4"
                    >
                      {nestedItem.icon} {nestedItem.title}
                    </Button>
                  </section>
                ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

let categoryData = [
  {
    title: "Property for Sale",
    icon: <Home />,
    link: "propertyForSale",
    nested: [
      {
        title: "Apartments for Sale",
        icon: <DoorClosed />,
        type: "Apartment",
      },
      {
        title: "Villas - Palaces for Sale",
        icon: <Home />,
        type: "Villa",
      },
      {
        title: "Houses - Homes for Sale",
        icon: <Home />,
        type: "House",
      },
      {
        title: "Land for Sale",
        icon: <LandPlot />,
        type: "Land",
      },
      {
        title: "Commercial for Sale",
        icon: <Store />,
        type: "Commercial",
      },
      {
        title: "Farms and Chalets for Sale",
        icon: <Building />,
        type: "Farm",
      },
      {
        title: "Buildings for Sale",
        icon: <Hotel />,
        type: "Building",
      },
    ],
  },
  {
    title: "Property for Rent",
    icon: <Home />,
    nested: [
      {
        title: "Commercial for Rent",
        icon: <Store />,
        type: "Commercial",
      },
      {
        title: "Apartments and Hotel Suites for Rent",
        icon: <Hotel />,
        type: "Apartment",
      },
      {
        title: "Rooms and Shared Accommodation",
        icon: <DoorOpen />,
        type: "Shared",
      },
      {
        title: "Villas - Palaces for Rent",
        icon: <Home />,
        type: "Villa",
      },
      {
        title: "Houses - Homes for Rent",
        icon: <Home />,
        type: "House",
      },
      {
        title: "Buildings for Rent",
        icon: <Building />,
        type: "Building",
      },
      {
        title: "Land for Rent",
        icon: <LandPlot />,
        type: "Land",
      },
      {
        title: "Farms and Chalets for Rent",
        icon: <Hotel />, // Assuming there's no specific icon for farms and chalets, using Hotel icon as a placeholder
        type: "Farm",
      },
      {
        title: "Foreign Properties for Rent",
        icon: <School />,
        type: "Foreign",
      },
    ],
  },
];
