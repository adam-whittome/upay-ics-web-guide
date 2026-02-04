import { ClipboardIcon } from "@heroicons/react/24/outline";

import Text from "../atoms/Text";

export default function CopyBox(props: { text: string }) {
  return <div className="flex flex-row p-1 px-2 bg-background-secondary rounded-md items-center gap-2">
    <div className="flex-1 break-all">
      <Text>{props.text}</Text>
    </div>
    <button className="flex-none cursor-pointer"
      onClick={() => navigator.clipboard.writeText(props.text)}
    >
      <ClipboardIcon className="size-5 stroke-foreground transition hover:stroke-foreground-secondary" />
    </button>
  </div>
}
