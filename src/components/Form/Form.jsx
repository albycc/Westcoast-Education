import style from "./Form.module.scss"

function Form({ children, onSubmitFunction }) {

    const onSubmitHandler = (event) => {
        event.preventDefault()
        onSubmitFunction()
        event.target.reset()
    }
  return (
    <form onSubmit={onSubmitHandler} className={style.form}>
      <ul>{children}</ul>
    </form>
  );
}

export default Form;
