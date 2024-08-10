import React from 'react';

const AcademicProjects = () => {
  
  const tableData = [
    ['Unsupervised Learning Trading Strategy ', 'Data Science', 'Implemented an unsupervised learning trading strategy using K-Means clustering and efficient frontier optimization.', 'https://github.com/vrcoder70/Quant_Project/tree/main/Unsupervised%20ML%20Strategy'],
    ['Twitter Sentiment-Based Trading Strategy', 'Data Science', 'Developed a trading strategy using Twitter sentiment data to identify high-engagement stocks.', 'https://github.com/vrcoder70/Quant_Project/tree/main/Investment%20Strategy%20Using%20Twitter%20Data'],
    ['Intraday Volatility-Based Trading Strategy', 'Data Science', 'Created an intraday trading strategy utilizing volatility predictions and technical indicators.', 'https://github.com/vrcoder70/Quant_Project/tree/main/Intraday%20Strategy'],
    ['Diversified Portfolio Strategy', 'Data Science', 'Designed a diversified portfolio strategy using a selection of low-correlation S&P 500 stocks.', 'https://github.com/vrcoder70/Quant_Project/tree/main/Quantitative%20Basic%20Strategy'],
    ['Automated Portfolio Recommendation System', 'Data Science', 'Built an automated system to recommend stock purchases based on market data.', 'https://github.com/vrcoder70/Quant_Project/tree/main/Quantitative%20Basic%20Strategy'],
    ['Momentum-Based Stock Selection Strategy', 'Data Science', 'Developed a momentum-based stock selection strategy using historical stock price data.', 'https://github.com/vrcoder70/Quant_Project/tree/main/Quantitative%20Basic%20Strategy'],
    ['Value-Based Stock Selection Strategy', 'Data Science', 'Implemented a value-based stock selection strategy using fundamental financial metrics.', 'https://github.com/vrcoder70/Quant_Project/tree/main/SMA%20Strategy'],
    ['X-Ray Pneumonia Classification', 'Data Science/Machine Learning', 'Trained deep learning models for chest X-ray classification, achieving 96% accuracy in distinguishing pneumonia cases.', ''],
    ['Data Fusion and Classification for Glycemic Analysis', 'Data Science/Machine Learning', 'Analyzed insulin and CGM data, training models to classify meal-related blood glucose dynamics.', 'https://github.com/vrcoder70/Glucose-Analysis-Meal-Detection-and-Meal-Clustering-and-Classification'],
    ['Multimedia Data Analysis and Feature Space Exploration', 'Data Science/Machine Learning ', 'Leveraged deep learning for image retrieval and developed a relevance feedback system.', ''],
    ['EmoViz: Emotion Visualization from Tweets', 'Data Science', 'Developed an emotion inference solution for tweets using deep learning and NLP, with interactive visualizations.', 'https://github.com/vrcoder70/PEARL'],
    ['Cloud Computing', 'Software Engineering/Site Reliability', 'Deployed an auto-scaling web application on AWS with smart classroom assistant features.', 'https://github.com/vrcoder70/Cloud-Computing-Projects'],
    ['Cloud Computing', 'Full Stack Development', 'A full-stack project utilizing React for frontend and AWS for server-side deployment, including Lambda and EC2.', 'https://github.com/vrcoder70/Fovus-challenge-v1'],
    ['Database Management and System Implementation', 'Software Engineering', 'Developed a column store database with features like Compressed BitMap Indexes and Querying.', 'https://github.com/vrcoder70/MiniJava-Database'],
    ['Data Structures Implemented in C++', 'Data Structures & Algorithms', 'A collection of various data structures and sorting algorithms implemented in C++.', 'https://github.com/your-username/DataStructuresInCPP'],
    ['ChatifyPro', 'Software Engineering', 'Built an Android chat application with features like media sharing and video calls.', 'https://github.com/vrcoder70/Chat-Application'],
    ['WP Enhance: Custom Plugin & Theme Development', 'Software Engineering', 'Developed a WordPress plugin and customizable theme for enhanced website experience.', 'https://github.com/vrcoder70/Wordpree-Theme-Plugin']
  ];

  return (
    <div className="container">
      <div className="row">
                <div className="col">
                    <h2 className="ml-3">Projects</h2>
                </div>
                </div>
      <div className="row"></div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Project Name</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope='col'>Link</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (

                <td key={cellIndex}>
                  {cellIndex == 3 ? (
                    <a href={cell} target="_blank" rel="noopener noreferrer">
                      Link
                    </a>
                  ) : (<p>{cell}</p>)
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcademicProjects;