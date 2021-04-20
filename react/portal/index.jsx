import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return React.createPortal(
    <div className={style.modal}>{children}</div>,
    document.body
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div>
      <Modal isOpen={isModalOpen} />
      <button onClick={() => setIsModalOpen(true)}>open</button>
      <button onClick={() => setIsModalOpen(false)}>close</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
