import teacherData from "../data/teacherData.json";
import Teachercard from "../components/teachercard";

function Teacher() {
    return (
        <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Teacher List</h1>       
            <div className="flex items-center justify-center">


                {teacherData.map((teacher) => (
                    <Teachercard
                    key={teacher.id}    
                    id={teacher.id}
                    name={teacher.name}
                    employeeNum={teacher.employeenum}
                    specialization={teacher.specialization}
                    department={teacher.department}
                    sex={teacher.sex}
                    />
                ))} 

            {/* {teacherData.map((teacher) => (
                <div key={teacher.id} className="bg-white shadow-md rounded-lg p-10 m-4">
                    <p className="text-xl font-semibold">{teacher.name}</p>
                    <p className="text-gray-600 mb-1">Employee Number: {teacher.employeeNum}</p>
                    <p className="text-gray-600 mb-1">Specialization: {teacher.specialization}</p>
                    <p className="text-gray-600 mb-1">Department: {teacher.department}</p>
                    <p className="text-gray-600 mb-1">Sex: {teacher.sex}</p>
                </div>
            ))} */}
            </div>
            
        </div>

    );
}

export default Teacher;