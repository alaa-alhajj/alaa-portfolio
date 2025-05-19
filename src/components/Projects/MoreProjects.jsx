import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import InnerHero from '../Commen/InnerHero';
import Footer from '../Commen/Footer';
import InternalHeader from "../Commen/InternalHeader"
import './Projects.css';
import { projects } from "./MyProjects"


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
              <div className='card-img'>
                <img src="./images/smartwellbeing.png" alt="Wellbeing Quiz" />
              </div>
              <div className="card-body">
                <h4>Wellbeing Quiz – Medicus</h4>
                <p>
                  <strong>"Wellbeing Quiz for Medicus"</strong> is a smart wellbeing assessment tool designed to evaluate both physical and mental health.
                  It’s part of the Smart Wellbeing platform by Medicus AI. The quiz provides users with a personalized score and training programs
                  tailored to their wellness profile.

                </p>
                <p><strong>Key Features:</strong></p>
                <ul>
                  <li><strong>Dynamic Questionnaire Engine:</strong> Supports multiple question types (checkboxes, mood sliders, multiple answers, free text, etc.).</li>
                  <li><strong>Conditional Logic:</strong> Questions adapt dynamically based on user input.</li>
                  <li><strong>Personalized Health Report:</strong> At the end of the quiz, users receive a custom report with health insights and tips calculated based on their answers.</li>
                  <li><strong>Backend Integration:</strong> Insights and tips are generated using calculated results from a backend logic engine.</li>
                  <li>Collaborated with UX/UI team to optimize the user flow.</li>
                </ul>
                <p><strong>My Role:</strong><br />
                  Implemented the dynamic quiz interface, handled conditional rendering based on user input, and integrated the results screen with backend-generated insights.
                </p>

                {/* Technologies Badges */}
                <div style={{ marginTop: '20px' }}>
                  <strong>🛠 Technologies Used:</strong>
                  <div className="technologies-container">
                    <span className="tech-badge">React.js</span>
                    <span className="tech-badge">CSS Modules</span>
                    <span className="tech-badge">Context API</span>
                    <span className="tech-badge">chartjs</span>
                    <span className="tech-badge">Meteor.js</span>
                    <span className="tech-badge">React Router</span>
                    <span className="tech-badge">i18n</span>
                    <span className="tech-badge">React Testing Library</span>
                  </div>
                </div>

              </div>
            </div>


            <div className="card card-contributed">
              <div className='card-img'>
                <img src="./images/smart-reports.png" alt="Smart Reports" />
              </div>
              <div className="card-body">
                <h4>Smart Reports – Medicus</h4>
                <p>
                  <storng>"White-label Medical Dashboard for Labs and Clinics"</storng> Interactive lab reports that transform complex medical data into easy-to-understand visuals.
                  I participated in developing key UI components and enhancing the responsiveness of the front-end.
                </p>
                <p><strong>Key Features I worked on:</strong></p>
                <ul>
                  <li><strong>Patient Lab Reports:</strong> Dynamic display of lab results with visual explanations and health insights.</li>
                  <li><strong>Actionable Biomarker Alerts:</strong> Highlights values requiring medical attention with personalized tips.</li>
                  <li><strong>Doctor Appointment Booking:</strong> Patients can log in and schedule doctor visits based on real-time availability.</li>
                  <li><strong>GDPR Compliance:</strong> Full data privacy handling with role-based access for doctors, lab staff, and patients.</li>
                  <li>Collaborated with UX/UI team to optimize the user flow.</li>
                </ul>

                <p><strong>My Role:</strong><br />
                  Worked on front-end development, UI implementation, and integration of health insights logic based on lab values.
                </p>
                {/* Technologies Badges */}
                <div style={{ marginTop: '20px' }}>
                  <strong>🛠 Technologies Used:</strong>
                  <div className="technologies-container">
                    <span className="tech-badge">React.js</span>
                    <span className="tech-badge">CSS Modules</span>
                    <span className="tech-badge">Context API</span>
                    <span className="tech-badge">chartjs</span>
                    <span className="tech-badge">Meteor.js</span>
                    <span className="tech-badge">React Router</span>
                    <span className="tech-badge">JWT</span>
                    <span className="tech-badge">i18n</span>
                    <span className="tech-badge">React Testing Library</span>
                  </div>
                </div>

              </div>
            </div>


            <div className="card card-contributed">
              <div className='card-img'>
                <img src="./images/pdf.png" alt="Smart Reports" />
              </div>
              <div className="card-body">
                <h4>PDF Report Generator Microservice</h4>
                <p>
                  <storng>"Dynamic Medical Report Builder using PHP & wkhtmltopdf"</storng> A backend microservice that generates printable patient reports in PDF format, based on biomarker results and personalized health tips.
                </p>
                <p><strong>Key Features I worked on:</strong></p>
                <ul>
                  <li><strong>Input:</strong> Receives structured JSON data from the main application (patient info, biomarker results, insights, and tips).</li>
                  <li><strong>PDF Generation:</strong> Uses wkhtmltopdf to convert HTML templates into styled medical reports.</li>
                  <li><strong>Dynamic Charts:</strong> Includes visual comparisons of old vs. new biomarker values using embedded charts.</li>
                  <li><strong>Personalized Content:</strong> Displays patient-specific recommendations and insights generated based on health indicators.</li>
                </ul>

                <p><strong>My Role:</strong><br />
                  Built the microservice in PHP, designed the dynamic report template, integrated with the charting logic, and ensured accurate rendering of complex health data into PDF format.
                </p>
                {/* Technologies Badges */}
                <div style={{ marginTop: '20px' }}>
                  <strong>🛠 Technologies Used:</strong>
                  <div className="technologies-container">
                    <span className="tech-badge">PHP</span>
                    <span className="tech-badge">wkhtmltopdf</span>
                    <span className="tech-badge">CSS</span>
                    <span className="tech-badge">JSON</span>
                    <span className="tech-badge">Chart.js</span>
                  </div>
                </div>

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
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => handleCardClick(project)}
                style={{ cursor: 'pointer', position: 'relative' }}
              >
                {/* Live Sticker */}
                {project.link && (
                  <span className="live-badge">Live</span>
                )}

                <img src={project.image} alt={project.title} className="project-image" />
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Technologies Badges */}
                <div className="technologies-container">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-badge" key={i}>{tech}</span>
                  ))}
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