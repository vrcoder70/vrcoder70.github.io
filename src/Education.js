import React from 'react';

function Education() {
    const mastersDegree = {
        degreeName: "Master of Science in Computer Science",
        universityName: "Arizona State University",
        gpa: "3.7",
        startDate: "August 2022",
        endDate: "May 2024"
    };
    
      const bachelorsDegree = {
        degreeName: "Bachelor of Engineering in Computer Science",
        universityName: " The Maharaja Sayajirao University of Baroda",
        gpa: "3.8",
        startDate: "July 2017",
        endDate: "May 2021"
    };

    return (
        <section id="section2" className="py-5">
        <div className="container">
            <div className="row">
            <div className="col">
                <h2 className="ml-3">Education</h2>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6">
                <div className="mb-4">
                <div>
                    <h4>{mastersDegree.degreeName}</h4>
                    <h5>{mastersDegree.universityName}</h5>
                    <h5>GPA: {mastersDegree.gpa}</h5>
                    <h6>{mastersDegree.startDate} - {mastersDegree.endDate}</h6>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-4">
                <div>
                    <h4>{bachelorsDegree.degreeName}</h4>
                    <h5>{bachelorsDegree.universityName}</h5>
                    <h5>GPA: {bachelorsDegree.gpa}</h5>
                    <h6>{bachelorsDegree.startDate} - {bachelorsDegree.endDate}</h6>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

    );
}

export default Education;
