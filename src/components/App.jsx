import React from "react";
import AppLayout from "./AppLayout";
import NavItem from "./NavItem";

const { useState } = React;

const App = () => {

  const [state, setState] = useState("OIOIODJIAHODIAS")

  const criarOnClick = function(campo) {

    return function() {
      console.log(campo);
      fetch('/data/eventTypes.json').then(res => res.json())
        .then(res => {
          setState(JSON.stringify(res[campo]))
        })
    }
  }


  return (
    <AppLayout>
      <AppLayout.Left>
        <NavItem selected={false} onClick={criarOnClick('bounce')}>Bounce</NavItem>
        <NavItem selected={false} onClick={criarOnClick('delivery')}>Delivery</NavItem>
        <NavItem selected={false} onClick={criarOnClick('injection')}>Injection</NavItem>
        <NavItem selected={false} onClick={criarOnClick('sms_status')}>SMS Status</NavItem>
        <NavItem selected={false} onClick={criarOnClick('spam_complaint')}>Spam Complaint</NavItem>
        <NavItem selected={false} onClick={criarOnClick('out_of_band')}>Out of Band</NavItem>
        <NavItem selected={false} onClick={criarOnClick('policy_rejection')}>Policy Rejection</NavItem>
        <NavItem selected={false} onClick={criarOnClick('delay')}>Delay</NavItem>
        <NavItem selected={false} onClick={criarOnClick('click')}>Click</NavItem>
        <NavItem selected={false} onClick={criarOnClick('open')}>Open</NavItem>
        <NavItem selected={false} onClick={criarOnClick('initial_open')}>Initial Open</NavItem>
        <NavItem selected={false} onClick={criarOnClick('amp_click')}>AMP Click</NavItem>
        <NavItem selected={false} onClick={criarOnClick('amp_open')}>AMP Open</NavItem>
        <NavItem selected={false} onClick={criarOnClick('amp_initial_open')}>AMP Initial Open</NavItem>
        <NavItem selected={false} onClick={criarOnClick('generation_failure')}>Generation Failure</NavItem>
        <NavItem selected={false} onClick={criarOnClick('generation_rejection')}>Generation Rejection</NavItem>
        <NavItem selected={false} onClick={criarOnClick('list_unsubscribe')}>List Unsubscribe</NavItem>
        <NavItem selected={false} onClick={criarOnClick('link_unsubscribe')}>Link Unsubscribe</NavItem>
        
      </AppLayout.Left>
      <AppLayout.Right>{state}</AppLayout.Right>
    </AppLayout>
  );
};

export default App;
