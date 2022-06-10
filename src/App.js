import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/Home/About';
import Blog from './Component/Home/Blog';
import Home from './Component/Home/Home';
import Skills from './Component/Home/Skills';
import ProjectDetails from './Component/Project/ProjectDetails';
import Works from './Component/Project/Works';
import Footer from './Component/Shared/Footer';
import Navbar from './Component/Shared/Navbar';

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Works></Works>} />
        <Route path="project/projectDetails" element={<ProjectDetails></ProjectDetails>} />
        <Route path="/ProjectDetails" element={<ProjectDetails></ProjectDetails>} />
        <Route path='skill' element={<Skills />}></Route>
        <Route path='blog' element={<Blog />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
