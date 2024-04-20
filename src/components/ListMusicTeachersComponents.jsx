import React, { useState, useEffect } from 'react';
import { deleteEmployee, listTeachers } from '../services/TeacherService';
import { useNavigate } from 'react-router-dom';
import img1 from '../components/music2.jpg';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ListMusicTeachersComponents = () => {
  const [employees, setEmployees] = useState([]); // Array to store teacher data
  const navigator = useNavigate(); // Hook for navigation

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listTeachers()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewTeacher() {
    navigator('/add-teacher'); // Redirect to add teacher page
  }

  function updateEmployee(id) {
    navigator(`/edit-teacher/${id}`);
  }

  function removeEmployee(id) {
    const confirmed = window.confirm("Are you sure you want to delete this teacher?");
    if (confirmed) {
      deleteEmployee(id)
        .then((response) => {
          getAllEmployees();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function downloadPDF() {
    const doc = new jsPDF();
    doc.autoTable({ html: '#teacher-table', excludeColumns: [5] }); // Exclude actions column
    doc.save('music_teachers.pdf');
  }

  return (
    <div className='bodyof'>
      <div className='container-table'>
        <h2 className='text-center'>List of Music Class Teachers</h2>
        <button className='btn btn-primary mb-2'
          style={{
            backgroundColor: '#9D73DC',
            color: 'black',
            fontWeight: 600,
            padding: '5px 10px',
            position: 'absolute',
            left: '20px',
          }}
          onClick={addNewTeacher}
        >
          Add Teacher
        </button>
       
        <table className='table table-bordered table-hover table-light' id="teacher-table">
          <thead className='table-dark'>
            <tr>
              <th>Music Teacher Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Subject Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='tablebody-light'>

            {employees.map((mscteacher) => (
              <tr key={mscteacher.id}>
                <td>{mscteacher.id}</td>
                <td>{mscteacher.firstName}</td>
                <td>{mscteacher.lastName}</td>
                <td>{mscteacher.email}</td>
                <td>{mscteacher.subjectName}</td>
                <td>
                  <button className='btn btn-default'
                    style={{
                      backgroundColor: '#9D73DC',
                      color: 'black',
                      fontWeight: 600,
                    }}
                    onClick={() => updateEmployee(mscteacher.id)}>
                    Update
                  </button>
                  <button className='btn btn-danger' onClick={() => removeEmployee(mscteacher.id)}
                    style={{ marginLeft: '10px' }}>
                    Delete
                  </button>
                  <button className='btn btn-success' onClick={downloadPDF}
                    style={{ marginLeft: '10px',
                    color:'black',
                    fontWeight:600, 
                    backgroundColor: '#9D73DC',
                    }}>
                    Download 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <img src={img1} alt="Right Image" className='imgmusic1'></img>
      </div>
    </div>
  );
};

export default ListMusicTeachersComponents;
