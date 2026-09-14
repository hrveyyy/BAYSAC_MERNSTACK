import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 text-white flex space-x-4 font-size-2xl">
            <Link to="/">Home</Link>
            <Link to="/student">Student</Link>
        </nav>
    );
}

export default Navbar;