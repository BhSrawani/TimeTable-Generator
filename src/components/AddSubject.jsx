import React from "react";

const AddSubject = () => {

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
            <label>
                Course:
            </label>
            <select>
                <option value="Course"></option>
                <option value="BSC CS">BSC CS</option>
                <option value="BCA">BCA</option>
                <option value="BTECH CS">BTECH CS</option>
                <option value="MSC CS">MSC CS</option>
                <option value="MCA">MCA</option>
                <option value="MTECH CS">MTECH CS</option>
            </select>
            <label>
                Semester:
            </label>
            <select>
                <option value="Semester"></option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
            </select>
            Subject's Name<input type="text" name="subject's name" />

            Teacher'name<input type="text" name="teacher's name" />
            <input type="submit" name="submit" />
            <address>
                <div>
                    <h3>Project Done By:</h3>
                    <h3>Bh Srawani</h3>
                    <h3>Arpita Maravi</h3>
                    <h3>Samiksha Shrivastava</h3>
                </div>
                <div>
                    <h3>Guided By:</h3>
                    <h3>Akanksha Mishra Ma'am</h3>
                </div>
            </address>
        </div>
    )
}

export default AddSubject
