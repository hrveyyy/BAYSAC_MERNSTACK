import studentData from "../data/studentData.json";
export default function AddStudent (){

    return(
        <div className=" flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Add Student</h1>    
            <form className="bg-white" onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const age = e.target.age.value;
                const sex = e.target.sex.value;
                const course = e.target.course.value;
                const newStudent = {name, age, sex, course };
                studentData.push(newStudent);
            }}>  
                <label htmlFor="name" className="p-10 m-10">Name:</label>
                <input type="text" id="name" name="name"/>
                <br />

                <label htmlFor="age" className="p-10 m-10">Age:</label>
                <input type="number" id="age" name="age"/>
                <br />

                <label htmlFor="sex" className="p-10 m-10">Sex:</label>
                <select id="sex" name="sex">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <br />

                <label htmlFor="course" className="p-10 m-10">Course:</label>
                <input type="text" id="course" name="course"/>
                <br />

                <button type="submit">Add Student</button>
            </form>

        </div>
    );
}