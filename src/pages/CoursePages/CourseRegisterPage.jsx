import { useState, useReducer, useEffect } from "react";
import Form from "../../components/Form/Form";
import FormItem from "../../components/Form/FormItem";
import ModalMessage from "../../components/ModalMessage/ModalMessage";
import Section from "../../components/Section/Section";
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

  useEffect(() => {
    for (let value of Object.values(formData)) {
      if (!value) {
        setButtonDisabled(true);
        return;
      }
    }
    setButtonDisabled(false);
  }, [formData]);

  const updateValue = (event) => {
    const inputField = event.target;
    setFormData({
      type: "UPDATE",
      payload: { [inputField.name]: inputField.value },
    });
  };

  const formSubmitHandler = () => {
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
      console.console(error);
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
          <input type="text" name="title" id="title" onChange={updateValue} />
        </FormItem>
        <FormItem>
          <label htmlFor="courseId">Kurs id</label>
          <input
            type="text"
            name="courseId"
            id="courseId"
            onChange={updateValue}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="length">L??ngd</label>
          <input
            type="number"
            name="length"
            id="length"
            onChange={updateValue}
          />
        </FormItem>
        <FormItem>
          <label htmlFor="category">Kategori</label>
          <select
            name="category"
            id="category"
            onChange={updateValue}
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              V??lj categori
            </option>
            <option value="programming">Programmering</option>
            <option value="analytics">Analys</option>
            <option value="project-management">Projektledning</option>
            <option value="network">N??tverk</option>
            <option value="design">Design</option>
          </select>
        </FormItem>
        <FormItem>
          <label htmlFor="description">Beskrivning</label>
          <textarea
            type="number"
            name="description"
            id="description"
            onChange={updateValue}
          ></textarea>
        </FormItem>
        <FormItem>
          <label htmlFor="startDate">Start datum</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            onChange={updateValue}
          />
        </FormItem>
        <FormItem>
          <button type="submit" disabled={buttonDisabled}>
            Registrera kurs
          </button>
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
