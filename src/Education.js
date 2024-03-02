import React from 'react';
import ASU from './ASU.jpg';
import MSU from './MSU.png';
import ASUTranscript from './Vraj Rana ASU Transcript.pdf';
import MSUTracscript from './Vraj Rana MSU Transcript.pdf';

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
        <section id="education" >
        <div className="container">
            <div className="row">
            <div className="col">
                <h2 className="ml-3">Education</h2>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6">
                <div className="mb-4"
                    style={{ backgroundImage: `url(${ASU})`, 
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-end', 
                    height: '300px', 
                    width: '650px' 
                    }}
                >
                <div className="content" style={{ color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <h4 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{mastersDegree.degreeName}</h4>
                    <h5 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{mastersDegree.universityName}</h5>
                    <h5 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>GPA: {mastersDegree.gpa} </h5>
                    <h6 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{mastersDegree.startDate} - {mastersDegree.endDate}</h6>
                    <a href={ASUTranscript} download className="btn btn-secondary">Transcript</a>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-4"
                    style={{ backgroundImage: `url(${MSU})`, 
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-end', 
                    height: '300px', 
                    width: '650px' 
                    }}
                >
                <div className="content" style={{ color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <h4 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{bachelorsDegree.degreeName}</h4>
                    <h5 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{bachelorsDegree.universityName}</h5>
                    <h5 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>GPA: {bachelorsDegree.gpa}</h5>
                    <h6 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{bachelorsDegree.startDate} - {bachelorsDegree.endDate}</h6>
                    <a href={MSUTracscript} download className="btn btn-secondary">Transcript</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

    );
}

export default Education;
