import React from "react";

const ExportTimeTable = () => {

    return (
        <div>
            <nav>
                <ul>
                    <a href="timetable.html"><img src="./KALINGA LOGO.png" alt="" /></a>
                    <div>
                        <li><a href="add teacher.html">Add Teacher</a></li>
                        <li><a href="add course.html">Add Course</a></li>
                        <li><a href="add subject.html">Add Subject</a></li>
                        <li><a href="generate timetable.html">Generate Timetable</a></li>
                    </div>
                </ul>
            </nav>



            <table border="5" cellspacing="0" align="center">
                <h1>TIME TABLE</h1>
                <tr>
                    <td align="center" height="50" width="100">
                        <b>Day/Period</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>9:00-9:55</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>9:55-10:45</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>10:45-11:35</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>11:35-12:25</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>12:25-1:15</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>1:15-2:05</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>2:05-2:55</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>2:55-3:45</b>
                    </td>
                </tr>
                <tr>
                    <td align="center" height="50"><b>Monday</b></td>
                    <td align="center" height="50">C++</td>
                    <td align="center" height="50">JAVA</td>
                    <td align="center" height="50">HTML</td>
                    <td rowspan="6" align="center" height="50"><span>L  U  N  C  H</span></td>
                    <td colspan="3" align="center" height="50">LAB JAVA</td>
                    <td align="center" height="50">PYTHON</td>
                </tr>
                <tr>
                    <td align="center" height="50"><b>Tuesday</b></td>
                    <td colspan="3" align="center" height="50">SEMINAR</td>
                    <td align="center" height="50">C++</td>
                    <td align="center" height="50">JAVA</td>
                    <td align="center" height="50">HTML</td>
                    <td align="center" height="50">SPORTS</td>
                </tr>
                <tr>
                    <td align="center" height="50"><b>Wednesday</b></td>
                    <td align="center" height="50">JAVA</td>
                    <td align="center" height="50">C++</td>
                    <td align="center" height="50">HTML</td>
                    <td align="center" height="50">PYTHON</td>
                    <td colspan="3" align="center" height="50">LAB C++
                    </td>
                </tr>
                <tr>
                    <td align="center" height="50"><b>Thursday</b></td>
                    <td align="center" height="50">HTML</td>
                    <td align="center" height="50">C++</td>
                    <td align="center" height="50">PYTHON</td>
                    <td colspan="3" align="center" height="50">LAB PYTHON</td>
                    <td align="center" height="50">JAVA</td>
                </tr>
                <tr>
                    <td align="center" height="50"><b>Friday</b></td>
                    <td colspan="3" align="center" height="50">LAB HTML</td>
                    <td align="center" height="50">JAVA</td>
                    <td align="center" height="50">C++</td>
                    <td align="center" height="50">HTML</td>
                    <td align="center" height="50">PYTHON</td>
                </tr>
                <tr>
                    <td align="center" height="50"><b>Saturday</b></td>
                    <td align="center" height="50">C++</td>
                    <td align="center" height="50">JAVA</td>
                    <td align="center" height="50">PYTHON</td>
                    <td colspan="3" align="center" height="50">SEMINAR</td>
                    <td align="center" height="50">LAB JAVA</td>
                </tr>
            </table>



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

export default ExportTimeTable