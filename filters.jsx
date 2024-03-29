"use client";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { amenitiesArray } from "../static";
import { useTranslation } from "@/app/i18n/client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDarkMode } from "@/context/darkModeContext";
import dynamic from "next/dynamic";
import { countriesWithCities } from "@/data/staticData";
import { Input } from "@/components/ui/input";

const PopoverCountry = dynamic(
  () => import("@/components/navBarBtns/PopoverCountry"),
  {
    loading: () => <BtnSkeleton />,
    ssr: false,
  }
);

export default function FiltersSideBar({ lng }) {
  const { t } = useTranslation(lng, "translation");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { selectedCountry, setSelectedCountry, setCities, cities } =
    useDarkMode();

  const createQueryString = (name, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    const updatedParams = params.toString();
    router.push(pathname + "?" + updatedParams);
  };

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (
      (!selectedCountry?.country &&
        !user?.country &&
        !searchParams.has("country")) ||
      searchParams.get("country") == "undefined"
    ) {
      setOpen(true);
    } else if (searchParams.get("country") !== "undefined") {
      setOpen(false);
      createQueryString("country", selectedCountry?.country);
    }
    setCities(
      countriesWithCities.find(
        (country) => country.country === selectedCountry?.country
      )?.cities
    );
  }, [selectedCountry, searchParams.has("country")]);
  const resetFileters = () => {
    router.push(`${pathname}?country=${selectedCountry.country}`);
  };
  return (
    <>
      <Card
        key="1"
        className="w-full max-w-sm rounded-none border-0 shadow-none sticky top-24"
      >
        <div className="flex items-center gap-4 p-4">
          <SlidersIcon className="w-6 h-6" />
          <CardHeader className="text-2xl font-bold">Filters</CardHeader>
        </div>
        <div className="p-4 flex gap-2">
          <Button
            onClick={resetFileters}
            className="w-full flex-1 main-outline"
            variant="outline"
          >
            Reset Filters
          </Button>
          <Button className="w-full flex-1" variant="gradient">
            Apply Filters
          </Button>
        </div>
        <CardContent className="p-4">
          <div className="grid gap-4">
            <div className="flex flex-col gap-1">
              <Label className="font-medium">Location</Label>
              <Select onValueChange={(e) => createQueryString("city", e)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                  {cities?.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Label className="font-medium">Price Range</Label>
              <Input
                onBlur={(e) => createQueryString("priceMin", e.target.value)}
                className="dark:bg-zinc-800 dark:border-zinc-900 dark:text-white"
                id="price-min"
                placeholder="Min price"
              />
              <Input
                onBlur={(e) => createQueryString("priceMax", e.target.value)}
                className="dark:bg-zinc-800 dark:border-zinc-900 dark:text-white"
                id="price-max"
                placeholder="Max price"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label className="font-medium">Bedrooms</Label>
              <Select onValueChange={(e) => createQueryString("bedrooms", e)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Bedrooms</SelectItem>
                  <SelectItem value="1">1 Bedroom</SelectItem>
                  <SelectItem value="2">2 Bedroom</SelectItem>
                  <SelectItem value="3">3 Bedroom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <Label className="font-medium">Bathrooms</Label>
              <Select onValueChange={(e) => createQueryString("bedrooms", e)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Bathrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Bedrooms</SelectItem>
                  <SelectItem value="1">1 Bathrooms</SelectItem>
                  <SelectItem value="2">2 Bathrooms</SelectItem>
                  <SelectItem value="3">3 Bathrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
      <Dialog open={open}>
        <DialogTrigger asChild>
          <Button className="absolute hidden" size="lg" variant="solid">
            country
          </Button>
        </DialogTrigger>
        <DialogContent className="dark:bg-zinc-800 dark:text-white ">
          <DialogHeader className="dark:bg-zinc-800 dark:text-white">
            <DialogTitle>
              you have to choose a country to display it's ads{" "}
            </DialogTitle>
          </DialogHeader>
          <div className="flex w-full justify-center items-center">
            <PopoverCountry lng={lng} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function SlidersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="2" x2="6" y1="14" y2="14" />
      <line x1="10" x2="14" y1="8" y2="8" />
      <line x1="18" x2="22" y1="16" y2="16" />
    </svg>
  );
}
