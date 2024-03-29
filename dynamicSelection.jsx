import {
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";

export const GenericSelection = ({ title, itemsArray, handleSelection }) => {
  return (
    <Select className="flex-grow" open={true}>
      <SelectTrigger>
        <div className="w-full py-3 text-2xl font-semibold flex justify-around items-center">
          {title}
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {itemsArray &&
            itemsArray.map((item) => (
              <SelectItem
                key={item}
                className="py-3"
                onMouseDown={() => handleSelection(item)}
              >
                {item}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export const withGenericSelection = (Component) => {
  return function GenericSelectionWrapper({
    title,
    itemsArray,
    paramNameToSet,
    setValue,
    nextStep,
    ...restProps
  }) {
    const handleSelection = (value) => {
      setValue(paramNameToSet, value);
      nextStep();
    };

    return (
      <div key="1" className="">
        <Component
          title={title}
          paramNameToSet={paramNameToSet}
          itemsArray={itemsArray}
          handleSelection={handleSelection}
          {...restProps}
        />
      </div>
    );
  };
};
