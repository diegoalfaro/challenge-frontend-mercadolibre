import React, { CSSProperties } from "react";
import * as theme from "@theme/theme.module.scss";

import "./Button.scss";

interface ButtonProps {
  onClick?: () => any;
  color?: string;
}

const Button = ({
  children,
  onClick,
  color = theme.secondaryColor,
}: React.PropsWithChildren<ButtonProps>) => {
  const style = {
    "--color": color,
  } as CSSProperties;

  return (
    <button className="btn" onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
