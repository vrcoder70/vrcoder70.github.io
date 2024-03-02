import React, { useState } from 'react';
import './AcademicProjects.css';

function AcademicProjects() {
  // Define project data
  const projects = [
    {  
      name: "X-Ray Pneumonia Classification",
      status: "in-progress", 
      link: "", 
      description: `I am currently engaged in an ongoing collaboration with Arizona State University's Data Science and Analytics lab on a project involving deep neural networks, Convolutional Neural Networks (CNNs), and computer vision techniques. Our aim is to classify chest X-rays into normal and pneumonia cases. In addition to implementing my own neural network from scratch, I have also employed well-known models such as ResNet and EfficientNet. Initially focused on binary classification, we are now extending our efforts to encompass multiclass classification, differentiating between viral pneumonia, bacterial pneumonia, and normal cases.`
    },
    {  
      name: "Database management and system implemenation ", 
      status: "in-progress",
      link: "", 
      description: `In my CSE 510: Database Management and System Implementation course, I am collaborating with a classmate to develop a column store database. Leveraging MiniBase as our code base, we are augmenting it with additional functionalities. Currently, we are in the second phase of the project, focusing on implementing the column store, bit manipulation, and batch query capabilities.`
    },
    {  
      name: "Multimedia Data Analysis and Feature Space Exploration", 
      status: "finished",
      link: "", 
      description: `In a team project, we utilized the Caltech101 image dataset to build a versatile database for precise image retrieval and visualization. Implementing machine learning algorithms, we developed customizable image identification programs and programmed a Support Vector Machine (SVM) and Probabilistic-based relevance feedback system. These endeavors enhanced our ability to process and analyze images efficiently, showcasing the application of machine learning in Multimedia Querying.`
    },
    { 
      name: "Elastic Fusion Cloud", 
      status: "finished",
      link: "https://github.com/vrcoder70/Cloud-Computing-Projects", 
      description: `Our team deployed a cost-efficient AWS web app for image recognition, utilizing EC2, SQS, S3, and CloudWatch. We enhanced deployment with AWS Lambda, SQS, and DynamoDB for a smart classroom assistant powered by facial recognition. Additionally, we migrated the app to a hybrid cloud, optimizing costs and enhancing cloud skills with AWS and OpenStack.`
    },
    { 
      name: "Data Fusion and Classification for Glycemic Analysis", 
      status: "finished",
      link: "https://github.com/vrcoder70/Glucose-Analysis-Meal-Detection-and-Meal-Clustering-and-Classification", 
      description: `In my project, I synchronized Insulin and CGM datasets to extract insights and distinctive features, aiming to enhance diabetes management. Leveraging supervised machine learning, I trained models to classify data based on meal and non-meal features, providing valuable insights into glucose dynamics. Additionally, I utilized clustering techniques to analyze meal data, assessing accuracy through SSE, entropy, and purity metrics, thereby facilitating more precise meal-related predictions and improving overall diabetes care.` 
    },
    { 
      name: "EmoViz: Emotion Visualization from Tweets", 
      status: "finished",
      link: "https://github.com/vrcoder70/PEARL", 
      description: `In our group project, we developed an immersive emotion inference solution for tweets, employing deep neural networks and natural language processing techniques to predict human emotions. We programmed a data pipeline to efficiently process and analyze tweet data. Utilizing D3.js, we enhanced user engagement by creating dynamic stream graphs, bubble-packing graphs, Pie charts, and scatter plots for effective emotion visualization, providing users with insightful visual analysis tools.`
    },
    { 
      name: "ChatifyPro", 
      status: "finished",
      link: "https://github.com/vrcoder70/Chat-Application", 
      description: `"ChatifyPro" is a collaborative Android Chat Application developed by Vraj, Rohan, and Brijesh during a Mobile App Development class. This feature-rich app offers account creation with unique usernames, profile picture customization, one-on-one and group chat functionalities, seamless media sharing, in-app video calls, and a news section for staying updated. Crafted using Android Studio and powered by Google Firebase for real-time database capabilities, authentication, and cloud storage, "ChatifyPro" provides a modern and user-friendly chat experience on the Android platform.` 
    },
    { 
      name: "WP Enhance: Custom Plugin & Theme Development", 
      status: "finished",
      link: "https://github.com/vrcoder70/Wordpree-Theme-Plugin", 
      description: `In my personal project, I created a dynamic WordPress Plugin with custom admin settings, meta-box integration, and versatile post-type and taxonomy management. Additionally, I designed a flexible WordPress Theme featuring modern elements like Infinite Ajax scroll and diverse media content pages, along with customized headers, footers, and sidebars, providing users with a highly customizable web experience.`
    },
    // Add more projects as needed
  ];

  // State to track whether project info is displayed
  const [projectInfoVisible, setProjectInfoVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to toggle project info visibility
  const toggleProjectInfo = (index) => {
    if (selectedProject === index) {
      setProjectInfoVisible(!projectInfoVisible);
    } else {
      setProjectInfoVisible(true);
    }
    setSelectedProject(index);
  };

  return (
    <section id="academic-projects" className="py-2">
      <div className="container">
        <h2>Academic Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div className={`project-card ${project.status === 'finished' ? 'finished' : 'in-progress'}`} onClick={() => toggleProjectInfo(index)}>
                <div className="project-info" style={{ display: projectInfoVisible && selectedProject === index ? 'block' : 'none' }}>
                  <p>{project.description}</p>
                  {
                    project.link !== "" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        View Project
                      </a>
                    )
                  }
                </div>
                <div className="project-content" style={{ display: projectInfoVisible && selectedProject === index ? 'none' : 'block' }}>
                  <h5>{project.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}

export default AcademicProjects;
