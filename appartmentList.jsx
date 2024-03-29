import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import AppartmentAdCard from "./appartment-card";
export default function AppartmentsList({ items, user }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center  bg-white p-3 gap-4">
        <div className="flex items-center gap-2">
          <MapIcon className="w-4 h-4" />
          <span className="font-semibold">Near Boston, MA</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="shrink-0" variant="outline">
              <ArrowUpDownIcon className="w-4 h-4 mr-2" />
              Sort by
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup value="featured">
              <DropdownMenuRadioItem value="featured">
                Featured
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Newest">
                Newest
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="low">
                Price: Low to High
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="high">
                Price: High to Low
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid gap-4 md:grid-cols-2 container">
        {items.map((item) => (
          <AppartmentAdCard ad={item} key={item.id} user={user} />
        ))}
      </div>
    </div>
  );
}

function ArrowUpDownIcon(props) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}

function MapIcon(props) {
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
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}
