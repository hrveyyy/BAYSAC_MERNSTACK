import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddTeacher({ teacherData }){

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [employeeNum, setEmployeeNum] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [department, setDepartment] = useState("");
    const [sex, setSex] = useState("");

    return(
        <div className=" flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Add Teacher</h1>    
            <form className="bg-white" onSubmit={(e) => {
                e.preventDefault();
                
                const newTeacher = {
                    id: teacherData.length + 1,
                    name: name,
                    employeeNum: employeeNum,
                    specialization: specialization,
                    department: department,
                    sex: sex
                };
                teacherData.push(newTeacher);
                setName("");
                setEmployeeNum("");
                setSpecialization("");
                setDepartment("");
                setSex("");

                navigate("/teacher");
            }}>
                <label htmlFor="name" className="p-10 m-10">Name:</label>
                <input type="text" id="name" name="name" value={name} required onChange={(e) => setName(e.target.value)}/>
                <br />

                <label htmlFor="employeeNum" className="p-10 m-10">Employee Number:</label>
                <input type="text" id="employeeNum" name="employeeNum" value={employeeNum} required onChange={(e) => setEmployeeNum(e.target.value)}/>
                <br />

                <label htmlFor="specialization" className="p-10 m-10">Specialization:</label>
                <select id="specialization" name="specialization" value={specialization} required onChange={(e) => setSpecialization(e.target.value)}>
                    <option value="">Select Specialization</option>
                    <option value="programming">Programming</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="ui/ux">UI/UX</option>
                </select>
                <br />

                <label htmlFor="department" className="p-10 m-10">Department:</label>
                <select id="department" name="department" value={department} required onChange={(e) => setDepartment(e.target.value)}>
                    <option value="">Select Department</option>
                    <option value="dit">DIT</option>
                    <option value="bfc">BFC</option>
                </select>
                <br />

                <label htmlFor="sex" className="p-10 m-10">Sex:</label>
                <select id="sex" name="sex" value={sex} required onChange={(e) => setSex(e.target.value)}>
                    <option value="">Select Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <br />

                <button type="submit">Add Teacher</button>
            </form>
        </div>
    );
}