import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import InnerHero from '../Commen/InnerHero';
import Footer from '../Commen/Footer';
import InternalHeader from "../Commen/InternalHeader"
import './Projects.css';

const moreProjects = [
  {
    id: 9,
    title: 'Todo-List App',
    description: 'A modern, interactive To-Do List web application built with React and Vite.',
    innerDescription: 'A modern, interactive To-Do List web application built with React and Vite. This app allows users to efficiently manage their tasks with intuitive features and a responsive design. Whether for personal use or team collaboration, the application provides a seamless experience for adding, editing, deleting, and categorizing tasks.',
    image: './images/no-image-icon.png',
    details: 'Built using ReactJs with Vite.',
  },
  {
    id: 8,
    title: 'Medical Dashboard',
    description: 'A comprehensive medical web application designed to provide users with personalized health and wellness information.',
    innerDescription: "A comprehensive medical web application designed to provide users with personalized health and wellness information. The app allows users to track their symptoms, manage medical appointments, and store essential health data in one place. With an intuitive interface and secure data handling, this app aims to help users stay on top of their health and medical needs.",
    image: './images/no-image-icon.png',
    details: 'Built using Next.js with TailwindCSS.',
  },
  {
    id: 7,
    title: 'Weather App',
    description: 'A sleek, real-time weather forecast web application built with React and integrated with a weather API.',
    innerDescription: "A sleek, real-time weather forecast web application built with React and integrated with a weather API. The app provides users with up-to-date weather information, including temperature, humidity, wind speed, and more, for any city around the world. It offers a user-friendly interface with an intuitive search bar, allowing users to easily get current and forecasted weather data.",
    image: './images/no-image-icon.png',
    details: 'Built using Next.js with TailwindCSS.',
  },
  {
    id: 6,
    title: 'BARKA',
    description: 'A platform offering personalized services and digital solutions.',
    innerDescription: 'Developed a modern and responsive website for Barka, a platform offering personalized services and digital solutions. Built using WordPress, I focused on creating a seamless, user-friendly experience with a custom theme, optimized for performance and speed. The site includes smooth animations, intuitive navigation, and a strong emphasis on visual storytelling, providing a captivating digital experience.',
    image: `${process.env.PUBLIC_URL}/images/baraka.PNG`,
    hmoeImage: `${process.env.PUBLIC_URL}/images/baraka-home.PNG`,
    details: 'Developed using Wordpress / Custom theme',
    link: "https://barka.me/"
  },
  {
    id: 5,
    title: 'AFSIA',
    description: 'A company specializing in solar energy solutions.',
    innerDescription: "Developed a clean and professional website for Afsia Solar, a company specializing in solar energy solutions. The site, built with WordPress, focuses on presenting the company's products and services in an easy-to-navigate and visually engaging way. I contributed to designing a user-friendly layout, ensuring fast load times, and optimizing the site for mobile responsiveness. The website integrates clear calls-to-action, service details, and contact information, helping customers learn about solar solutions effortlessly.",
    image: "./images/afsia.PNG",
    hmoeImage: `${process.env.PUBLIC_URL}/images/afsia-home.jpg`,
    details: 'Developed using Wordpress / Custom theme',
    link: "https://www.afsiasolar.com/"
  },
  {
    id: 4,
    title: 'Bconnection Information Technology llc.',
    description: 'A platform connecting businesses with clients',
    innerDescription: "Developed a sleek, modern, and fully responsive website for Bconnection, a platform connecting businesses with clients. Built with HTML and CSS, I focused on creating a clean, minimalist design with a strong emphasis on user experience and mobile responsiveness. The site features smooth animations, intuitive navigation, and a clear structure to present services and contact information effectively.",
    image: './images/bconnection.PNG',
    hmoeImage: `${process.env.PUBLIC_URL}/images/bconnection-home.PNG`,
    details: 'Built with HTML,jQuery and CSS with responsive layout (static).',
    link: "https://bconnection.me/"
  },
  {
    id: 3,
    title: 'UAE Fablab',
    description: 'A platform dedicated to promoting innovation and creativity through advanced fabrication tools and technologies.',
    innerDescription: "Designed and developed the website for FabLab UAE, a platform dedicated to promoting innovation and creativity through advanced fabrication tools and technologies. Built with Liferay CMS, I focused on delivering a visually appealing, user-friendly experience with a clean design and smooth navigation. The site is fully responsive, ensuring optimal performance across all devices, and showcases the various services, workshops, and projects that FabLab UAE offers to its community.",
    image: './images/fablab.PNG',
    hmoeImage: `${process.env.PUBLIC_URL}/images/fablab-home.PNG`,
    details: 'Built with Liferay (JAVA CMS).',
  },
  {
    id: 2,
    title: 'Hamdan Bin Rashed Al Maktoum Award.',
    description: 'A leading company in providing high-quality services and solutions.',
    innerDescription: "Developed the official website for HA UAE, a leading company in providing high-quality services and solutions. Built using Liferay, the website features a modern, clean, and responsive design aimed at showcasing the company's services, projects, and expertise. The focus was on creating an intuitive layout with easy navigation, enhancing user experience, and ensuring mobile optimization for seamless access on any device.",
    image: './images/hamdan.PNG',
    hmoeImage: `${process.env.PUBLIC_URL}/images/hamdan-home.PNG`,
    details: 'Built with Liferay (JAVA CMS).',
  },
  {
    id: 1,
    title: 'Car Wise',
    description: "Sell A Car in Dubai Effectively. The website features a user-friendly interface, making it easy for customers to book services, view pricing, and track their car's maintenance history.",
    innerDescription: "Developed the Carwise UAE website using the Yii Framework, a powerful PHP framework, to create a fast and scalable platform for car repair and maintenance services. I worked on customizing the backend, ensuring smooth integration with various service management tools and optimizing the site for performance. The website features a user-friendly interface, making it easy for customers to book services, view pricing, and track their car's maintenance history. The site is fully responsive, providing a seamless experience across all devices.",
    image: './images/carwise.PNG',
    hmoeImage: `${process.env.PUBLIC_URL}/images/carwise-home.PNG`,
    details: 'Built Using PHP / YII2',
  }
];

const MoreProjects = () => {
  const navigate = useNavigate();
  const handleCardClick = (project) => {
    navigate(`/project/${project.id}`, { state: project });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);


  return (
    <>
      <InternalHeader />
      <InnerHero />
      <div className="projects-container">

        <div className="project-group">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >Projects I Contributed To</motion.h3>
          <div className="project-cards project-cards-contributed">
            <div className="card card-contributed">
              <img src="./images/smartwellbeing.png" alt="Wellbeing Quiz" />
              <div className="card-body">
                <h4>Wellbeing Quiz – Medicus</h4>
                <p>
                  "Wellbeing Quiz for Medicus" is a smart wellbeing assessment tool designed to evaluate both physical and mental health.
                  It’s part of the Smart Wellbeing platform by Medicus AI. The quiz provides users with a personalized score and training programs
                  tailored to their wellness profile.

                </p>
                <p><strong>Tasks:</strong></p>
                <ul>
                  <li>Designed and implemented interactive UI using React.js and CSS/SCSS.</li>
                  <li>Integrated a multidimensional quiz to assess mental and physical aspects.</li>
                  <li>Analyzed quiz results and generated personalized lifestyle, nutrition, and fitness recommendations.</li>
                  <li>Created dynamic content and engaging animations to enhance user experience.</li>
                  <li>Collaborated with UX/UI team to optimize the user flow.</li>
                </ul>
                <p><strong>Technologies Used:</strong></p>
                <ul>
                  <li>React.js</li>
                  <li>CSS/SCSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>


            <div className="card card-contributed">
              <img src="./images/smart-reports.png" alt="Smart Reports" />
              <div className="card-body">
                <h4>Smart Reports – Medicus</h4>
                <p>
                  Interactive lab reports that transform complex medical data into easy-to-understand visuals.
                  I participated in developing key UI components and enhancing the responsiveness of the front-end.
                </p>
                <p><strong>Technologies Used:</strong></p>
                <ul>
                  <li>React.js</li>
                  <li>Meteor.js</li>
                  <li>CSS/SCSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>


          </div>
        </div>



        <div className="project-group">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >Projects I Developed</motion.h3>
          <div className="project-cards fixed-layout">
            {moreProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => handleCardClick(project)}
                style={{ cursor: 'pointer' }}
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="card-body">
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-description">{project.description}
                    <br />
                    <i>{project.details}</i>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="back-to-home">
          <a href="/" className="btn-back">← Back to Home</a>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default MoreProjects;