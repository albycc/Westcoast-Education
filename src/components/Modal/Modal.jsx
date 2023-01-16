import { createPortal } from "react-dom";
import "./Modal.css"

function ModalOverlay({child}) {
  return (
    <div className="overlay-model">
        {child}
    </div>
  );
}

function Overlay() {
  return <div className="overlay"></div>;
}

function Modal({children}) {
  return (
    <>
     {createPortal(<Overlay />, document.querySelector('#overlay-root'))}
     {createPortal(<ModalOverlay child={children} />, document.querySelector('#modal-root'))}
    </>
  );
}

export default Modal
