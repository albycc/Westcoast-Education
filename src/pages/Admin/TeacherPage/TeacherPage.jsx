import { useParams } from "react-router-dom"

function TeacherPage(){
    const {id} = useParams();
    return <div>
        <h1>Teacher</h1>
        <p>ID: {id}</p>
    </div>
}

export default TeacherPage;