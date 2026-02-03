import { LuCopy } from "react-icons/lu";

import Text from "../atoms/Text";
import IconButton from "./IconButton";

export default function CopyBox(props: { text: string }) {
  return <div className="flex flex-row p-1 px-2 bg-background-secondary rounded-md items-center gap-2">
    <div className="flex-1 break-all">
      <Text>{props.text}</Text>
    </div>
    <div className="flex-none">
      <IconButton onClick={() => navigator.clipboard.writeText(props.text)}>
        <LuCopy />
      </IconButton>
    </div>
  </div>
}