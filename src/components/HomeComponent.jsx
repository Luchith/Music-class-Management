import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../components/bg1.jpg'; 
import image2 from '../components/bg2.jpg';
import image3 from '../components/bg3.jpg';
import image4 from '../components/bg4.jpg';
import image5 from '../components/bg5.jpg';

import avatar1 from '../components/avatar1.jpg'; 
import avatar2 from '../components/avatar2.jpg';

export const HomeComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
 
  return (
    <div className='homebody'>
      <h1 className='greet'>Welcome to Musical Minds Academy</h1>
      <div className='pginhome'>
      <p
        className={isHovered ? 'hovered' : ''}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Explore our website to discover a world of possibilities in music education. Whether you're a beginner looking  to start your musical<br /> 
        journey or an experienced musician aiming to refine your skills,Musical Minds Academy offers a wide range of courses and offerings<br />
        tailored to your needs.From instrument lessons to musical theory workshops ,from ensemble performances to personalized coaching <br />
        we provide comprehensive learning experiences designed to inspire and empower our students.<br />
      </p>
      </div>

      <div className="slider-container">
        <Slider {...sliderSettings}>
          <div>
            <img src={image1} alt="Slide 1" className="slider-image" />
          </div>
          <div>
            <img src={image2} alt="Slide 2" className="slider-image" />
          </div>
          <div>
            <img src={image3} alt="Slide 3" className="slider-image" />
          </div>
          <div>
            <img src={image4} alt="Slide 3" className="slider-image" />
          </div>
          <div>
            <img src={image5} alt="Slide 3" className="slider-image" />
          </div>
        </Slider>
      </div>
      <div className='ptest'>
      <p1>Testimonials for Musical Minds Academy glow with praises, reflecting <br/>
          the growth students experience through personalized instruction,<br/>
          fostering creativity and musical excellence..</p1>
        </div>
      <div className="testimonial-section">
        
        <div className="testimonial">
          <div className="testimonial-content">
            <img src={avatar1} alt="Avatar 1" className="avatar" />
            <p>"Musical Minds Academy has truly transformed my approach to music. The instructors are knowledgeable and supportive, and the lessons are engaging and inspiring. I highly recommend it to anyone passionate about music."</p>
          </div>
          <p className="testimonial-author"> John Doe</p>
        </div>
        <div className="testimonial">
          <div className="testimonial-content">
            <img src={avatar2} alt="Avatar 2" className="avatar" />
            <p>"I've been a student at Musical Minds Academy for over a year now, and I couldn't be happier with my progress. The personalized coaching has helped me overcome many challenges, and I've grown as a musician in ways I never imagined."</p>
          </div>
          <p className="testimonial-author"> Jane Smith</p>
        </div>
      </div>
    </div>
    
  );
};

