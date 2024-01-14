import React, { useState } from 'react';
import './App.css';

function App() {
  const [studentName, setStudentName] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [studentList, setStudentList] = useState([]);

  const handleAddStudent = () => {
    if (studentName && municipality) {
      setStudentList([...studentList, { studentName, municipality }]);
      setStudentName('');
      setMunicipality('');
    }
  };

  return (
    <div className="App">
      <h1>Student List</h1>

      <form>
        <label>
          Student's Name:
          <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
        </label>
        <br></br>
        <label>
          Student's Municipality:
          <input type="text" value={municipality} onChange={(e) => setMunicipality(e.target.value)} />
        </label>
        <br></br>
        <button type="button" onClick={handleAddStudent}>
          Add Student
        </button>
      </form>

      <h2>Students:</h2>
      <ul>
        {studentList.map((student, index) => (
          <li key={index}>
            {`Name: ${student.studentName};  Municipality: ${student.municipality}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;