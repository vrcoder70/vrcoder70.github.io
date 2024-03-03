import React from 'react';

function Footer() {
  return (
    <footer className="text-center bg-body-tertiary" id='footer'>
      <div className="container">
        <section className="mb-4 d-flex justify-content-center align-items-center">
          <a
            href="mailto:vrana7@asu.edu"
            className="btn btn-link btn-floating btn-lg text-body m-1"
            role="button"
            target="_blank" rel="noopener noreferrer"
            data-mdb-ripple-color="dark"
          ><i className="fas fa-envelope"></i></a>
          <a
            href="https://www.linkedin.com/in/vrcoder70/"
            className="btn btn-link btn-floating btn-lg text-body m-1"
            role="button"
            target="_blank" rel="noopener noreferrer"
            data-mdb-ripple-color="dark"
          ><i className="fab fa-linkedin"></i></a>
          <a
            href="https://github.com/vrcoder70"
            className="btn btn-link btn-floating btn-lg text-body m-1"
            role="button"
            target="_blank" rel="noopener noreferrer"
            data-mdb-ripple-color="dark"
          ><i className="fab fa-github"></i></a>
          <p className="text-body m-1">Phone: +1 602-910-9891</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
