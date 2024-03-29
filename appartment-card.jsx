"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  addToFavorites,
  incrementAdViews,
  incrementAdClicks,
} from "../actions";
export default function AppartmentAdCard({ ad, user }) {
  const [hasViewed, setHasViewed] = useState(() => {
    if (window) {
      const storedValue = localStorage.getItem(`apartmentadViewed_${ad.id}`);
      return storedValue ? JSON.parse(storedValue) : false;
    }
    return null;
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the ad card is in the viewport
        if (entry.isIntersecting) {
          console.log("viewd fucntion out");

          // Log "hasViewed" when the ad card is first viewed
          if (!hasViewed) {
            console.log("viewd fucntion running");
            setHasViewed(true);
            incrementAdViews(ad.id);
            localStorage.setItem(
              `apartmentadViewed_${ad.id}`,
              JSON.stringify(true)
            );
          }
        }
      },
      { threshold: 0.5 }
    );

    if (adCardRef.current) {
      observer.observe(adCardRef.current);
    }

    return () => {
      if (adCardRef.current) {
        observer.unobserve(adCardRef.current);
      }
    };
  }, [hasViewed, user]);
  const adCardRef = useRef(null);

  return (
    <div
      onClick={() => incrementAdClicks(ad.id)}
      ref={adCardRef}
      key={ad.id}
      className="flex items-start gap-4 relative"
    >
      <HeartIcon
        onClick={() => addToFavorites(user?.id, ad.id)}
        className={`cursor-pointer z-10 text-gray-300 absolute top-2 left-2 h-6 w-6 ${
          user?.favoriteAds.some(
            (favorite) => favorite.appartmentAdId === ad.id
          )
            ? "text-transparent"
            : ""
        }`}
        style={{
          fill: user?.favoriteAds.some(
            (favorite) => favorite.appartmentAdId === ad.id
          )
            ? "red"
            : "",
        }}
      />
      <Image
        alt="Apartment 1"
        className="rounded-lg shadow-lg overflow-hidden w-1/3 flex-shrink-0 aspect-3/4 object-cover"
        height={150}
        src={ad.images[0].url}
        width={200}
      />
      <div className="grid gap-1">
        <h3 className="font-semibold text-lg md:text-xl">{ad.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {ad.description}
        </p>
        <h4 className="font-semibold">{ad.price}</h4>
        <div className="flex gap-2">
          <Link
            href={`/apartments/${ad.id}`}
            className="border-zinc-900 h-10 px-4 py-2 border rounded text-zinc-900 bg-transparent hover:bg-zinc-900 hover:text-white transition"
            variant="outline"
          >
            View
          </Link>
          <Button
            className="border-green-500 text-green-500 main-outline"
            variant="outline"
          >
            Chat
          </Button>
        </div>
      </div>
    </div>
  );
}

function CarIcon(props) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
function BatteryIcon(props) {
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
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
    </svg>
  );
}
function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}
function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function TagIcon(props) {
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
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}
