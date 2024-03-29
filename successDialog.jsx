import {
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Send, ShoppingBagIcon } from "lucide-react";
export default function SuccesDialoag({ searchParams }) {
  console.log("successs");
  return (
    <Dialog open={true}>
      <DialogContent className="bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <DialogHeader className=" p-6 sm:p-8">
          <DialogTitle className="text-white text-2xl font-semibold">
            Congratulations!
          </DialogTitle>
          <DialogDescription className="text-white text-lg mt-2">
            Your ad is created successfully!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center space-x-4 p-6 sm:p-8">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50"
            href={`${
              searchParams.profile?.split("=")[0] == "shop"
                ? `/dashboard/shopAds/${searchParams.profile?.split("=")[1]}`
                : "/dashboard/myAds"
            }`}
          >
            <Send className="h-5 w-5 mr-2" />
            My Ads
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
            href="/apartments"
          >
            <ShoppingBagIcon className="h-5 w-5 mr-2" />
            Market
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
