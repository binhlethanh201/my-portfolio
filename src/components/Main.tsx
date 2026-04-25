import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook'; 
import EmailIcon from '@mui/icons-material/Email'; 
import '../assets/styles/Main.scss';
import avatarImg from '../assets/images/avatar.png'; 

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        {/* Ảnh đại diện: Bay từ trái sang (fade-right) */}
        <div className="image-wrapper" data-aos="fade-right" data-aos-duration="1000">
          <img src={avatarImg} alt="Avatar" /> 
        </div>
        
        {/* Nội dung chính: Bay từ phải sang (fade-left) */}
        <div className="content" data-aos="fade-left" data-aos-duration="1000">
          <div className="social_icons">
            <a href="https://github.com/binhlethanh201" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.facebook.com/ltb.201" target="_blank" rel="noreferrer"><FacebookIcon/></a>
            <a href="mailto:ltbinh04@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Binh Le Thanh</h1>
          <p>Full-stack Web & Mobile Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/binhlethanh201" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.facebook.com/ltb.201" target="_blank" rel="noreferrer"><FacebookIcon/></a>
            <a href="mailto:ltbinh04@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;