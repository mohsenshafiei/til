import React from "react";
import style from "./styles.css";

const Cat = (props) => {
  const { mouse } = props;
  return (
    <img
      src="/cat.jpg"
      style={{ position: "absolute", left: mouse.x, top: mouse.y }}
    />
  );
};

const Mouse = (props) => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const handleMouseMove = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };
  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {props.render({ x, y })}
    </div>
  );
};

const MouseTracker = () => {
  return <Mouse render={(mouse) => <Cat mouse={mouse} />} />;
};

export default function App() {
  return (
    <div className={style.app}>
      <MouseTracker />
    </div>
  );
}
