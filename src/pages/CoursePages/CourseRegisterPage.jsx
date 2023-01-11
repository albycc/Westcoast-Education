import { useRef } from "react";
import config from "../../config.json"

function CourseRegisterPage() {
  const titleInputRef = useRef();
  const courseIdInputRef = useRef();
  const lengthInputRef = useRef();
  const descriptionInputRef = useRef();
  const startDateInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault()
    const courseObject = {
      courseId: courseIdInputRef.current.value,
      title: titleInputRef.current.value,
      length: +lengthInputRef.current.value,
      description: descriptionInputRef.current.value,
      startDate: startDateInputRef.current.value,
    };

    console.log(courseObject)

    try{
        fetch(config.serverUrl + "courses", {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(courseObject)
        }).then(response => console.log(response))

    }
    catch(error){
        console.error(error)
    }
  };
  return (
    <div>
      <form action="" onSubmit={formSubmitHandler}>
        <ul>
          <li>
            <label htmlFor="title">Titel</label>
            <input type="text" name="title" id="title" ref={titleInputRef} />
          </li>
          <li>
            <label htmlFor="courseId">Kurs id</label>
            <input
              type="text"
              name="courseId"
              id="courseId"
              ref={courseIdInputRef}
            />
          </li>
          <li>
            <label htmlFor="length">Längd</label>
            <input
              type="number"
              name="length"
              id="length"
              ref={lengthInputRef}
            />
          </li>
          <li>
            <label htmlFor="description">Beskrivning</label>
            <textarea
              type="number"
              name="description"
              id="description"
              ref={descriptionInputRef}
            ></textarea>
          </li>
          <li>
            <label htmlFor="startDate">Start datum</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              ref={startDateInputRef}
            />
          </li>
          <li>
            <button type="submit">Registrera kurs</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default CourseRegisterPage;
