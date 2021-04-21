import React from "react";

const ControlledComponent = () => {
  const refX = React.useRef();
  const refY = React.useRef();
  const handleSubmit = () => {
    const x = refX.current.value;
    const y = refY.current.value;
    console.log(x, y);
  };
  return (
    <div>
      <input defaultValue={0} type="number" ref={refX} />
      <input
        defaultValue="Yeay!"
        type="text"
        ref={refY}
        placeholder="my placeholder"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ControlledComponent;

// A Uncontrolled Component is one that stores its own state internally,
// and you query the DOM using a ref to find its current value when you
// need it. This is a bit more like traditional HTML.
