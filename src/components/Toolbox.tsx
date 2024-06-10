import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@mui/material";
import { Container } from "./user/Container";
import { Card } from "./user/Card";
import { Button } from "./user/Button";
import { Text } from "./user/Text";
import { useEditor, Element } from "@craftjs/core";

const Toolbox: React.FC = () => {
  const { connectors, query } = useEditor();
  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={(ref: any) =>
              connectors.create(
                ref,
                <Button variant="contained" color="primary" size="medium">
                  Button
                </Button>
              )
            }
            variant="contained"
          >
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={(ref: any) =>
              connectors.create(ref, <Text text="Hi world" fontSize={20} />)
            }
            variant="contained"
          >
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={(ref: any) =>
              connectors.create(
                ref,
                <Element is={Container} padding={20} background="#eee" canvas />
              )
            }
            variant="contained"
          >
            Container
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={(ref: any) =>
              connectors.create(ref, <Card background="#fff" padding={20} />)
            }
            variant="contained"
          >
            Card
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Toolbox };
