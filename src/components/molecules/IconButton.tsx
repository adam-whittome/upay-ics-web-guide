"use client"

import { IconContext, IconType } from "react-icons";
import MouseArea, { MouseAreaState } from "../atoms/MouseArea";
import { MouseEventHandler, useState } from "react";

export default function IconButton(props: {
  onClick?: MouseEventHandler,
  iconContext?: IconContext,
  iconContextHover?: IconContext,
  iconContextClick?: IconContext,
  children?: React.ReactNode
}) {
  const [state, setState] = useState(MouseAreaState.None);
  return <div className="cursor-pointer">
    <MouseArea setState={setState} onClick={props.onClick}>
      {
        props.iconContext ? (
          <IconContext.Provider value={
            state == MouseAreaState.Hover && props.iconContextHover ? props.iconContextHover :
              state == MouseAreaState.Click && props.iconContextClick ? props.iconContextClick :
                props.iconContext
          }>
            <div>{props.children}</div>
          </IconContext.Provider>
        ) : (
          <div>{props.children}</div>
        )
      }
    </MouseArea>
  </div>;
}