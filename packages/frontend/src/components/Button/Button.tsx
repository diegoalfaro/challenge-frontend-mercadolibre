import React, { CSSProperties } from "react";
import * as theme from "@theme/theme.module.scss";

import "./Button.scss";

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => any;
  color?: string;
}

const Button = ({
  children,
  color = theme.secondaryColor,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  const style = {
    "--color": color,
  } as CSSProperties;

  return (
    <button {...props} className="btn" style={style}>
      {children}
    </button>
  );
};

export default Button;
