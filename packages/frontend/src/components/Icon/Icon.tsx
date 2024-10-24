import React, { CSSProperties, PropsWithChildren } from "react";

import "./Icon.scss";

const Icon = ({
  children,
  color,
  size,
}: PropsWithChildren<{ color?: string; size?: number }>) => {
  const style = {
    "--color": color,
    "--size": `${size}px`,
  } as CSSProperties;

  return (
    <i className="icon" style={style}>
      {children}
    </i>
  );
};

export default Icon;
