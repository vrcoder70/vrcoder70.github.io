import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:your@email.com">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
