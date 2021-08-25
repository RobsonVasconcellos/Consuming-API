import React from "react";
import AppLayout from "./AppLayout";
import NavItem from "./NavItem";

const { useState } = React;

const App = () => {

  const [state, setState] = useState("OIOIODJIAHODIAS")

  const clique = function() {
    fetch('/data/eventTypes.json').then(res => res.json())
      .then(res => (<div><pre> {
        setState(JSON.stringify(res.injection))
      })</pre></div>))
  }

  return (
    <AppLayout>
      <AppLayout.Left>
        <NavItem selected={false} onClick={clique}>Bounce</NavItem>
      </AppLayout.Left>
      <AppLayout.Right>{state}</AppLayout.Right>
    </AppLayout>
  );
};

export default App;
