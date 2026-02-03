import { Children } from "react";
import Text from "../atoms/Text";

export default function NumberedList(props: { children?: React.ReactNode }) {
  return <div className="grid grid-cols-[min-content_1fr] gap-x-3">{
    Children.map(props.children, (child, index) => <>
      <Text>{index + 1}.</Text>
      {child}
    </>)
  }</div>
}