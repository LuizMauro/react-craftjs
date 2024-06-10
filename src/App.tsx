// pages/index.js
import React from "react";
import { Typography, Paper, Grid } from "@mui/material";

import { Toolbox } from "./components/Toolbox";
import { SettingsPanel } from "./components/SettingsPanel";

import { Container } from "./components/user/Container";
import { Button } from "./components/user/Button";
import { Card } from "./components/user/Card";
import { Text } from "./components/user/Text";
import { CardBottom, CardTop } from "./components/user/Card";

import { Editor, Frame, Element } from "@craftjs/core";

export default function App() {
  return (
    <div>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Text fontSize={20} text="Hi world!" />
                <Text fontSize={20} text="It's me again!" />
                <Button color="primary" size="medium" variant="contained">
                  {" "}
                  CLick{" "}
                </Button>
                <Container background="#fff" padding={2}>
                  <Text fontSize={20} text="Container" />
                </Container>
                <Card background="#fff" padding={2}></Card>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
