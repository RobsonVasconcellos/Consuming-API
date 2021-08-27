import React from "react";
import AppLayout from "./AppLayout";
import NavItem from "./NavItem";
import { Box, Layout, Panel, Stack, Text, ThemeProvider, Select, Badge } from "@sparkpost/matchbox";
import JSONPretty from 'react-json-pretty';
import eventTypes from '../data/eventTypes.json'


const { useState } = React;
const App = () => {

  const [content, setContent] = useState("Select a Event to see the details.")
  const [title, setTitle] = useState("Event")
  const [description, setDescription] = useState("Description of the Event.")
  const [group, setGroup] = useState("Group")

  const generateData = function(data, title, description, group) {
    
    return function() {
      setContent(eventTypes[data])
      setTitle(title);
      setDescription(description);
      setGroup(group);
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
        <NavItem selected={false} onClick={generateData('bounce', 'Bounce', 'Remote MTA has permanently rejected a message.', 'message')}>Bounce</NavItem>
        <NavItem selected={false} onClick={generateData('delivery', 'Delivery', 'Remote MTA acknowledged receipt of a message.', 'message')}>Delivery</NavItem>
        <NavItem selected={false} onClick={generateData('injection', 'Injection', 'Message is received by or injected into SparkPost.', 'message')}>Injection</NavItem>
        <NavItem selected={false} onClick={generateData('sms_status', 'SMS Status', 'SMPP/SMS message produced a status log output', 'message')}>SMS Status</NavItem>
        <NavItem selected={false} onClick={generateData('spam_complaint', 'Spam Complaint', 'Message was classified as spam by the recipient.', 'engagement')}>Spam Complaint</NavItem>
        <NavItem selected={false} onClick={generateData('out_of_band', 'Out of Band', 'Remote MTA initially reported acceptance of a message, but it has since asynchronously reported that the message was not delivered.', 'message')}>Out of Band</NavItem>
        <NavItem selected={false} onClick={generateData('policy_rejection', 'Policy Rejection', 'Due to policy, SparkPost rejected a message or failed to generate a message.', 'message')}>Policy Rejection</NavItem>
        <NavItem selected={false} onClick={generateData('delay', 'Delay', 'Remote MTA has temporarily rejected a message.')}>Delay</NavItem>
        <NavItem selected={false} onClick={generateData('click', 'Click', "Recipient clicked a tracked link in a message, thus prompting a redirect through the SparkPost click-tracking server to the link's destination.", 'message')}>Click</NavItem>
        <NavItem selected={false} onClick={generateData('open', 'Open', 'Recipient opened a message in a mail client, thus rendering a tracking pixel at the bottom of the message.', 'engagement')}>Open</NavItem>
        <NavItem selected={false} onClick={generateData('initial_open', 'Initial Open', 'Recipient opened a message in a mail client, thus rendering a tracking pixel at the top of the message.', 'engagement')}>Initial Open</NavItem>
        <NavItem selected={false} onClick={generateData('amp_click', 'AMP Click', "Recipient clicked a tracked link in an AMP message, thus prompting a redirect through the SparkPost click-tracking server to the link's destination.", 'amp')}>AMP Click</NavItem>
        <NavItem selected={false} onClick={generateData('amp_open', 'AMP Open', 'Recipient opened an AMP message in a mail client, thus rendering a tracking pixel at the bottom of the message.', 'amp')}>AMP Open</NavItem>
        <NavItem selected={false} onClick={generateData('amp_initial_open', 'AMP Initial Open', 'Recipient opened an AMP message in a mail client, thus rendering a tracking pixel at the top of the message.', 'amp')}>AMP Initial Open</NavItem>
        <NavItem selected={false} onClick={generateData('generation_failure', 'Generation Failure', 'Message generation failed for an intended recipient.', 'message')}>Generation Failure</NavItem>
        <NavItem selected={false} onClick={generateData('generation_rejection', 'Generation Rejection', 'SparkPost rejected message generation due to policy.', 'message')}>Generation Rejection</NavItem>
        <NavItem selected={false} onClick={generateData('list_unsubscribe', 'List Unsubscribe', "User clicked the 'unsubscribe' button on an email client.", 'engagement')}>List Unsubscribe</NavItem>
        <NavItem selected={false} onClick={generateData('link_unsubscribe', 'Link Unsubscribe', 'User clicked a hyperlink in a received email.', 'engagement')}>Link Unsubscribe</NavItem>
        
      </AppLayout.Left>
      <AppLayout.Right>
        <Box>
          <Text as="h2" marginLeft="8px">{title}</Text>
          <Badge color="gray" marginTop="10px" marginLeft="8px">{group}</Badge>
          <Text truncate as="p" marginTop="30px" marginLeft="8px">
            {description}
          </Text>
          <Box p="500" bg="gray.200" borderRadius="200" color="gray.700" maxWidth="98%" marginLeft="8px"  marginTop="20px">
            <JSONPretty id="json-pretty" data={content}></JSONPretty>
          </Box>
        </Box>
      </AppLayout.Right>
    </AppLayout>
  );
};

export default App;
