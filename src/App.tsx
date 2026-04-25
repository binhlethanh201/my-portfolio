import React, {useState, useEffect} from "react";
import {
  Main,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

// Gọi "linh hồn" AOS vào đây
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        // Kích hoạt ma thuật cuộn AOS
        AOS.init({
            duration: 800, // Thời gian chuyển động mượt mà (0.8s)
            once: true,    // Chỉ chạy 1 lần khi cuộn xuống (đỡ bị chóng mặt)
            offset: 100,   // Cách màn hình 100px thì bắt đầu bay ra
        });
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        {/* Vẫn giữ FadeIn để hiệu ứng load web ban đầu thật "soft" */}
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;