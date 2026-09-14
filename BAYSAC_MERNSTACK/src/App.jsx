import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Student";
import StudentDetails from "./pages/StudentDetails";
import Navbar from "./components/Navbar";
import AddStudent from "./pages/AddStudent";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="/addstudent" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;