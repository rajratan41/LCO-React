import React, { Fragment } from "react";

import Context from "./context";
import Provider from "./provider";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentThree />;
};

const AgentThree = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h3>Agent Information </h3>
          <p>Agent Code : {context.data.agent}</p>
          <p>Mission Name : {context.data.mname}</p>
          <h3>Mission Status : {context.data.accept}</h3>
          <button onClick={context.isMissionAccepted}>
            Click To Accept Mission
          </button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Mission</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;
