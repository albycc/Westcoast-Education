import { useState, useReducer } from "react";
import Form from "../../components/Form/Form";
import FormItem from "../../components/Form/FormItem";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Section from "../../components/Section/Section";
import Button from "../../components/UI/Button/Button";
import config from "../../config.json";

const initialState = {
  title: "",
  courseId: "",
  length: 0,
  category: "",
  description: "",
  startDate: "",
};

const formReducer = (state, action) => {
  console.log("formReducer: ", action);
  if (action.type === "UPDATE") {
    const { payload } = action;

    if (payload.length) {
      payload.length = +payload.length;
    }

    return { ...state, ...payload };
  }

  return state;
};

function CourseRegisterPage() {
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
  const checkValidation = (event) => {
    console.log("checkvalidation: ", event.target.required);
    console.log(formData);
    for (let value of Object.values(formData)) {
      if (!value) {
        setButtonDisabled(true);
        return;
      }
    }
    setButtonDisabled(false);
  };

  const formSubmitHandler = () => {
    console.log("formData: ", formData);


    //check object for empty values
    for (let [key, value] of Object.entries(formData)) {
      if (!value) {
        alert(`Empty fields: ${key}`);
        return;
      }
    }

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
    <>
    <Section>
      <h1>Ny kurs</h1>
    </Section>
      <Form onSubmitFunction={formSubmitHandler}>
          <FormItem>
            <label htmlFor="title">Titel</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="courseId">Kurs id</label>
            <input
              type="text"
              name="courseId"
              id="courseId"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="length">Längd</label>
            <input
              type="number"
              name="length"
              id="length"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="category">Kategori</label>
            <select
              name="category"
              id="category"
              onChange={updateValue}
              onBlur={checkValidation}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Välj categori
              </option>
              {config.coursesCategories.slice(1).map((category) => (
                <option key={category.value} value={category.value}>
                  {category.title}
                </option>
              ))}
            </select>
          </FormItem>
          <FormItem>
            <label htmlFor="description">Beskrivning</label>
            <textarea
              type="number"
              name="description"
              id="description"
              onChange={updateValue}
              onBlur={checkValidation}
            ></textarea>
          </FormItem>
          <FormItem>
            <label htmlFor="startDate">Start datum</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              onChange={updateValue}
              onBlur={checkValidation}
            />
          </FormItem>
          <FormItem>
            <Button type="submit" disabled={buttonDisabled} label="Registrera kurs" background="blue"/>
          </FormItem>
      </Form>
      {modularVisible && (
        <ModalMessage
          messageText="Registrerat ny kurs!"
          closeFunction={setModularVisible}
        />
      )}
    </>
  );
}

export default CourseRegisterPage;
