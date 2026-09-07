import { useParams } from "react-router-dom";
import students from "../data/students.json";

const {id} = useParams();
const student = students.find((student) => student.id === parseInt(id));

function StudentDetails(){
    return(
        <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4">
            <p className="text-xl font-semibold">{student.name}</p>
            <p className="text-gray-600 mb-1">Age: {student.age}</p>
            <p className="text-gray-600 mb-1">Course: {student.course}</p>
        </div>
    );
}
export default StudentDetails;