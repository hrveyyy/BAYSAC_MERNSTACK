function Subject({scheduleCode, nameOfSubject, classSchedule}){
    return(
    <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4">
      <p className="text-gray-600 mb-1">Schedule Code: {scheduleCode}</p>
      <p className="text-gray-600 mb-1">Subject: {nameOfSubject}</p>
      <p className="text-gray-600 mb-1">Class Schedule: {classSchedule}</p>
    </div>
    );
}
export default Subject;