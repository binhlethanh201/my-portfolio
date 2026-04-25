import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Nhóm 1: Dàn Frontend cực kỳ trendy và tối ưu
const labelsFirst = [
    "Next.js 15 (App Router/SSR)",
    "React 19",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Radix UI",
    "TanStack Query",
    "Chart.js"
];

// Nhóm 2: Backend, Database và Hệ thống hạ tầng
const labelsSecond = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "SQL Server",
    "Docker",
    "VPS",
    "CI/CD",
    "Microservices"
];

// Nhóm 3: Nền tảng cốt lõi, Mobile và Quy chuẩn Code
const labelsThird = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "React Native",
    "Flutter",
    "Java",
    "C",
    "ESLint / Husky",
    "Git"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            {/* Cho cái tiêu đề bay nhẹ xuống */}
            <h1 data-aos="fade-down">Expertise</h1> 
            
            <div className="skills-grid">
                
                {/* Cột 1: Frontend - Bay lên ngay lập tức */}
                <div className="skill" data-aos="fade-up">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Modern Frontend Ecosystem</h3>
                    <p>Building highly optimized, accessible, and fast web applications. Proficient in Server-Side Rendering (SSR) with Next.js 15, utility-first styling with Tailwind CSS, and crafting robust UI systems using Shadcn and Radix UI. Managing complex server states seamlessly with TanStack Query.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Cột 2: Backend & DB - Đợi 200ms rồi bay lên */}
                <div className="skill" data-aos="fade-up" data-aos-delay="200">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Backend & Database Architecture</h3>
                    <p>Designing scalable backend architectures and RESTful APIs using Node.js and Express. Versatile in database modeling across both NoSQL (MongoDB) and relational systems (MySQL, SQL Server). Passionate about DevOps, Docker deployment, and microservices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Cột 3: Core CS & Mobile - Đợi 400ms rồi bay lên */}
                <div className="skill" data-aos="fade-up" data-aos-delay="400">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Core CS, Mobile & Code Quality</h3>
                    <p>Strong foundation in Computer Science principles, including DSA and OOP using Java and C. Expanding reach to cross-platform mobile development with React Native and Flutter. Committed to maintaining high code quality standards utilizing ESLint, Husky, and lint-staged.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;