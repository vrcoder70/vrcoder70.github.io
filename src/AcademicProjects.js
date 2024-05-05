import React from 'react';
import './AcademicProjects.css';

function AcademicProjects() {
  // Define project data
  const projects = [
    {  
      name: "X-Ray Pneumonia Classification (Data Science/Machine Learning)",
      status: "finished", 
      link: "", 
      description: [
        'Implemented and trained deep learning models (ResNet, EfficientNet) for chest X-ray classification, achieving 96% accuracy in distinguishing normal and pneumonia cases.',
        'Extended the project towards multi-class classification, differentiating Covid vs Non-covid and Viral vs Bacterial pneumonia from normal cases.',
        'Gained expertise in computer vision techniques and deep neural network architectures for medical image analysis.'
      ]
    },
    {  
      name: "Database management and system implemenation (Software Engineering)", 
      status: "finished",
      link: "", 
      description: [
        'Collaborated on developing a column store database within the MiniBase codebase, implementing Compressed BitMap Indexes, Batch Insert, Duplicate elimination, Querying, Index Joins and Delete records functionalities',
        'Enhanced data storage and retrieval efficiency through columnar storage design, showcasing strong database management skills.',
        'Gained valuable experience working in a team environment on a software development project.'
      ]
    },
    {  
      name: "Multimedia Data Analysis and Feature Space Exploration (Software Engineering/Data Science)", 
      status: "finished",
      link: "", 
      description: [
        'Leveraged deep and machine learning algorithms to build a versatile image database for accurate image retrieval',
        'Developed customizable image identification programs and a relevance feedback system, enhancing image processing capabilities.',
        'Demonstrated proficiency in feature extraction, dimensionality reduction, and applying machine learning for multimedia querying tasks.'
      ]
    },
    { 
      name: "Cloud Computing (Software Engineering/Site Reliability Engineering)", 
      status: "finished",
      link: "https://github.com/vrcoder70/Cloud-Computing-Projects", 
      description: [
        'Deployed a cost-efficient, auto-scaling web application on AWS, utilizing EC2, SQS, S3, and CloudWatch.',
        'Integrated AWS Lambda, SQS, and DynamoDB to build a smart classroom assistant powered by facial recognition technology.',
        'Migrated the application to a hybrid cloud environment, optimizing costs and expanding cloud expertise with AWS and OpenStack.',

      ]
    },
    { 
      name: "Data Fusion and Classification for Glycemic Analysis (Data Science/Machine Learning)", 
      status: "finished",
      link: "https://github.com/vrcoder70/Glucose-Analysis-Meal-Detection-and-Meal-Clustering-and-Classification", 
      description: [
        'Synchronized and analyzed Insulin and CGM datasets, extracting features and insights relevant to diabetes management.',
        'Trained machine learning models to effectively classify data based on meal and non-meal features, providing valuable insights into blood glucose dynamics.',
        'Employed clustering techniques to analyze meal data and assess model accuracy using SSE, entropy, and purity metrics, facilitating better meal-related predictions.'
      ]
    },
    { 
      name: "EmoViz: Emotion Visualization from Tweets (Data Science)", 
      status: "finished",
      link: "https://github.com/vrcoder70/PEARL", 
      description: [
        'Developed an emotion inference solution for tweets using deep neural networks and natural language processing, enabling the prediction of human emotions from text data.',
        'Built a data pipeline to efficiently process and analyze large volumes of tweet data, showcasing data engineering skills.',
        'Created interactive visualizations using D3.js to enhance user engagement and effectively communicate emotional insights from tweets.'
      ]
    },
    { 
      name: "ChatifyPro (Software Engineering)", 
      status: "finished",
      link: "https://github.com/vrcoder70/Chat-Application", 
      description: [
        'Collaborated on building "ChatifyPro," a feature-rich Android chat application with functionalities like one-on-one and group chat, media sharing, video calls, and news feeds.',
        'Utilized Android Studio and Firebase for real-time chat functionalities, authentication, and cloud storage, demonstrating mobile app development expertise.',
        'Contributed to creating a user-friendly and feature-packed chat experience on the Android platform.'
      ]
    },
    { 
      name: "WP Enhance: Custom Plugin & Theme Development (Software Engineering)", 
      status: "finished",
      link: "https://github.com/vrcoder70/Wordpree-Theme-Plugin", 
      description: [
        'Developed a WordPress plugin with custom admin settings, meta-box integration, and flexible post-type and taxonomy management functionalities.',
        'Designed a customizable WordPress theme featuring modern elements like infinite scrolling and diverse media content pages, along with custom headers and footers.',
        'Showcased proficiency in WordPress development, creating a user-friendly and visually appealing website experience.'
      ]
    },
    // Add more projects as needed
  ];


  return (
    <section id="academic-projects" className="py-2">
      <div className="container">
        <h2>Academic Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 mb-1">
              <div className={`project-card`} style={{minHeight: '295px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                  <h5>{project.name}</h5>
                  <div className>
                    <ul>
                        {project.description.map((points, index) => (<li style={{textAlign: 'left'}} key={index}>{points}</li>))}
                    </ul>
                  </div>
                  <p style={{ marginTop: 'auto', textAlign: 'center', visibility: project.link !== "" ? 'hidden' : 'visible' }}></p>
                  {
                    project.link !== "" && (
                      <div style={{marginTop: 'auto', textAlign: 'center'}}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Project</a>
                      </div>
                    )
                  }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}

export default AcademicProjects;
