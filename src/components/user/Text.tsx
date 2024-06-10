import React from "react";
import { useNode, UserComponent } from "@craftjs/core";

type Props = {
  text: string;
  fontSize: number;
};

const Text: UserComponent<Props> = ({ fontSize, text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => {
        if (!ref) {
          console.log("voltou");
          return ref;
        }

        connect(drag(ref));
      }}
    >
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};

Text.craft = {
  rules: {
    canDrag: (node) => node.data.props.text !== "Drag",
  },
};

export { Text };
