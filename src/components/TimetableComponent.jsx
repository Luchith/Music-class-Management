import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const TimetableComponent = () => {
  // Dummy data for timetable
  const timetableData = [
    { time: '8:00 AM', monday: { subject: 'Piano', teacher: 'Ranuki Sansala' }, tuesday: { subject: 'Piano', teacher: 'Ranuki Sansala' }, wednesday: { subject: 'Piano', teacher: 'Ranuki Sansala' }, },
    { time: '10:00 AM', monday: { subject: 'Guitar', teacher: 'Malan Samuel' }, tuesday: { subject: 'Guitar', teacher: 'Malan Samuel' }, wednesday: { subject: 'Guitar', teacher: 'Malan Samuel' } },
    { time: '12:30 PM', monday: { subject: 'Flute', teacher: 'Luchith Dilpahan' }, tuesday: { subject: 'Flute', teacher: 'Luchith Dilpahan' }, wednesday: { subject: 'Flute', teacher: 'Luchith Dilpahan' } },
    { time: '02:00 PM', monday: { subject: 'Drums', teacher: 'Saniru Michel' }, tuesday: { subject: 'Drums', teacher: 'Saniru Michel' }, wednesday: { subject: 'Drums', teacher: 'Saniru Michel' } },
    { time: '04:00 PM', monday: { subject: 'Western', teacher: 'Jane Smith' }, tuesday: { subject: 'Western', teacher: 'Alice Johnson' }, wednesday: { subject: 'Western', teacher: 'John Doe' } },
    { time: '06:00 PM', monday: { subject: 'Eastern', teacher: 'Saman Kumara' }, tuesday: { subject: 'Eastern', teacher: 'Saman Kumara' }, wednesday: { subject: 'Eastern', teacher: 'Saman Kumara' } },
   
    // Add more rows as needed
  ];

  function downloadTimetablePDF() {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Time', 'Monday', 'Tuesday', 'Wednesday', 'Teacher']], // Table headers
      body: timetableData.map(row => [row.time, row.monday.subject, row.tuesday.subject, row.wednesday.subject, row.monday.teacher]), // Table data
    });
    doc.save('music_class_timetable.pdf');
  }

  return (
    <div className='timetable-container'>
      <h2 className='timetable'>Music Class Timetable</h2>
      <button className='btn btn-success mb-2' onClick={downloadTimetablePDF}
      style={{ marginLeft: '10px',
      color:'black',
      fontWeight:600, 
      backgroundColor: '#c8a7f9',
      }}>
        Download pdf
      </button>
      <table className='tabletime'>
        <thead>
          <tr className='tablehead'>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Teacher</th> {/* New column for Teacher */}
            {/* Add more days as needed */}
          </tr>
        </thead>
        <tbody className='bodytimetable'>
          {timetableData.map((row, index) => (
            <tr key={index} className='bodytimetable'>
              <td>{row.time}</td>
              <td>{row.monday.subject}</td>
              <td>{row.tuesday.subject}</td>
              <td>{row.wednesday.subject}</td>
              <td>{row.monday.teacher}</td> {/* Display teacher for Monday */}
              {/* Add more cells for additional days */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableComponent;
