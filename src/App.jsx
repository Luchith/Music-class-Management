import './App.css';
import { FooterComponents } from './components/FooterComponents';
import { HeaderComponent } from './components/HeaderComponent';
import ListMusicTeachersComponents from './components/ListMusicTeachersComponents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeacherComponent from './components/TeacherComponent';
import { HomeComponent } from './components/HomeComponent';
import TimetableComponent from './components/TimetableComponent'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/Home' element={<HomeComponent />} />
          <Route path='/teacher' element={<ListMusicTeachersComponents />} />
          <Route path='/Timetable' element={<TimetableComponent />} /> {/* TimetableComponent without curly braces */}
          <Route path='/employees' element={<ListMusicTeachersComponents />} />
          <Route path='/add-teacher' element={<TeacherComponent />} />
          <Route path='edit-teacher/:id' element={<TeacherComponent />} />
        </Routes>
        <FooterComponents />
      </BrowserRouter>
    </>
  );
}

export default App;
