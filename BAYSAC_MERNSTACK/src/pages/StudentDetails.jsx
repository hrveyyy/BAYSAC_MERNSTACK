import { useParams } from "react-router-dom";
import StudentData from "../data/studentData.json";

function StudentDetails() {
    const { id } = useParams();
    const student = StudentData.find((student) => student.id === Number(id));

    if (!student) {
        return <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4">Student not found.</div>;
    }

    return (
        <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4">
            <p className="text-xl font-semibold">{student.name}</p>
            <p className="text-gray-600 mb-1">Age: {student.age}</p>
            <p className="text-gray-600 mb-1">Course: {student.course}</p>
        </div>
    );
}

export default StudentDetails;