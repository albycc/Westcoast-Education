import { useRef } from "react";
import config from "../../config.json"

function TeacherRegisterPage(){
    const fornameInputRef = useRef();
    const surnameInputRef = useRef();
    const socialIdInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef()
    const competenceInputRef = useRef()

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const competenceList = competenceInputRef.current.value.split(',').map(s => s.trim())

        const teacherObject = {
            forname: fornameInputRef.current.value,
            surname: surnameInputRef.current.value,
            socialId: socialIdInputRef.current.value,
            email: emailInputRef.current.value,
            phone: phoneInputRef.current.value,
            competence: competenceList
        }

        console.log(teacherObject)

        fetch(config.serverUrl + 'teachers', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teacherObject)
        })
        .then(response => console.log(response))

    }
    return <div>
        <form action="" onSubmit={formSubmitHandler}>
            <ul>
                <li>
                    <label htmlFor="forname">Förnamn</label>
                    <input type="text" name="forname" id="forname" ref={fornameInputRef}/>
                </li>
                <li>
                    <label htmlFor="surname">Efternamn</label>
                    <input type="text" name="surname" id="surname" ref={surnameInputRef}/>
                </li>
                <li>
                    <label htmlFor="socialId">Person nummer</label>
                    <input type="text" name="socialId" id="socialId" ref={socialIdInputRef}/>
                </li>
                <li>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" ref={emailInputRef}/>
                </li>
                <li>
                    <label htmlFor="phone">Mobil</label>
                    <input type="tel" name="phone" id="phone" ref={phoneInputRef}/>
                </li>
                <li>
                    <label htmlFor="competence">Kompetenser</label>
                    <input type="text" name="competence" id="competence" ref={competenceInputRef} />
                </li>
                <li>
                    <button type="submit">Registrera lärare</button>
                </li>
            </ul>
        </form>
    </div>
}

export default TeacherRegisterPage;