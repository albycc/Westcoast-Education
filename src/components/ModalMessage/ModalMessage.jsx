import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import Button from "../UI/Button/Button";

function ModalMessage({ messageText, closeFunction }) {

    const closeButtonHandler = () => {
        closeFunction(false)
    }
  return (
    <Modal>
      <Card>

        <p>{messageText}</p>
        <Button label="OK" background="lightBlue" func={closeButtonHandler}/>
      </Card>
    </Modal>
  );
}

export default ModalMessage