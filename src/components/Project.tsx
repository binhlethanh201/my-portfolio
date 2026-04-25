import React from "react";
import mock01 from '../assets/images/stonkie.png'; 
import mock02 from '../assets/images/ReFlow.png';
import mock03 from '../assets/images/shoefit.png';
// Giả sử Bảnh có 2 ảnh mobile app KickzStore ở đây, hoặc link online
import mock04_1 from '../assets/images/KS.png'; // Screenshots 1 (mobile)
import mock04_2 from '../assets/images/KS1.png'; // Screenshots 2 (mobile), tạm dùng ảnh cũ

import Chip from '@mui/material/Chip'; 
import '../assets/styles/Project.scss';

const projectsData = [
  {
    title: "Modern SaaS Dashboard",
    // Chuyển 'image' thành mảng để xử lý linh hoạt 1 hoặc nhiều ảnh
    images: [mock01], 
    github: "https://github.com/vinhlee95/stonkie_client",
    techStack: "Next.js 15 (App Router/SSR), React 19, TypeScript, Tailwind CSS, Shadcn UI, TanStack Query",
    description: "Developed a high-performance web application featuring Server-Side Rendering. Implemented complex data visualization with Chart.js and ensured strict code quality using ESLint, Husky, and lint-staged.",
    status: 'in-progress'
  },
  {
    title: "ShoeFit (AI Try-on)",
    images: [mock03],
    github: "https://github.com/binhlethanh201/ShoeFit_client",
    techStack: "React 18, Redux Toolkit, Firebase, Axios, AOS, i18next",
    description: "An interactive e-commerce platform featuring AI-powered virtual shoe try-ons. Built with a fluid UI using AOS animations, multi-language support (i18next), and dynamic analytics charts (Recharts).",
    status: 'done'
  },
  {
    title: "Reflow Marketplace",
    images: [mock02],
    github: "https://github.com/Trungnc273/WDP",
    techStack: "MERN Stack, Socket.io, Firebase, Ant Design, Recharts, node-cron",
    description: "End-to-end second-hand marketplace. Engineered a robust backend with MongoDB and JWT auth. Implemented real-time price negotiation via Socket.io, automated tasks with node-cron, and integrated Sepay payment gateway.",
    status: 'done'
  },
  {
    title: "KickzStore Mobile",
    // FLEX 2 ẢNH MOBILE CẠNH NHAU
    images: [mock04_1, mock04_2], 
    github: "https://github.com/binhlethanh201/KickzStore_flutter",
    techStack: "React Native (Expo) & Flutter (Dart), Provider/AsyncStorage",
    description: "Cross-platform mobile e-commerce application developed in two distinct iterations (Flutter and React Native). Features secure local storage, animated UI components (Reanimated/Shimmer), and deep linking for VNPAY integration.",
    status: 'done'
  },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        {/* Cho tiêu đề lướt nhẹ từ trên xuống */}
        <h1 data-aos="fade-down">Featured Projects</h1>
        <div className="projects-grid">
            
            {projectsData.map((project, index) => (
                // Ép hiệu ứng fade-up và delay so le cho từng project
                <div className="project" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                    {/* Thêm class 'mobile-layout' nếu có đúng 2 ảnh */}
                    <div className={`project-thumbnail-wrapper ${project.images.length === 2 ? 'mobile-layout' : ''}`}>
                        <a href={project.github} target="_blank" rel="noreferrer">
                            {/* Render tất cả ảnh trong mảng */}
                            {project.images.map((imgSrc, imgIndex) => (
                                <img 
                                    key={imgIndex} 
                                    src={imgSrc} 
                                    className="zoom" 
                                    alt={`thumbnail-${imgIndex}`}
                                />
                            ))}
                        </a>
                        <Chip 
                            className={`project-status-tag ${project.status}`}
                            label={project.status === 'in-progress' ? 'In Progress' : 'Done'} 
                            variant="filled"
                        />
                    </div>
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <h2>{project.title}</h2>
                    </a>
                    <p>
                        <strong>Tech Stack:</strong> {project.techStack}<br/><br/>
                        {project.description}
                    </p>
                </div>
            ))}

        </div>
    </div>
    );
}

export default Project;