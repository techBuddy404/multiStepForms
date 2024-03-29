import { Button } from "@/components/ui/button";
export function IsOwner({ setValue, nextStep }) {
  const handelSelection = (val) => {
    setValue("isOwner", val);
    nextStep();
  };
  return (
    <>
      <h1 className="text-xl text-center">Advertiser</h1>
      <div className="flex gap-4 justify-center py-4">
        <Button onClick={() => handelSelection("Owner")}>Owner</Button>
        <Button onClick={() => handelSelection("middelMan")}>Middel Man</Button>
      </div>
    </>
  );
}
