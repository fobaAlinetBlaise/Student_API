import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Course from './components/Course';
import Teachers from './components/Teachers';
import Home from './components/Home';
import Students from './components/Students';
import DetailTeacher from './components/DetailTeacher';
import DetailStudent from './components/DetailStudent';
import AddCours from './components/forms/AddCours'
import DetailCours from './components/DetailsCours';
import EditCourse from './components/forms/EditCours';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/addcourse" element={<AddCours />} />
          <Route path="/edit/:id/course" element={<EditCourse />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<DetailStudent />} />
          <Route path="/courses/:id" element={<DetailCours />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<DetailTeacher />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
