import React from "react";

const Element = React.forwardRef((props, ref) => {
  const inputRef = React.useRef();
  React.useImperativeHandle(ref, () => {
    return {
      focus: () => inputRef.current.focus(),
    };
  });
  return (
    <div>
      <input type="text" placeholder="simple input" ref={inputRef} />
    </div>
  );
});

const Parent = () => {
  const ref = React.useRef();
  const [x, setX] = React.useState(false);

  React.useEffect(() => {
    ref.current.focus();
  }, [x]);

  return (
    <div>
      <button onClick={() => setX(true)}>{x ? "Disable" : "Enable"}</button>
      <Element ref={ref} />
    </div>
  );
};
