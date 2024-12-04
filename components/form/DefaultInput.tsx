import { Label } from "../ui/label";
import { Input } from "../ui/input";

type DefaultInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

function DefaultInput({
  label,
  name,
  type,
  defaultValue,
  placeholder,
}: DefaultInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default DefaultInput;
