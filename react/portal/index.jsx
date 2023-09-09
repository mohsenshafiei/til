import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("root");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return ReactDOM.createPortal(children, elRef.current);
};

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div id="root">
      <div>
        <button onClick={handleToggleModal}>
          {showModal ? "Hide" : "Show"} Modal
        </button>
        {showModal && (
          <Modal>
            <div style={{ background: "white", padding: "1em" }}>
              <h1>This is a modal!</h1>
              <button onClick={() => setShowModal(!showModal)}>Close</button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
