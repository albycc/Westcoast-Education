import { useState, useReducer } from "react";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import config from "../../config.json";

const initialState = {
  title: "",
  courseId: "",
  length: "",
  description: "",
  startDate: "",
};

const formReducer = (state, action) => {
  if(action.type === 'UPDATE'){
    return { ...state, ...action.payload}
  }

  return state;
};

function CourseRegisterPage() {
  const [formData, setFormData] = useReducer(formReducer, initialState);
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const [modularVisible, setModularVisible] = useState(false);

  const updateValue = (event) => {
    const inputField = event.target
    console.log('name: ', inputField.name)
    console.log('value: ', inputField.value);
    setFormData({type:'UPDATE', payload:{[inputField.name]:inputField.value}})

  }
  const checkValidation = () => {
    console.log(formData)
      for (let value of Object.values(formData)) {
      if (!value) {
        setButtonDisabled(true)
        return;
      }
    }
    setButtonDisabled(false)

  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formData)

    // //check object for empty values
    // for (let [key, value] of Object.entries(courseObject)) {
    //   if (!value) {
    //     alert(`Empty fields: ${key}`);
    //     return;
    //   }
    // }

    try {
      fetch(config.serverUrl + "courses", {
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
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={formSubmitHandler}>
        <ul>
          <li>
            <label htmlFor="title">Titel</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </li>
          <li>
            <label htmlFor="courseId">Kurs id</label>
            <input
              type="text"
              name="courseId"
              id="courseId"
              onChange={updateValue}
              onBlur={checkValidation}
              
            />
          </li>
          <li>
            <label htmlFor="length">Längd</label>
            <input
              type="number"
              name="length"
              id="length"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </li>
          <li>
            <label htmlFor="description">Beskrivning</label>
            <textarea
              type="number"
              name="description"
              id="description"
              onChange={updateValue}
              onBlur={checkValidation}
            ></textarea>
          </li>
          <li>
            <label htmlFor="startDate">Start datum</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </li>
          <li>
            <button type="submit" disabled={buttonDisabled}>Registrera kurs</button>
          </li>
        </ul>
      </form>
      {modularVisible && (
        <ModalMessage
          messageText="Registrerat ny kurs!"
          closeFunction={setModularVisible}
        />
      )}
    </div>
  );
}

export default CourseRegisterPage;
