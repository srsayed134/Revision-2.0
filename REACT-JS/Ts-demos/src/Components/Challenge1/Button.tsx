import React from "react";

function Button(props: {
  label: string;
  onClick: () => void;
  disable: boolean;
}) {
  return (
    <div>
      <button onClick={props.onClick} disabled= {props.disable}>{props.label}</button>
    </div>
  );
}

export default Button;
