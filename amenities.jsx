import { useTranslation } from "@/app/i18n/client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { amenitiesArray } from "../static";
import { useState } from "react";

const Amenities = ({ lng, nextStep, setValue }) => {
  const { t } = useTranslation(lng, "translation");
  const [extraFeature, setExtraFeature] = useState([]);

  const handleSelect = (value) => {
    setExtraFeature((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSubmit = () => {
    try {
      setValue("amenities", extraFeature.join("-"));
      nextStep();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-4/5 mx-auto">
      <h1 className="text-center text-xl font-semibold py-6">
        {t("features.title")}
      </h1>
      <ToggleGroup className="grid grid-cols-4 gap-4 " type="multiple">
        {amenitiesArray.map((key, index) => (
          <ToggleGroupItem
            key={index}
            value={key}
            aria-label={`Toggle ${key}`}
            className={`border border-sky-800 transition rounded-full ${
              extraFeature?.includes(key)
                ? "bg-sky-600 text-white "
                : "bg-[#0284c71c] dark:border-[#84d2ff] dark:text-[#84d2ff] text-[#005795]"
            }`}
            onClick={() => handleSelect(key)}
          >
            <p className="p-3 px-2 ">{t(`${key}`)}</p>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className="flex justify-center pt-5 w-full">
        <Button
          onClick={handleSubmit}
          className="w-[240px] justify-center text-center font-normal mt-4"
        >
          <Rocket className="w-4 h-4 mx-3" />
          {t("Submit")}
        </Button>
      </div>
    </div>
  );
};

export default Amenities;
