import { useParams } from "react-router-dom";
import teacherData from "../data/teacherData.json";

function TeacherDetails() {
    const { id } = useParams();
    const teacher = teacherData.find((teacher) => teacher.id === Number(id));

    if (!teacher) {
        return <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4">Teacher not found.</div>;
    }

    return (
        <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4">
            <p className="text-xl font-semibold">{teacher.name}</p>
            <p className="text-gray-600 mb-1">Age: {teacher.age}</p>
            <p className="text-gray-600 mb-1">Employee Number: {teacher.employeeNum}</p>
            <p className="text-gray-600 mb-1">Specialization: {teacher.specialization}</p>
            <p className="text-gray-600 mb-1">Department: {teacher.department}</p>
            <p className="text-gray-600 mb-1">Sex: {teacher.sex}</p>
        </div>
    );
}

export default TeacherDetails;