import React from "react";

const Component = () => {
  // ComponentDidMount
  React.useEffect(async (props) => {
    const res = await fetch("https://example.com");
  }, []);

  // ComponentWillUnmount
  React.useEffect(() => {
    console.log(props);
    return () => {
      console.log("Component Will Unmount");
    };
  }, [props]);

  // Note that useEffect will fires after layout and paint, during deffered events

  React.useEffect(() => {
    console.log(props);
  }, [props]);

  // Not all effect can be deffered, for example DOM Mutation should run synchronously
  // In here we should use useLayoutEffect instead

  // Solution for when dependencies will change too often

  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1); // This effect depends on the `count` state
    }, 1000);
    return () => clearInterval(id);
  }, []); // 🔴 Bug: `count` is not specified as a dependency

  // Solution is

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCounter((c) => c + 1); // ✅ This doesn't depend on `counter` variable outside
    }, 1000);
    return () => clearInterval(id);
  }, []); // ✅ Our effect doesn't use any variables in the component scope

  // To deal with functions we must work like below

  const { someProps } = props;
  const doSomething = () => console.log(someProp);
  useEffect(() => {
    doSomething();
  }, []); // 🔴 This is not safe (it calls `doSomething` which uses `someProp`)

  // Solution is

  useEffect(() => {
    const doSomething = () => console.log(someProp);
    doSomething();
  }, [someProp]); // ✅ OK (our effect only uses `someProp`)

  // If we cannot move function inside the useEffect there are another options like

  const fetchProduct = React.useCallback(() => {
    // ... Does something with productId ...
  }, [productId]); // ✅ All useCallback dependencies are specified

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]); // ✅ All useEffect dependencies are specified

  return <div>Hello World!</div>;
};
