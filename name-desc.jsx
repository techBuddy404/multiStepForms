import { Input } from "@/components/ui/input";
import { useTranslation } from "@/app/i18n/client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Name_desc = ({ lng, setValue, watch, nextStep }) => {
  const { t } = useTranslation(lng, "translation");
  const { toast } = useToast();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const generateContentWithAI = () => {
    setLoading(true);
    const formData = watch();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        carIformation: formData,
      }),
    };

    fetch("/api/generate_content", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setValue("description", data.generated_content);
        setLoading(false);
        toast({
          title: t("content_generated_by_ai_success"),
        });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div key="1" className="w-4/5 mx-auto pt-4">
      <h1 className="text-xl font-semibold text-center pb-8">
        {t("adDetails")}
      </h1>
      <Input
        className="mb-4"
        placeholder={t("adNamePlaceHolder")}
        onChange={(e) => setValue("title", e.target.value)}
      />
      <Textarea
        placeholder={t("descriptionPlaceHolder")}
        className="mb-4 h-[12rem]"
        onChange={(e) => setValue("description", e.target.value)}
      />
      <div className="flex flex-col gap-4">
        <Button
          disabled={isLoading}
          type="button"
          className="w-full bg-zinc-950 border border-zinc-950 hover:bg-sky-700 relative"
          onClick={generateContentWithAI}
        >
          {isLoading && (
            <span className="absolute top-0 right-0 inline-flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          )}
          {t("generate_Content_AI")}
        </Button>
        <Button className="w-full main-bg" onClick={handleSubmit}>
          {t("Submit")}
        </Button>
      </div>
    </div>
  );
};

export default Name_desc;
