import StudentData from "../data/studentData.json";
import StudentCard from "../components/studentcard";

function Student() {
    return (
        <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Student List</h1>       
            <div className="flex items-center justify-center">
                
                {StudentData.map((student) => (
                    <StudentCard
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        age={student.age}
                        course={student.course}
                    />
                ))}
            </div>
            
        </div>

    );
}

export default Student;