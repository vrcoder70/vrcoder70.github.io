// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
import Experience from './Experience';
import AcademicProjects from './AcademicProjects';
// import Testimonials from './Testimonials';
import Footer from './Footer';
import Skills from './Skills';
import HonorsAndActivities from './HonorsAndActivities';
import Courses from './CourseWork';
// import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-section">
        <Summary />
        <Experience />
        <Skills />
        <Education />
        <AcademicProjects />
        <Courses />
        <HonorsAndActivities />
        {/* <ContactForm /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
