"use client";

import Aurora from "@/components/Aurora"; 
import LogoLoop from '@/components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma} from 'react-icons/si';

export default function Home() {
  // Move your data inside the Home component
  const techLogos = [
    { node: <SiReact color="#61DAFB"/>, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs color="#FFFFFF"/>, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript color="#3178C6"/>, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss color="#06B6D4"/>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiFigma color="#f21ef2" />, title: "Figma", href: "https://www.figma.com" },
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