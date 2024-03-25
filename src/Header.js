import React from 'react';

function Header() {

  const links = [
    {
      name : 'Introduction',
      id : '#summary'
    },
    {
      name : 'Professional Experience',
      id : '#experience'
    },
    {
      name : 'Skills',
      id : '#Skills'
    },
    {
      name : 'Education',
      id : '#education'
    },
    {
      name : 'Academic Projects',
      id : '#academic-projects'
    },
    {
      name : 'Course work',
      id : '#courses'
    },
    {
      name : 'Publication',
      id : '#Publication'
    },
    {
      name : 'Poster Presentation',
      id : '#Poster'
    },
    {
      name : 'Certifications',
      id : '#Certification'
    },
    {
      name : 'Contact',
      id : '#footer'
    },
  ]

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Vraj Rana</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {links.map((link,index) => (
              <li className="nav-item">
                <a className="nav-link" href={link.id}>{link.name}</a>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
