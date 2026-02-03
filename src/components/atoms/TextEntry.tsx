import { Dispatch, SetStateAction } from "react";

export default function TextEntry(props:
  { valueState: [string, Dispatch<SetStateAction<string>>], placeholder?: string, children?: React.ReactNode }
) {
  let [value, setValue] = props.valueState;
  return <div className="flex bg-background-secondary rounded-md">
    <input className="flex-1 focus:outline-0 p-1 px-2"
      value={value}
      placeholder={props.placeholder}
      onChange={(event) => setValue(event.target.value)}
    />
    {props.children}
  </div>;
}