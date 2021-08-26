import React from "react";
import AppLayout from "./AppLayout";
import NavItem from "./NavItem";
import { Box, Layout, Panel, Stack, Text, ThemeProvider, Select } from "@sparkpost/matchbox";
import JSONPretty from 'react-json-pretty';
import eventTypes from '../data/eventTypes.json'


const { useState } = React;
const App = () => {

  const [conteudo, setConteudo] = useState("Select a Event to see the details.")
  const [titulo, setTitulo] = useState("Event")

  const criarOnClick = function(campo, titulo) {
    
    return function() {
      setConteudo(eventTypes[campo])
      setTitulo(titulo);
    }
  }


  return (
    <AppLayout>
      <AppLayout.Left>
        <NavItem selected>
            <Select
              id="id"
              options={[
                "message",
                "engagement",
                "amp"
              ]}
            />
        </NavItem>
        <NavItem selected={false} onClick={criarOnClick('bounce', 'Bounce')}>Bounce</NavItem>
        <NavItem selected={false} onClick={criarOnClick('delivery', 'Delivery')}>Delivery</NavItem>
        <NavItem selected={false} onClick={criarOnClick('injection', 'Injection')}>Injection</NavItem>
        <NavItem selected={false} onClick={criarOnClick('sms_status', 'SMS Status')}>SMS Status</NavItem>
        <NavItem selected={false} onClick={criarOnClick('spam_complaint', 'Spam Complaint')}>Spam Complaint</NavItem>
        <NavItem selected={false} onClick={criarOnClick('out_of_band', 'Out of Band')}>Out of Band</NavItem>
        <NavItem selected={false} onClick={criarOnClick('policy_rejection', 'Policy Rejection')}>Policy Rejection</NavItem>
        <NavItem selected={false} onClick={criarOnClick('delay', 'Delay')}>Delay</NavItem>
        <NavItem selected={false} onClick={criarOnClick('click', 'Click')}>Click</NavItem>
        <NavItem selected={false} onClick={criarOnClick('open', 'Open')}>Open</NavItem>
        <NavItem selected={false} onClick={criarOnClick('initial_open', 'Initial Open')}>Initial Open</NavItem>
        <NavItem selected={false} onClick={criarOnClick('amp_click', 'AMP Click')}>AMP Click</NavItem>
        <NavItem selected={false} onClick={criarOnClick('amp_open', 'AMP Open')}>AMP Open</NavItem>
        <NavItem selected={false} onClick={criarOnClick('amp_initial_open', 'AMP Initial Open')}>AMP Initial Open</NavItem>
        <NavItem selected={false} onClick={criarOnClick('generation_failure', 'Generation Failure')}>Generation Failure</NavItem>
        <NavItem selected={false} onClick={criarOnClick('generation_rejection', 'Generation Rejection')}>Generation Rejection</NavItem>
        <NavItem selected={false} onClick={criarOnClick('list_unsubscribe', 'List Unsubscribe')}>List Unsubscribe</NavItem>
        <NavItem selected={false} onClick={criarOnClick('link_unsubscribe', 'Link Unsubscribe')}>Link Unsubscribe</NavItem>
        
      </AppLayout.Left>
      <AppLayout.Right>
        <Box>
          <Text as="h2" marginLeft="8px">{titulo}</Text>
          <Text truncate as="p" marginTop="30px" marginLeft="8px">
             Description of event.
          </Text>
          <Box p="500" bg="gray.200" borderRadius="200" color="gray.700" maxWidth="98%" marginLeft="8px"  marginTop="20px">
            <JSONPretty id="json-pretty" data={conteudo}></JSONPretty>
          </Box>
        </Box>
      </AppLayout.Right>
    </AppLayout>
  );
};

export default App;
