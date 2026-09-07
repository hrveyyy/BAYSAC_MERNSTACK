import {Link} from "react-router-dom";

function StudentCard({id, name, age, course}) {
  return (
    <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4">
      <p className="text-xl font-semibold">{name}</p>
      <p className="text-gray-600 mb-1">Age: {age}</p>
      <p className="text-gray-600 mb-1">Course: {course}</p>
      <Link to={`/student/${id}`}> View Details </Link>
    </div>
  );
}

export default StudentCard;