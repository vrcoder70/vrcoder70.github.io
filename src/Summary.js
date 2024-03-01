import React from 'react';
import Profile from './Profile-1.jpg';
import Resume from './Resume.pdf'

function Summary() {
  return (
    <section id="section1" className="py-5">
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          <div className="col-md-4">
            <img src={Profile} alt="Your Image" className="img-fluid rounded-circle" />
          </div>
          <div className="col-md-8">
            <h2>Summary</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod lobortis orci eget gravida. Nulla facilisi. Sed nec eros vel turpis laoreet suscipit.</p>
            <h2>Goals</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod lobortis orci eget gravida. Nulla facilisi. Sed nec eros vel turpis laoreet suscipit.</p>
            <a href={Resume} download className="btn btn-primary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summary;
