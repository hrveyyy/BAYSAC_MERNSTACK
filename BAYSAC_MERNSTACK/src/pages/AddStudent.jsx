
import { useState } from "react";
import studentData from "../data/studentData.json";

export default function AddStudent (){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [course, setCourse] = useState("");
    const [students, setStudents] = useState(studentData);

    return(
        <div className=" flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Add Student</h1>    
            <form className="bg-white" onSubmit={(e) => {
                e.preventDefault();
               
                const newStudent = {
                    id: students.length + 1,
                    name: name,
                    age: age,
                    sex: sex,
                    course: course
                };
                setStudents([...students, newStudent]);
                setName("");
                setAge("");
                setSex("");
                setCourse("");
            }}>
                <label htmlFor="name" className="p-10 m-10">Name:</label>
                <input type="text" id="name" name="name" value={name} required onChange={(e) => setName(e.target.value)}/>
                <br />

                <label htmlFor="age" className="p-10 m-10">Age:</label>
                <input type="number" id="age" name="age" value={age} required onChange={(e) => setAge(e.target.value)}/>
                <br />

                <label htmlFor="sex" className="p-10 m-10">Sex:</label>
                <select id="sex" name="sex" value={sex} required onChange={(e) => setSex(e.target.value)}>
                    <option value="">Select Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <br />

                <label htmlFor="course" className="p-10 m-10">Course:</label>
                <input type="text" id="course" name="course" value={course} required onChange={(e) => setCourse(e.target.value)}/>
                <br />

                <button type="submit">Add Student</button>
            </form>
            {students.map((student) => (
                <div key={student.id} className="bg-white shadow-md rounded-lg p-10 m-4">
                    <p className="text-xl font-semibold">{student.name}</p>
                    <p className="text-gray-600 mb-1">Age: {student.age}</p>
                    <p className="text-gray-600 mb-1">Sex: {student.sex}</p>
                    <p className="text-gray-600 mb-1">Course: {student.course}</p>
                </div>
            ))}
        </div>
    );
}