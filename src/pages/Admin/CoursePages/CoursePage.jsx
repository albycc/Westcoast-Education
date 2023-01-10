import { Link, useParams } from "react-router-dom";

function CoursePage(){
    const {id} = useParams();
    return <div>
        <h1>Course name</h1>
        <p>ID: {id}</p>
    </div>
}

export default CoursePage;