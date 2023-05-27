import React, { PropsWithChildren, useContext } from "react";
import "./Button.css";
import { ThemeContext } from "../../../util/ThemeContext";

interface props {
  handler: () => void;
}

interface circleProps extends props {
  icon: React.ReactNode;
}



export function MainButton(props: PropsWithChildren<props>) {
  const {getDarkClass} = useContext(ThemeContext)
  return (
    <button className={getDarkClass("customButton mainButton")} onClick={props.handler}>
      {props.children}
    </button>
  );
}

export function SecondaryButton(props: PropsWithChildren<props>) {
  const {getDarkClass} = useContext(ThemeContext)
  return (
    <button className={getDarkClass("customButton secondaryButton")} onClick={props.handler}>
      {props.children}
    </button>
  );
}

export function CircleMainButton(props: circleProps) {
  const {getDarkClass} = useContext(ThemeContext)
  return (
    <button className={getDarkClass("customCircleButton circleMainButton")} onClick={props.handler}>
      {props.icon}
    </button>
  );
}

export function CircleSecondaryButton(props: circleProps) {
  const {getDarkClass} = useContext(ThemeContext)
  return (
    <button className={getDarkClass("customCircleButton circleSecondaryButton")} onClick={props.handler}>
      {props.icon}
    </button>
  );
}

