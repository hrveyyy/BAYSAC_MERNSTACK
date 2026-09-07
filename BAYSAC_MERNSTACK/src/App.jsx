import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Student";
import StudentDetails from "./pages/StudentDetails";
import Navbar from "./components/Navbar";

function App(){
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/student" element={<Student/>} />
        <Route path="/studentdetails" element={<StudentDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;