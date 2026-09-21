import {Link} from "react-router-dom";

function teacherCard({id, name, department}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-10 m-4">
      <p className="text-xl font-semibold">{name}</p>
      <p className="text-gray-600 mb-1">Department: {department}</p>

      <Link to={`/teacher/${id}`}> View Details </Link>
    </div>
  );
}

export default teacherCard;