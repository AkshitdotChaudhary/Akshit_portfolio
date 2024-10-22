/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "React Shopping App with Redux",
    description:
      "Developed a responsive shopping app using React and Redux, featuring product listings, a dynamic cart, and a streamlined checkout process. Leveraged React hooks for efficient state management and created a mobile-friendly user interface for an enhanced shopping experience.",
    url: "https://github.com/AkshitdotChaudhary/react-Shopping-App-with-Redux",
  },
  {
    title: "Job Posting App",
    description:
      "Developed a Job Posting Board using Node.js, Express, and MongoDB. The app allows users to post job listings and includes automated email notifications for new job openings. Implemented authentication for secure access and built RESTful APIs to handle job-related operations efficiently. The project emphasizes performance and ease of use for both employers and job seekers.",
    url: "https://github.com/AkshitdotChaudhary/Job-posting-app",
  },
  {
    title: "Full Stack Blog App",
    description:
      "Created a full stack blog application using the MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT-based authentication. Designed RESTful APIs to handle CRUD operations for blog posts, and implemented MongoDB Atlas for secure data storage. The app provides a user-friendly interface for seamless blog management.",
    url: "https://github.com/AkshitdotChaudhary/blog",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
