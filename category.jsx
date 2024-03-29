"use client";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Building,
  DoorClosed,
  Home,
  HomeIcon,
  Hotel,
  LandPlot,
  School,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";

let categoryData = [
  {
    title: "Property for Sale",
    icon: <Home />,
    link: "propertyForSale",
    nested: [
      {
        title: "Apartment",
        icon: <HomeIcon />,
      },
      {
        title: "Villa/House",
        icon: <HomeIcon />,
      },
      {
        title: "Townhouse",
        icon: <DoorClosed />,
      },
      {
        title: "Penthouse",
        icon: <Building />,
      },
      {
        title: "Residential Building",
        icon: <Hotel />,
      },
      {
        title: "Residential Floor",
        icon: <Hotel />,
      },
      {
        title: "Villa Compound",
        icon: <School />,
      },
    ],
  },
  {
    title: "Residential for Sale",
    icon: <Home />,
  },
  {
    title: "Commercial",
    icon: <Store />,
  },
  {
    title: "Land",
    icon: <LandPlot />,
  },
  {
    title: "Multiple Units",
    icon: <Building />,
  },
];
const CategorySelector = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }

    router.push(pathname + "?" + updatedParams.toString());
  };

  const handleSubmit = (e) => {
    createQueryString({
      cateogry: e,
    });
  };
  return (
    <>
      <h1 className="text-xl text-center py-4">
        Choose the right category for your ad:
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {categoryData.map((item, i) => (
          <Button
            onClick={() => handleSubmit(item.link)}
            key={i}
            className={`bg-transparent flex border border-[#fe2635] text-zinc-800 hover:text-white items-center justify-center border rounded-xl px-4 py-8 dark:text-white  hover:bg-[#fe2635]  cursor-pointer transition`}
          >
            <div className="text-2xl mx-3">{item.icon}</div>
            <span className={`ml-2`}>{item.title}</span>
          </Button>
        ))}
      </div>
    </>
  );
};

export const ProbertyCategorySelector = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = (params) => {
    const updatedParams = new URLSearchParams(searchParams);

    for (const [name, value] of Object.entries(params)) {
      updatedParams.set(name, value);
    }

    router.push(pathname + "?" + updatedParams.toString());
  };

  const handleSubmit = (e) => {
    createQueryString({
      subCateogry: e,
    });
  };
  return (
    <>
      <h1 className="text-xl text-center py-4">
        Choose the right category for your ad:
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {level2CategoryData.map((item, i) => (
          <Button
            onClick={() => handleSubmit(item.link)}
            key={i}
            className={`bg-transparent flex border border-[#fe2635] text-zinc-800 hover:text-white items-center justify-center border rounded-xl px-4 py-8 dark:text-white  hover:bg-[#fe2635]  cursor-pointer transition`}
          >
            <div className="text-2xl mx-3">{item.icon}</div>
            <span className={`ml-2`}>{item.title}</span>
          </Button>
        ))}
      </div>
    </>
  );
};
export default CategorySelector;
