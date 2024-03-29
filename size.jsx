import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function SizeForm({ setValue, nextStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="w-1/2 mx-auto">
      <h1 className=" text-center text-xl pb-4 font-semibold">Size</h1>
      <div className="grid w-full items-center gap-8 pt-4">
        <div className="flex items-center gap-2">
          <Input
            id="price"
            placeholder="Enter Size"
            type="number"
            onChange={(e) => setValue("size", e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit} type="button">
          Next
        </Button>
      </div>
    </div>
  );
}
export function LandSizeForm({ setValue, nextStep }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="w-1/2 mx-auto">
      <h1 className=" text-center text-xl pb-4 font-semibold">Size</h1>
      <div className="grid w-full items-center gap-8 pt-4">
        <div className="flex items-center gap-2">
          <Label>Building Size</Label>
          <Input
            id="price"
            placeholder="Enter Size"
            type="number"
            onChange={(e) => setValue("size", e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Label>Land Size</Label>
          <Input
            id="Land Size"
            placeholder="Enter Land Size"
            type="number"
            onChange={(e) => setValue("landSize", e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit} type="button">
          Next
        </Button>
      </div>
    </div>
  );
}
