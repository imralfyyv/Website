"use client";

import Aurora from "@/components/Aurora"; 

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      <Aurora
        colorStops={["#d666ff","#9983e2","#1fddea"]}
        blend={0.5}
        amplitude={1.0}
      />
      
      {/* Centering Container */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        display: 'flex', 
        flexDirection: 'column', // Stack elements vertically
        alignItems: 'center',    // Center horizontally
        justifyContent: 'center', // Center vertically
        textAlign: 'center',      // Center the text itself
        padding: '20px'           // Prevents text from touching edges on small screens
      }}>
        <h1 style={{ 
          color: 'white', 
          fontSize: 'clamp(2rem, 8vw, 4rem)', // Responsive font size
          zIndex: 10,
          margin: 0
        }}>
          Hi! This is a test.
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '10px', zIndex: 10 }}>
          Work in progress...
        </p>
      </div>
    </main>
  );
}
