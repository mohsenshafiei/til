import React, { useState, createContext, useContext } from "react";

// Create Context
const TabContext = createContext();

// Parent component that holds state
const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabContext.Provider>
  );
}

const TabList = ({ children }) => {
  const { activeIndex } = useContext(TabContext);

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { isActive: index === activeIndex, index })
      )}
    </div>
  );
}

const Tab = ({ children, index, isActive }) => {
  const { setActiveIndex } = useContext(TabContext);

  return (
    <button onClick={() => setActiveIndex(index)} style={{ color: isActive ? 'blue' : 'black' }}>
      {children}
    </button>
  );
}

const TabPanel = ({ children, index }) => {
  const { activeIndex } = useContext(TabContext);
  return activeIndex === index ? <div>{children}</div> : null;
}

// Usage
function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanel index={0}>Content for Tab 1</TabPanel>
      <TabPanel index={1}>Content for Tab 2</TabPanel>
    </Tabs>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
