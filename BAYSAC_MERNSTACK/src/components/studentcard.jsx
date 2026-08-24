function StudentCard({name, age, bday, studentNum, course}) {
  return (
    <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4">
      <p className="text-xl font-semibold">{name}</p>
      <p className="text-gray-600 mb-1">Age: {age}</p>
      <p className="text-gray-600 mb-1">Birthday: {bday}</p>
      <p className="text-gray-600 mb-1">Student Number: {studentNum}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default StudentCard;