import React from "react";

const AddCourse = () => {

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
            </select><br />
            <label>
                Teacher's Name:
            </label>
            <select>
                <option value="Semester"></option>
                <option value="Dr Asha Ambhikar">Dr Asha Ambhikar</option>
                <option value="Akanksha Mishra">Akanksha Mishra</option>
                <option value="Shilpi Chaubey">Shilpi Chaubey</option>
                <option value="Pawan Kumar Jaiswal">Pawan Kumar Jaiswal</option>
                <option value="Proshanta Sarkar">Proshanta Sarkar</option>
                <option value="Om Prakash Dewangan">Om Prakash Dewangan</option>
                <option value="Kamlesh Sahu">Kamlesh Sahu</option>
                <option value="Taruna Chopra">Taruna Chopra</option>
                <option value="Kirti Nahak">Kirti Nahak</option>
            </select>
            <button>Submit</button>

            <address>
                <div >
                    <h3>Project Done By BSC CS 4th Sem Students:</h3>
                    <h3>Bh Srawani</h3>
                    <h3>Arpita Maravi</h3>
                    <h3>Samiksha Shrivastava</h3>
                </div>

                <div >
                    <h3>Guided By:</h3>
                    <h3>Mrs. Akanksha Mishra, AP, Kalinga University </h3>
                </div>
            </address>
        </div>
    )
}
export default AddCourse