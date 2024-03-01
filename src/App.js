// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
import Experience from './Experience';
import AcademicProjects from './AcademicProjects';
import Testimonials from './Testimonials';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <Summary />
      <Experience />
      <Education />
      <AcademicProjects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
