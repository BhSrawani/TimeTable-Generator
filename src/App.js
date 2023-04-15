import './App.css';
// import{ BrowserRouter as Router, Route, Routes } from "reactrouterdom";
import TimeTable from './components/timetable';
import AddCourse from './components/AddCourse';
import AddSubject from './components/AddSubject';
import AddTeacher from './AddTeacher';
import GenerateTimeTable from './components/GenerateTimeTable';
import ExportTimeTable from './components/ExportTimeTable';


function App() {
  return (
    <div className="App">
      {/* <Router>

      </Router> */}

      <ExportTimeTable/>
    </div>
  )
}

export default App;
