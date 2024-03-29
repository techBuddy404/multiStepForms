"use client";
import React from "react";
import { Boxes } from "./boxs";
import Link from "next/link";

export default function BackgroundBoxes() {
  return (
    <div className="h-60 my-4 shadow relative w-11/12 mx-auto overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="space-y-2 pb-2 z-20 text-white">
        <h1 className="text-4xl font-semibold tracking-tighter lg:text-6xl/none">
          Apartment <span className="main-color">Square</span>
        </h1>
        <p className="text-lg text-center tracking-wide md:text-2xl/relaxed">
          Discover Your Dream Square
        </p>
      </div>
      <Link
        className="inline-flex z-20 items-center rounded-full border border-gray-200 border-gray-200 bg-white px-6 py-3 text-sm font-medium shadow-sm gap-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        href="#"
      >
        Explore Listings
      </Link>
    </div>
  );
}
