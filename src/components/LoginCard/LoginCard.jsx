import { useContext, useRef } from "react";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import AuthContext from "../../store/auth-context";
import Form from "../Form/Form";
import FormItem from "../Form/FormItem";
import style from "./LoginCard.module.scss";

function LoginCard({ toggleFunction }) {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const context = useContext(AuthContext);

  console.log(context);

  const onButtonHandler = () => {

    const loginObject = {
      username: usernameInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    console.log(loginObject);
    context.loginFunc(loginObject);
    toggleFunction(false);
  };
  return (
    <Modal>
      <div className={style['login-container']}>

      <Card>
        <Form onSubmitFunction={onButtonHandler}>
          <FormItem>
            <label htmlFor="username">Användarnamn</label>
            <input
              type="text"
              name="username"
              id="username"
              ref={usernameInputRef}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="password">Lösenord</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={passwordInputRef}
            />
          </FormItem>
          <FormItem>
          <button type="submit">
            Logga in
          </button>
          </FormItem>
        </Form>
      </Card>
      </div>
    </Modal>
  );
}

export default LoginCard;
