import Card from "../Card/Card";
import Modal from "../Modal/Modal";

function ModalMessage({ messageText, closeFunction }) {

    const closeButtonHandler = () => {
        closeFunction(false)
    }
  return (
    <Modal>
      <Card>
        <p>{messageText}</p>
        <button onClick={closeButtonHandler}>Stäng</button>
      </Card>
    </Modal>
  );
}

export default ModalMessage