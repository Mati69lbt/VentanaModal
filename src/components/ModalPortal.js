import ReactDOM from "react-dom";
import "./Modal.css";

const ModaPortal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
        {/* {children} lo q esta adentro de modal en el componente modals, lo toma children */}
      </div>
    </article>,
    document.getElementById("modal")
  );
};

export default ModaPortal;
