import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import Student from "./pages/Student";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import studentData from "./data/studentData.json";

import Teacher from "./pages/Teacher";
import TeacherDetails from "./pages/TeacherDetails";
import AddTeacher from "./pages/AddTeacher";
import teacherData from "./data/teacherData.json";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/:id" element={<StudentDetails />} />
        <Route path="/addstudent" element={<AddStudent studentData={studentData} />} />

        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/:id" element={<TeacherDetails />} />
        <Route path="/addteacher" element={<AddTeacher teacherData={teacherData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;