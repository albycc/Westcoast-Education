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
    console.log(document.querySelector('#overlay-root'))
  return (
    <>
     {createPortal(<Overlay />, document.querySelector('#overlay-root'))}
     {createPortal(<ModalOverlay child={children} />, document.querySelector('#modal-root'))}
    </>
  );
}

export { Modal, ModalOverlay };
