import {Link} from "react-router-dom";

function StudentCard({id, name, age, course}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-10 m-4">
      <p className="text-xl font-semibold">{name}</p>
      <p className="text-gray-600 mb-1">Age: {age}</p>

      <Link to={`/student/${id}`}> View Details </Link>
    </div>
  );
}

export default StudentCard;