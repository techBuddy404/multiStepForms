"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { GenericSelection, withGenericSelection } from "./dynamicSelection";
import {
  bathroomsProps,
  bedroomsProps,
  buildingAge,
  floorProps,
  floorsNumProps,
  interfaceProps,
  propertyTypes,
} from "../static";
import LocationDetails from "./locaiton";
import { IsOwner } from "./owner";
import { useSearchParams } from "next/navigation";
import { createAd } from "../actions";
import { useToast } from "@/components/ui/use-toast";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { StepBack } from "lucide-react";

const ImagesForm = dynamic(() => import("./imageForm"), { ssr: false });
const PriceForm = dynamic(() => import("./priceForm"), { ssr: false });
const Name_desc = dynamic(() => import("./name-desc"), { ssr: false });
const Amenities = dynamic(() => import("./amenities"), { ssr: false });
const SizeForm = dynamic(() => import("./size"));
const FinalForm = dynamic(() => import("./finalForm"), { ssr: false });

const LandSizeForm = dynamic(() =>
  import("./size").then((module) => ({ default: module.LandSizeForm }), {
    ssr: false,
  })
);
const SuccesDialoag = dynamic(() => import("./successDialog"), {
  ssr: false,
});

const SelectionComp = withGenericSelection(GenericSelection);
const Forms = ({ lng, user }) => {
  const { setValue, handleSubmit, watch } = useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const propertyType = watch("type");

  useEffect(() => {
    setValue("category", searchParams.get("category"));
    setValue("type", searchParams.get("type"));
    setValue("country", user.country);
  }, []);

  useEffect(() => {
    window.scrollTo(0, -1000);
  }, [currentStep]);

  const onSubmit = async (data) => {
    const shopId = searchParams.get("profile").includes("shop")
      ? searchParams.get("profile").split("=")[1]
      : null;
    const ad = await createAd(data, user.id, shopId);
    if (ad) {
      setOpen(true);
      toast({
        title: "ad created succesffuly",
      });
    }
  };
  const nextStep = () => {
    const formData = watch();
    console.log(formData);
    setCurrentStep((prev) => prev + 1);
  };
  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ImagesForm
            lng={lng}
            setValue={setValue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <PriceForm
            setValue={setValue}
            nextStep={nextStep}
            watch={watch}
            lng={lng}
          />
        );
      case 3:
        return (
          <SelectionComp
            {...bedroomsProps}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <SelectionComp
            {...bathroomsProps}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 5:
        if (propertyType == "apartment") {
          return (
            <SelectionComp
              {...floorProps}
              setValue={setValue}
              nextStep={nextStep}
            />
          );
        } else if (
          propertyType == "villa" ||
          propertyType == "house" ||
          propertyType == "building"
        ) {
          return (
            <SelectionComp
              {...floorsNumProps}
              setValue={setValue}
              nextStep={nextStep}
            />
          );
        } else {
          nextStep();
        }
      case 6:
        if (
          propertyType == "villa" ||
          propertyType == "house" ||
          propertyType == "land" ||
          propertyType == "farm" ||
          propertyType == "building"
        ) {
          return <LandSizeForm setValue={setValue} nextStep={nextStep} />;
        }
        return <SizeForm setValue={setValue} nextStep={nextStep} />;
      case 7:
        return (
          <LocationDetails
            lng={lng}
            user={user}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 8:
        return (
          <SelectionComp
            {...interfaceProps}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 9:
        return <IsOwner setValue={setValue} nextStep={nextStep} />;
      case 10:
        return (
          <SelectionComp
            {...buildingAge}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 11:
        return <Amenities lng={lng} setValue={setValue} nextStep={nextStep} />;
      case 12:
        return (
          <Name_desc
            watch={watch}
            setValue={setValue}
            lng={lng}
            nextStep={nextStep}
          />
        );
      case 13:
        return <FinalForm watch={watch} />;
      default:
        return null;
    }
  };
  const renderComercialFormSteps = () => {
    switch (currentStep) {
      case 1:
        return (
          <ImagesForm
            lng={lng}
            setValue={setValue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <SelectionComp
            {...propertyTypes}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <PriceForm
            setValue={setValue}
            nextStep={nextStep}
            watch={watch}
            lng={lng}
          />
        );
      case 4:
        return <SizeForm setValue={setValue} nextStep={nextStep} />;
      case 5:
        return (
          <LocationDetails
            lng={lng}
            user={user}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 6:
        return <IsOwner setValue={setValue} nextStep={nextStep} />;
      case 7:
        return <Amenities lng={lng} setValue={setValue} nextStep={nextStep} />;
      case 8:
        return (
          <Name_desc
            watch={watch}
            setValue={setValue}
            lng={lng}
            nextStep={nextStep}
          />
        );
      case 9:
        return <FinalForm watch={watch} />;
      default:
        return null;
    }
  };
  const renderBuildingsFormSteps = () => {
    switch (currentStep) {
      case 1:
        return (
          <ImagesForm
            lng={lng}
            setValue={setValue}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return <LandSizeForm setValue={setValue} nextStep={nextStep} />;
      case 3:
        return (
          <SelectionComp
            {...floorsNumProps}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <PriceForm
            setValue={setValue}
            nextStep={nextStep}
            watch={watch}
            lng={lng}
          />
        );
      case 5:
        return (
          <LocationDetails
            lng={lng}
            user={user}
            setValue={setValue}
            nextStep={nextStep}
          />
        );
      case 6:
        return <IsOwner setValue={setValue} nextStep={nextStep} />;
      case 7:
        return <Amenities lng={lng} setValue={setValue} nextStep={nextStep} />;
      case 8:
        return (
          <Name_desc
            watch={watch}
            setValue={setValue}
            lng={lng}
            nextStep={nextStep}
          />
        );
      case 9:
        return <FinalForm watch={watch} />;
      default:
        return null;
    }
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <Button
        size="icon"
        type="button"
        className="self-end"
        onClick={() => setCurrentStep((prev) => prev - 1)}
      >
        <StepBack />
      </Button>
      {propertyType === "commercial"
        ? renderComercialFormSteps()
        : propertyType === "building"
        ? renderBuildingsFormSteps()
        : renderFormStep()}
      {open && <SuccesDialoag searchParams={searchParams} />}
    </form>
  );
};

export default Forms;
