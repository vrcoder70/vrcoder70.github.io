import React from 'react';
import ASU from './ASU.jpg';
import MSU from './MSU.png';
import ASUTranscript from './Vraj Rana-Arizona State University-Transcript.pdf';
import MSUTracscript from './Vraj Rana-The Maharaja Sayajirao University of Baroda-Transcript.pdf';

function Education() {
    const degrees = [
        {
            degreeName: "Master of Science in Computer Science",
            universityName: "Arizona State University",
            gpa: "3.7",
            startDate: "August 2022",
            endDate: "May 2024",
            transcript : ASUTranscript,
            image: ASU
        },
        {
            degreeName: "Bachelor of Engineering in Computer Science",
            universityName: "The Maharaja Sayajirao University of Baroda",
            gpa: "3.8",
            startDate: "July 2017",
            endDate: "May 2021",
            transcript: MSUTracscript,
            image: MSU
        }
    ];

    return (
        <section id="education" >
            <div className="container" style={{marginTop:'25px'}}>
                <div className="row">
                <div className="col">
                    <h2 className="ml-3">Education</h2>
                </div>
                </div>
                <div className="row">
                {degrees.map((degree, index) => (
                    
                        <div className="col-md-6 mb-4">
                            <div className="mb-4"
                                style={{ backgroundImage: `url(${degree.image})`, 
                                backgroundPosition: 'center', 
                                backgroundSize: 'cover', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'flex-end', 
                                height: '300px', 
                                // width: '650px' 
                                }}
                            >
                            <div className="content" style={{ color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                <h4 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{degree.degreeName}</h4>
                                <h5 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{degree.universityName}</h5>
                                <h5 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>GPA: {degree.gpa} </h5>
                                <h6 style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>{degree.startDate} - {degree.endDate}</h6>
                                <a href={degree.transcript} download className="btn btn-secondary">Transcript</a>
                            </div>
                            </div>
                        </div>
                    
                ))}
                </div>
            </div>
        </section>

    );
}

export default Education;
