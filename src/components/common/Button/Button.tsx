import React, { PropsWithChildren } from "react";
import "./Button.css";

interface props {
  handler: () => void;
}

interface circleProps extends props {
  icon: React.ReactNode;
}

export function MainButton(props: PropsWithChildren<props>) {
  return (
    <button className="customButton mainButton" onClick={props.handler}>
      {props.children}
    </button>
  );
}

export function SecondaryButton(props: PropsWithChildren<props>) {
  return (
    <button className="customButton secondaryButton" onClick={props.handler}>
      {props.children}
    </button>
  );
}

export function CircleMainButton(props: circleProps) {
  return (
    <button className="customCircleButton circleMainButton" onClick={props.handler}>
      {props.icon}
    </button>
  );
}

export function CircleSecondaryButton(props: circleProps) {
  return (
    <button className="customCircleButton circleSecondaryButton" onClick={props.handler}>
      {props.icon}
    </button>
  );
}

