import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';



function Testimonials() {
  // Define testimonies data
  const testimonies = [
    { name: "Vraj", relationship: "Supervisor", image: "vraj.jpg", testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget justo sed turpis consequat consectetur." },
    { name: "John", relationship: "Friend", image: "john.jpg", testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget justo sed turpis consequat consectetur." },
    { name: "Jane", relationship: "Colleague", image: "jane.jpg", testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget justo sed turpis consequat consectetur." },
  ];

  // State to track current testimony index
  const [index, setIndex] = useState(0);

  // Function to handle next testimonial
  const handleNext = () => {
    if (index === testimonies.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  // Function to handle previous testimonial
  const handlePrev = () => {
    if (index === 0) {
      setIndex(testimonies.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    // <section id="testimonials" className="py-5">
    //   <div className="container">
    //     {/* <h2>Testimonials</h2> */}
    //     <Carousel activeIndex={index} onSelect={() => {}}>
    //       {testimonies.map((testimony, idx) => (
    //         <Carousel.Item key={idx}>
    //           <div className="row align-items-center">

    //             <div className="col-md-4">
    //               <img src={testimony.image} alt={testimony.name} className="img-fluid rounded-circle" />
    //             </div>
    //             <div className="col-md-8">
    //               <h3>{testimony.name}</h3>
    //               <p>{testimony.relationship}</p>
    //               <p>{testimony.testimony}</p>
    //             </div>
    //           </div>
    //         </Carousel.Item>
    //       ))}
    //     </Carousel>
    //     <div className="text-center mt-3">
    //         <button className="btn btn-primary mr-2" onClick={handlePrev}>
    //             {'<'} {/* Previous symbol */}
    //         </button>
    //         <button className="btn btn-primary" onClick={handleNext}>
    //             {'>'} {/* Next symbol */}
    //         </button>
    //     </div>
       
    //   </div>

      
    // </section>

    <section id="testimonials" className="py-5">
      <div className="container">
        <Carousel activeIndex={index} onSelect={() => {}}>
          {testimonies.map((testimony, idx) => (
            <Carousel.Item key={idx}>
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img src={testimony.image} alt={testimony.name} className="d-block w-100 rounded-circle" />
                </div>
                <div className="col-md-8">
                  <h5>{testimony.name}</h5>
                  <p>{testimony.relationship}</p>
                  <p>{testimony.testimony}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="text-center mt-3">
            <button className="btn btn-primary mr-2" onClick={handlePrev}>
                {'<'} {/* Previous symbol */}
            </button>
            <button className="btn btn-primary" onClick={handleNext}>
                {'>'} {/* Next symbol */}
            </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
