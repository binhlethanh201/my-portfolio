import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook'; 
import EmailIcon from '@mui/icons-material/Email'; // Gọi icon Email vào đội hình
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/binhlethanh201" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.facebook.com/ltb.201" target="_blank" rel="noreferrer"><FacebookIcon/></a>
        <a href="mailto:ltbinh04@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>Customized & developed by <a href="https://github.com/binhlethanh201" target="_blank" rel="noreferrer">LTB</a> with 💻 and ☕</p>
    </footer>
  );
}

export default Footer;