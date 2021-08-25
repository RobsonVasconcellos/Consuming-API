import React from "react";
import { Box, Layout, Panel, Stack, Text, ThemeProvider } from "@sparkpost/matchbox";
import Logo from "./Logo";
import NavItem from "./NavItem";


const AppLayout = ({ children }) => {
  

  return (
    <ThemeProvider>
      <Box paddingX={[400, 400, 400, 800]} paddingY={[200, 200, 200, 400]}>
        <Stack space={[400, 400, 400, 800]}>
          <Box display="flex" alignItems="center">
            <Logo/>
            <Text
              as="h1"
              fontSize="500"
              fontWeight="light"
              lineHeight="500"
              marginLeft="400"
              marginTop="300"
              children="Eu não sei o que eu tô fazendo"
            >
            
            </Text>
          </Box>
          <Layout>{children}</Layout>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

AppLayout.Left = ({children}) => {
  const clique = function (){
  }
  return(
    <Layout.Section annotated>
        {children}
    </Layout.Section>
  )
}
AppLayout.Right = ({children}) => (
  <Layout.Section>
    <Panel>
      <Box minHeight="500px">
        {children}
      </Box>
    </Panel>
  </Layout.Section>
);



export default AppLayout;
