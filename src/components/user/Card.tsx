import React from "react";
import { useNode, Element, UserComponent } from "@craftjs/core";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";

type Props = {
  background: string | undefined;
  padding: number | undefined;
};

type PropsCardTop = {
  children: React.ReactNode;
};

export const CardTop: UserComponent<PropsCardTop> = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      ref={(ref) => {
        if (!ref) {
          console.log("voltou");
          return ref;
        }

        connect(ref);
      }}
      className="text-only"
    >
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Text),
  },
};

export const CardBottom: UserComponent<PropsCardTop> = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div
      style={{ paddingTop: 50, paddingBottom: 50 }}
      ref={(ref) => {
        if (!ref) {
          console.log("voltou");
          return ref;
        }

        connect(ref);
      }}
    >
      {children}
    </div>
  );
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes) =>
      incomingNodes.every((incomingNode) => incomingNode.data.type === Button),
  },
};

const Card: UserComponent<Props> = ({ background = "#fff", padding = 20 }) => {
  return (
    <Container background={background} padding={padding}>
      <Element id="text" is={CardTop} canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is={CardBottom} canvas>
        <Button size="small" variant="contained" color="primary">
          Learn more
        </Button>
      </Element>
    </Container>
  );
};

Card.craft = {
  rules: {},
};

export { Card };
