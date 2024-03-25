import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Vraj Rana</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#summary">Introduction</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Professional Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#courses">Course work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#academic-projects">Academic Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#honors-and-activities">Honors And Activities</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#testimonials">Testimonials</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#footer">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
