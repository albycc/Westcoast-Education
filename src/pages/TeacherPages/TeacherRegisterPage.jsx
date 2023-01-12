import { useState, useReducer } from "react";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import config from "../../config.json";

const initialState = {
  forname: "",
  surname: "",
  socialId: "",
  email: "",
  phone: "",
  competence: "",
};

const formReducer = (state, action) => {
  if (action.type === "UPDATE") {
    return { ...state, ...action.payload };
  }

  return state;
};

function TeacherRegisterPage() {
  const [formData, setFormData] = useReducer(formReducer, initialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [modularVisible, setModularVisible] = useState(false);

  const updateValue = (event) => {
    const inputField = event.target;
    console.log("name: ", inputField.name);
    console.log("value: ", inputField.value);
    setFormData({
      type: "UPDATE",
      payload: { [inputField.name]: inputField.value },
    });
  };
  const checkValidation = () => {
    console.log(formData);
    for (let value of Object.values(formData)) {
      if (!value) {
        setButtonDisabled(true);
        return;
      }
    }
    setButtonDisabled(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    
    formData.competence = formData.competence.split(",").map((s) => s.trim());
    
    console.log(formData);

    fetch(config.serverUrl + "teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.status === 201) {
        setModularVisible(true);
      }
    });
  };
  return (
    <div>
      <form action="" onSubmit={formSubmitHandler}>
        <ul>
          <li>
            <label htmlFor="forname">Förnamn</label>
            <input
              type="text"
              name="forname"
              id="forname"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </li>
          <li>
            <label htmlFor="surname">Efternamn</label>
            <input
              type="text"
              name="surname"
              id="surname"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </li>
          <li>
            <label htmlFor="socialId">Person nummer</label>
            <input
              type="text"
              name="socialId"
              id="socialId"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </li>
          <li>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </li>
          <li>
            <label htmlFor="phone">Mobil</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </li>
          <li>
            <label htmlFor="competence">Kompetenser</label>
            <input
              type="text"
              name="competence"
              id="competence"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </li>
          <li>
            <button type="submit" disabled={buttonDisabled}>
              Registrera lärare
            </button>
          </li>
        </ul>
      </form>
      {modularVisible && (
        <ModalMessage
          messageText="Registrerat ny lärare."
          closeFunction={setModularVisible}
        />
      )}
    </div>
  );
}

export default TeacherRegisterPage;
