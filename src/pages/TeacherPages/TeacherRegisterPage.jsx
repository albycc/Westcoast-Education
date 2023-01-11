
function TeacherRegisterPage(){
    return <div>
        <form action="">
            <ul>
                <li>
                    <label htmlFor="forname">Förnamn</label>
                    <input type="text" name="forname" id="forname" />
                </li>
                <li>
                    <label htmlFor="surname">Efternamn</label>
                    <input type="text" name="surname" id="surname" />
                </li>
                <li>
                    <button type="submit">Registrera lärare</button>
                </li>
            </ul>
        </form>
    </div>
}

export default TeacherRegisterPage;