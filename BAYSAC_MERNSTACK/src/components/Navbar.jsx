import {Link} from "react-router-dom";
import Home from "../pages/Home";
import Student from "../pages/Student";

function Navbar(){
    return(
        <nav>
            <Link to="../pages/Home">Home</Link>
            <Link to="../pages/Student">Student</Link>
        </nav>
    );
}
export default Navbar;