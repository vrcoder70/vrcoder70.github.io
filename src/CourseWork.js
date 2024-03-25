import React from 'react';
import './Skills.css';

const Courses = () => {
    // Define your skills here
    const courses = [
        'CSE 510: Database Mgmt Sys Implementn',
        'CSE 512: Distributed Database Systems',
        'CSE 515: Multimedia and Web Databases',
        'CSE 546: Cloud Computing', 
        'CSE 551: Foundations of Algorithms',
        'CSE 572: Data Mining', 
        'CSE 573: Semantic Web Mining',
        'CSE 575: Statistical Machine Learning',
        'CSE 578: Data Visualization', 
        'CSE 598: Topic: Computing for Data-Driven Optimization',
        'Software Engineering',
        'Object Oriented Programming',
        'Data Structure',
        'Design and Analysis of Algorithms',
        'Operating Systems',
        'Database Management System',
        'GUI and JAVA',
        'Mobile Application Development',
        'Web Technology',
        'Client Server Architecture',
        'Network Security',
        'Computer Network',
        'Computer Graphics',
        '.Net Technologies',
        'Translator Design',
        'Advanced Microprocessor',
        'Parallel Processing',
        'Computer Subsystems and Architecture',
        'Structured Programming & Unix'
    ];

    return (
        <section id="courses" className="py-2">
            <div className="container">
                <h2>Course Work</h2>
                <div className="skills d-flex" style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                {courses.map((course, index) => (
                    <div key={index} className="skill">{course}</div>
                ))}
                </div>
            </div>
        </section>
        
    );
}

export default Courses;
