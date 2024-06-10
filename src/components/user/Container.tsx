import React, { ReactNode } from "react";
import { Paper } from "@mui/material";
import { useNode, UserComponent } from "@craftjs/core";

type Props = {
  background: string;
  padding: number;
  children?: ReactNode;
};

const Container: UserComponent<Props> = ({
  background,
  children,
  padding = 0,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Paper
      ref={(ref) => {
        if (!ref) {
          return ref;
        }

        connect(drag(ref));
      }}
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </Paper>
  );
};

Container.craft = {
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag",
  },
};

export { Container };
