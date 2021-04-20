import React from "react";

// In this component we will get Error beccause we are breaking hooks rule

// Hook Rule: Don’t call Hooks inside loops, conditions, or nested functions.

const Component = () => {
  const [condition, setCondition] = React.useState(false);
  if (condition) {
    useEffect(() => {
      setCondition(true);
      console.log("Wrong UseEffect! We are going to get Error.");
    });
  }
  return <div>Hello World!</div>;
};

// To resolve this issue we must

const AnotherComponent = (props) => {
  const { callback } = props;
  useEffect(() => {
    callback();
  }, []);
  return <></>;
};

const Component = (props) => {
  const [condition, setCondition] = React.useState(false);
  const callback = () => {
    setCondition(true);
    console.log("Wrong UseEffect! We are going to get Error.");
  };
  return (
    <>
      <AnotherComponent callback={callback} />
      <div>Hello World!</div>
    </>
  );
};
