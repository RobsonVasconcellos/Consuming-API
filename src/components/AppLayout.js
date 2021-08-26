import React from "react";
import { Box, Layout, Panel, Stack, Text, ThemeProvider } from "@sparkpost/matchbox";
import Logo from "./Logo";

const AppLayout = ({ children }) => (
  <ThemeProvider>
    <Box paddingX={[400, 400, 400, 800]} paddingY={[200, 200, 200, 400]}>
      <Stack space={[400, 400, 400, 800]}>
        <Box display="flex" alignItems="center">
          <Logo />
          <Text
            as="h1"
            fontSize="500"
            fontWeight="light"
            lineHeight="500"
            marginLeft="400"
            marginTop="300"
          >
            Programming Exercise
          </Text>
        </Box>
        <Layout>{children}</Layout>
      </Stack>
    </Box>
  </ThemeProvider>
);

AppLayout.Left = ({ children }) => <Layout.Section annotated>{children}</Layout.Section>;
AppLayout.Right = ({ children }) => (
  <Layout.Section>
    <Panel>
      <Box minHeight="800px">{children}</Box>
    </Panel>
  </Layout.Section>
);

export default AppLayout;