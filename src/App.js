import { Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './Component/Home/About';
// import Blog from './Component/Home/Blog';
// import Home from './Component/Home/Home';
// import Skills from './Component/Home/Skills';
// import ProjectDetails from './Component/Project/ProjectDetails';
// import Works from './Component/Project/Works';
// import Contact from './Component/Shared/Contact';
import Footer from './Component/Shared/Footer';
import Navbar from './Component/Shared/Navbar';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Introducing from './Component/Page/Introducing';
import About from './Component/Page/About';
import Test from './Component/Page/Test';
import CarouselFadeExample from './Component/Page/Slider';
import Slider from './Component/Page/Slider';
import IndividualIntervalsExample from './Component/Page/Slider';
import Item from './Component/Page/Item';
import Features from './Component/Page/Features';
import Partners from './Component/Page/Partners';
import AboutUs from './Component/Page/AboutUs';


function App() {
  return (
    <div className="">
      <MessengerCustomerChat
        pageId="102758198228272"
        appId="559555832235778"
      />
      <Navbar />
      {/* <Test></Test> */}
      <Introducing></Introducing>
      <About></About>
      <Item></Item>
      <CarouselFadeExample></CarouselFadeExample>
      <Features></Features>
      {/* <Partners></Partners> */}
      <Footer />

      <Routes>

        <Route path="aboutus" element={<AboutUs></AboutUs>} />
      </Routes>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Works></Works>} />
        <Route path="project/projectDetails" element={<ProjectDetails></ProjectDetails>} />
        <Route path="/ProjectDetails" element={<ProjectDetails></ProjectDetails>} />
        <Route path='skill' element={<Skills />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes> */}

    </div>
  );
}

export default App;

// live:
// https://ilhan-khondaker.netlify.app/