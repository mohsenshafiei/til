import React from "react";

const ControlledComponent = () => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState("");
  return (
    <div>
      <input value={x} type="number" onChange={(e) => setX(e.target.value)} />
      <input value={y} type="text" onChange={(e) => setX(e.target.value)} />
    </div>
  );
};

export default ControlledComponent;

// A Controlled Component is one that takes its current value through
// props and notifies changes through callbacks like onChange. A parent
// component "controls" it by handling the callback and managing its own
// state and passing the new values as props to the controlled component.
// You could also call this a "dumb component".
