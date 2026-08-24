import StudentCard from "./components/studentcard.jsx";

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
    </div>
  );
}

export default App;