import { useState, useReducer, useEffect } from "react";
import Form from "../../components/Form/Form";
import FormItem from "../../components/Form/FormItem";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import config from "../../config.json";

const initialState = {
  firstname: "",
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

  useEffect(() => {
    for (let value of Object.values(formData)) {
      if (!value) {
        setButtonDisabled(true);
        return;
      }
    }
    setButtonDisabled(false);
  }, [formData])

  const updateValue = (event) => {
    const inputField = event.target;
    setFormData({
      type: "UPDATE",
      payload: { [inputField.name]: inputField.value },
    });
  };

  const formSubmitHandler = () => {
    formData.competence = formData.competence.split(",").map((s) => s.trim());

    try{
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

    } catch(error){
      console.log(error)
    }
  };
  return (
    <>
      <Form onSubmitFunction={formSubmitHandler}>
        <FormItem>
          <label htmlFor="firstname">Förnamn</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={updateValue}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="surname">Efternamn</label>
          <input
            type="text"
            name="surname"
            id="surname"
            onChange={updateValue}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="socialId">Person nummer</label>
          <input
            type="text"
            name="socialId"
            id="socialId"
            onChange={updateValue}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={updateValue}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="phone">Mobil</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={updateValue}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="competence">Kompetenser</label>
          <input
            type="text"
            name="competence"
            id="competence"
            onChange={updateValue}
          />
        </FormItem>
        <FormItem>
          <button type="submit" disabled={buttonDisabled}>
            Registrera lärare
          </button>
        </FormItem>
      </Form>
      {modularVisible && (
        <ModalMessage
          messageText="Registrerat ny lärare."
          closeFunction={setModularVisible}
        />
      )}
    </>
  );
}

export default TeacherRegisterPage;
