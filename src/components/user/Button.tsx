import React, { ReactNode } from "react";
import { Button as MaterialButton } from "@mui/material";
import { UserComponent, useNode } from "@craftjs/core";

type Props = {
  size: "small" | "medium" | "large";
  variant: "text" | "outlined" | "contained";
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  children: ReactNode;
};

const Button: UserComponent<Props> = ({ children, color, size, variant }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <MaterialButton
      ref={(ref) => {
        if (!ref) {
          console.log("voltou");
          return ref;
        }

        connect(drag(ref));
      }}
      size={size}
      variant={variant}
      color={color}
    >
      {children}
    </MaterialButton>
  );
};

Button.craft = {
  rules: {},
};

export { Button };
