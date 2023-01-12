import { useContext, useRef } from "react";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import AuthContext from "../../store/auth-context";

function LoginCard({toggleFunction}) {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const context = useContext(AuthContext);

  console.log(context);

  const onButtonHandler = (event) => {
    event.preventDefault();

    const loginObject = {
      username: usernameInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    console.log(loginObject);
    context.loginFunc(loginObject)
    toggleFunction(false)
  };
  return (
       <Modal>
        <Card>
          <form onSubmit={onButtonHandler}>
            <ul>
              <li>
                <label htmlFor="username">Användarnamn</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  ref={usernameInputRef}
                />
              </li>
              <li>
                <label htmlFor="password">Lösenord</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  ref={passwordInputRef}
                />
              </li>
              <li>
                <button>Logga in</button>
              </li>
            </ul>
          </form>
        </Card>
      </Modal>

  );
}

export default LoginCard;
