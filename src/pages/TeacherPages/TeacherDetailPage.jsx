import { useParams } from "react-router-dom"
import useHttpGetData from "../../hooks/use-http-get-data";

function TeacherDetailPage(){
    const {id} = useParams();
    const teacher = useHttpGetData("teachers", id);
    return <div>
        {teacher && <>
        <h1>{teacher.firstname + " " + teacher.surname}</h1>
        <p>Personnr: {teacher.socialId}</p>
        <p>Email: {teacher.email}</p>
        <p>Mobil: {teacher.phone}</p>
        <p>Kompetens: {teacher.competence}</p>
        
        </>}
    </div>
}

export default TeacherDetailPage;