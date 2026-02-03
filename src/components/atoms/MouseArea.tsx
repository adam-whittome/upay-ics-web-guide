import { Children, Dispatch, MouseEventHandler, SetStateAction } from "react";

export enum MouseAreaState {
  None,
  Hover,
  Click
}

export default function MouseArea(props: {
  setState: Dispatch<SetStateAction<MouseAreaState>>,
  onClick?: MouseEventHandler,
  children?: React.ReactNode
}) {
  return <div
    onMouseEnter={() => props.setState(MouseAreaState.Hover)}
    onMouseLeave={() => props.setState(MouseAreaState.None)}
    onMouseDown={() => props.setState(MouseAreaState.Click)}
    onClick={props.onClick}
  >
    {props.children}
  </div>
}