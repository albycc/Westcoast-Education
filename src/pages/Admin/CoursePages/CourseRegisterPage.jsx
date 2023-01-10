
function CourseRegisterPage(){
    return <div>
        <form action="">
            <ul>
                <li>
                    <label htmlFor="title">Titel</label>
                    <input type="text" name="title" id="title" />
                </li>
                <li>
                    <label htmlFor="courseId">Kurs id</label>
                    <input type="text" name="courseId" id="courseId" />
                </li>
                <li>
                    <button type="submit">Registrera kurs</button>
                </li>
            </ul>
        </form>
    </div>
}

export default CourseRegisterPage;