import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function PriceForm({ lng, setValue, nextStep }) {
  const { t } = useTranslation(lng, "translation");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");
  const [price, setPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("payment", selectedPaymentMethod);
    setValue("price", price);
    nextStep();
  };
  return (
    <div className="w-1/2 mx-auto">
      <h1 className=" text-center text-xl pb-4 font-semibold">{t("price")}</h1>
      <div className="grid w-full  items-center gap-8 pt-4">
        <div className="flex items-center gap-2">
          <Input
            id="price"
            placeholder="Enter price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="w-full text-xl font-semibold flex justify-around items-center">
          {t("paymentMethod")} :
          <ToggleGroup className="flex gap-4 " type="single">
            <ToggleGroupItem
              className={`border  transition rounded-full ${
                selectedPaymentMethod === "cash"
                  ? "bg-zinc-800 dark:bg-zinc-600 text-white"
                  : ""
              }`}
              onClick={() => setSelectedPaymentMethod("cash")}
            >
              {t("Cash")}
            </ToggleGroupItem>
            <ToggleGroupItem
              className={`border  transition rounded-full ${
                selectedPaymentMethod == "Installment"
                  ? "bg-zinc-800 dark:bg-zinc-600 text-white"
                  : ""
              }`}
              onClick={() => setSelectedPaymentMethod("Installment")}
            >
              {t("installment")}
            </ToggleGroupItem>
            <ToggleGroupItem
              className={`border  transition rounded-full ${
                selectedPaymentMethod == "cash & Installment"
                  ? "bg-zinc-800 dark:bg-zinc-600 text-white"
                  : ""
              }`}
              onClick={() => setSelectedPaymentMethod("cash & Installment")}
            >
              {t("cash & Installment")}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <Button onClick={handleSubmit} type="button">
          {t("Submit")}
        </Button>
      </div>
    </div>
  );
}
