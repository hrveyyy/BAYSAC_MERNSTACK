import Students from "../data/students.json";
import StudentCard from "../components/studentcard";

function Student(){
    return(
        <div>
        {Students.map((student) => (
        <Link to={'/student/${student.id}'} key={student.id}>
           <StudentCard
                key={student.id}
                name={student.name}
                age={student.age}
                course={student.course}/>
        </Link>
     ))}
     </div>
    );
}
export default Student;