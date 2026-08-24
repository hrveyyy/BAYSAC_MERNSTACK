import StudentCard from "./components/studentcard.jsx";
import Subject from "./components/subject.jsx";

function App() {
  return (
    <div className="App">
      <StudentCard 
      name="John Yevs Bryan Suico" 
      age={20} 
      bday="2006-09-15" 
      studentNum="202404436" 
      course="Information Technology" />

      <StudentCard 
      name="Charlito Jr. C. Nodalo" 
      age={23} 
      bday="2003-08-22" 
      studentNum="202400926" 
      course="Information Technology" />

      <Subject
      scheduleCode="DCIT 26"
      nameOfSubject="APPLICATION DEVELOPMENT"
      classSchedule="202612867" />
    </div>
  );
}

export default App;