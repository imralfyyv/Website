"use client";

import Aurora from "@/components/Aurora"; 
import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiCisco, SiTypescript, SiPython, SiFigma, SiLinux, SiDocker, SiGithub, SiCplusplus} from 'react-icons/si';

export default function Home() {
  // Move your data inside the Home component
  const techLogos = [
    { node: <SiReact color="#61DAFB"/>, title: "React", href: "https://react.dev" },
    { node: <SiCisco color="#0bf10b" />, title: "Cisco", href: "#" },
    { node: <SiNextdotjs color="#FFFFFF"/>, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiPython color="#3776AB" />, title: "Python", href: "https://www.python.org" },
    { node: <SiCplusplus color="#ff026c" />, title: "C++", href: "https://isocpp.org" },
    { node: <SiTypescript color="#33c8db"/>, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiLinux color="#FCC624" />, title: "Linux", href: "#" },
    { node: <SiFigma color="#cf4288" />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiGithub color="#400ff0" />, title: "GitHub", href: "#" },
  ];

  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      <Aurora
        colorStops={["#d666ff","#9983e2","#1fddea"]}
        blend={0.5}
        amplitude={1.0}
      />
      
      {/* Main UI Container */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',    
        justifyContent: 'center', 
        textAlign: 'center',      
        padding: '20px',
        zIndex: 20
      }}>
        <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 8vw, 4rem)', margin: 0 }}>
          Hi! This is a testing page.
        </h1>
        
        {/* The LogoLoop Section */}
        <div style={{ width: '110%', maxWidth: '3000px', marginTop: '40px', height: '100px' }}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="right"
            logoHeight={50}
            gap={40}
            hoverSpeed={30}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff2f"
            ariaLabel="Technology partners"
          />
        </div>

        <p style={{ color: 'rgba(255, 255, 255, 0.82)', marginTop: '20px' }}>
          Work in progress...
        </p>
      </div>
    </main>
  );
}