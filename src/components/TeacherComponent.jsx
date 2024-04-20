import React, { useEffect, useState } from 'react';
import { createTeacher, getEmployee, updateEmployee } from '../services/TeacherService';
import { useNavigate, useParams } from 'react-router-dom';

const TeacherComponent = () => {
   const { id } = useParams();
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [subjectName, setSubjectName] = useState('');
   const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      email: '',
      subjectName: ''
   });
   const navigate = useNavigate();

   useEffect(() =>{
      if(id){
         getEmployee(id).then((response) =>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setSubjectName(response.data.subjectName);
         }).catch(error =>{
            console.error(error);
         })
      }
   }, [id]);

   function saveOrUpdateEmployee(e) {
      e.preventDefault();
      if (validateForm()) {
         const teacher = { firstName, lastName, email, subjectName };
         if(id){
            updateEmployee(id , teacher).then((response) =>{
               console.log(response.data);
               navigate('/employees');
            }).catch(error =>{
               console.error(error);
            })
         } else {
            createTeacher(teacher)
            .then((response) => {
               console.log(response.data);
               navigate('/employees');
            }).catch(error =>{
               console.error(error);
            })
         }
      }
   }

   function validateForm() {
      let valid = true;
      const errorsCopy = { ...errors };

      if (!firstName.trim()) {
         errorsCopy.firstName = 'First Name is required';
         valid = false;
      } else {
         errorsCopy.firstName = '';
      }

      if (!lastName.trim()) {
         errorsCopy.lastName = 'Last Name is required';
         valid = false;
      } else {
         errorsCopy.lastName = '';
      }

      if (!email.trim()) {
         errorsCopy.email = 'Email is required';
         valid = false;
      } else {
         errorsCopy.email = '';
      }

      if (!subjectName.trim()) {
         errorsCopy.subjectName = 'Subject Name is required';
         valid = false;
      } else {
         errorsCopy.subjectName = '';
      }

      setErrors(errorsCopy);
      return valid;
   }

   function pageTitle() {
      return (
         <h2 className='text-center'>
            {id ? 'Update Teacher' : 'Add Teacher'}
         </h2>
      );
   }

   return (
      <div className='body'>
         <div className='container'> 
            <br /> <br />
            <div className='row'>
               <div className='card col-md-6 offset-md-3 offset-md-3'
                  style={{
                     backgroundColor: 'rgb(223, 180, 255)',
                     boxShadow: '2px 4px 8px rgba(3, 4, 20, 0.8)', 
                     height:'600px',
                     marginTop:'30px',
                     marginBottom:'30px', // Adjusted marginBottom value
                  }}>
                  {pageTitle()}
                  <div className='card-body'>
                     <form className='form'>
                        <div className='form-group mb-2'>
                           <label className='form-label'>First Name:</label>
                           <input
                              type='text'
                              placeholder='Enter Music Teacher First Name'
                              name='firstName'
                              value={firstName}
                              className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                              onChange={(e) => setFirstName(e.target.value)}
                           />
                           {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                           <label className='form-label'>Last Name:</label>
                           <input
                              type='text'
                              placeholder='Enter Music Teacher Last Name'
                              name='lastName'
                              value={lastName}
                              className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                              onChange={(e) => setLastName(e.target.value)}
                           />
                           {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                           <label className='form-label'>Email:</label>
                           <input
                              type='email'
                              placeholder='Enter Music Teacher Email'
                              name='email'
                              value={email}
                              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                              onChange={(e) => setEmail(e.target.value)}
                           />
                           {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <div className='form-group mb-2'>
                           <label className='form-label'>Subject Name:</label>
                           <input
                              type='text'
                              placeholder='Enter Subject Name'
                              name='subjectName'
                              value={subjectName}
                              className={`form-control ${errors.subjectName ? 'is-invalid' : ''}`}
                              onChange={(e) => setSubjectName(e.target.value)}
                           />
                           {errors.subjectName && <div className='invalid-feedback'>{errors.subjectName}</div>}
                        </div>
                        <button
                           className='btn btn-success'
                           style={{ backgroundColor: '#9D73DC', color:'black', fontWeight:600 }}
                           onClick={saveOrUpdateEmployee}
                        >
                           Submit
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TeacherComponent;
