import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import React from "react";
import upload from "@/app/[lng]/sell/imageUploadAction";
import { ImageDown, Rocket } from "lucide-react";
import { useTranslation } from "@/app/i18n/client";
import { Progress } from "@/components/ui/progress";
import dynamic from "next/dynamic";
import { useState } from "react";

const UploadedImage = dynamic(() => import("./test"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent h-auto bg-opacity-50 text-white">
      <Progress value={40} className="w-[60%]" />
    </div>
  ),
});
const ImagesForm = ({ lng, setValue, setCurrentStep }) => {
  const { t } = useTranslation(lng, "translation");
  const [uploadedImages, setUploadedImages] = useState(
    Array.from({ length: 20 }).fill(null)
  );

  const handleImageChange = async (e, index) => {
    const files = e.target.files;

    try {
      if (!files) {
        throw new Error("No files uploaded");
      }

      const uploadPromises = [];

      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append("file", files[i]);

        const uploadPromise = await upload(formData).then((e) => e.adImage);
        uploadPromises.push(uploadPromise);
      }

      const uploadedImagesCopy = [...uploadedImages];

      const uploadedImagesUrls = await Promise.all(uploadPromises);

      uploadedImagesUrls.forEach((url, i) => {
        uploadedImagesCopy[index + i] = url;
      });

      setUploadedImages(uploadedImagesCopy);
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const nonNullImages = uploadedImages.filter((image) => image !== null);
    setValue("images", nonNullImages);
    setCurrentStep(2);
  };
  const handleImageRemove = async (index) => {
    const uploadedImagesCopy = [...uploadedImages];
    uploadedImagesCopy[index] = null;
    setUploadedImages(uploadedImagesCopy);
  };

  return (
    <div className="bg-white border rounded p-8 shadow-md  dark:bg-zinc-950">
      <div className="title relative">
        <h1 className="text-3xl font-bold pb-6 text-center">
          {t("uploadImages")}
        </h1>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-4 gap-3">
          {uploadedImages.map((image, index) => (
            <div key={index} className="border flex flex-col gap-4 p-3 rounded">
              <Label
                htmlFor={`image${index}`}
                className="z-30 block mb-1 font-semibold text-center"
              >
                {index === 0 ? (
                  <Badge className="z-30">Cover</Badge>
                ) : (
                  `Slide ${index + 1}`
                )}
              </Label>
              <div className="relative">
                <input
                  type="file"
                  id={`image${index}`}
                  name={`image${index}`}
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, index)}
                  multiple={true}
                />
                {image && (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-6"
                  >
                    <UploadedImage index={index} imageUrl={image} />
                    <Button
                      onClick={() => handleImageRemove(index)}
                      type="button"
                      className="w-full text-black text-black justify-around text-center font-normal"
                      variant="outline"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                )}

                {!image && (
                  <Label
                    htmlFor={`image${index}`}
                    className="cursor-pointer flex items-center justify-center"
                  >
                    <ImageDown />{" "}
                  </Label>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            onClick={handleSubmit}
            className="w-[240px] justify-center text-center font-normal mt-4"
          >
            <Rocket className="w-4 h-4 mr-3" />
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
export default ImagesForm;
