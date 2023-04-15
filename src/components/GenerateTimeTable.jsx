import React from "react";

const GenerateTimeTable = () => {

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
            <input type="text" placeholder="Course Name" name="course's name" />
            <input type="text" placeholder="Course Code" name="course's code" />
            <input type="number" placeholder="Semester" name="semester" max="10" min="1" />
            <input type="text" placeholder="Subject 1" name="subject 1" />
            <input type="text" placeholder="Subject 2" name="subject 2" />
            <input type="text" placeholder="Subject 3" name="subject 3" />
            <input type="text" placeholder="Subject 4" name="subject 4" />
            <input type="submit" name="enter" />
            <a href="Export timetable.html"><span>Export timetable</span></a>
            <address>
                <div>
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
        </div>
    )
}
export default GenerateTimeTable