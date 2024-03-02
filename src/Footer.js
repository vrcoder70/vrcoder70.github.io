import React from 'react';

function Footer() {
  return (
    <footer className="text-center bg-body-tertiary" id='footer'>
      <div className="container">
        <section className="mb-4">
          <a
            href="mailto:vrajrana70@gmail.com"
            className="btn btn-link btn-floating btn-lg text-body m-1"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fas fa-envelope"></i></a>
          <a
            href="https://www.linkedin.com/in/vrcoder70/"
            className="btn btn-link btn-floating btn-lg text-body m-1"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab fa-linkedin"></i></a>
          <a
            href="https://github.com/vrcoder70"
            className="btn btn-link btn-floating btn-lg text-body m-1"
            role="button"
            data-mdb-ripple-color="dark"
          ><i className="fab fa-github"></i></a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
