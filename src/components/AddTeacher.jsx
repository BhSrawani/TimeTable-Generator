import React from "react";

const AddTeacher = () => {
    return (
        <div>
            <nav>
                <ul>
                    <a href="timetable.html"><img src="./KALINGA LOGO.png" alt="" /></a>
                    <div>
                        <li><a href="add teacher.html">Add Teacher</a><br></br></li>
                        <li><a href="add course.html">Add Course</a><br></br></li>
                        <li><a href="add subject.html">Add Subject</a><br></br></li>
                        <li><a href="generate timetable.html">Generate Timetable</a></li>
                    </div>
                </ul>
            </nav>

            <form>

                <h2>Name: <input type="text" name="teacher's name" /></h2>
                <label>
                    Designation:
                </label>
                <option value="Designation"></option>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Professor">Professor</option>

                Specialization:<input type="text" name="subject" />
                <input type="submit" name="submit" />


                <address>
                    <div >
                        <h3>Project Done By BSC CS 4th Sem Students:</h3>
                        <h3>Bh Srawani</h3>
                        <h3>Arpita Maravi</h3>
                        <h3>Samiksha Shrivastava</h3>
                    </div>

                    <div>
                        <h3>Guided By:</h3>
                        <h3>Mrs. Akanksha Mishra, AP, Kalinga University</h3>
                    </div>
                </address>
            </form>
        </div>
    )

}
export default AddTeacher