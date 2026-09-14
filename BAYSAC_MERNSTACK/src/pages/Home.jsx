import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="bg-blue-50 shadow-md rounded-lg p-4 m-4 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
            <Link to="/student">Go to Student Page</Link>
        </div>
    );
}
export default Home;