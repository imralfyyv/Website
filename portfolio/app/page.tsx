import Aurora from "@/components/Aurora"; 

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000'}}>
      <Aurora
        colorStops={["#d666ff","#9983e2","#1fddea"]}
        blend={0.5}
        amplitude={1.0}
      />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '3rem', zIndex: 10 }}>Work in progress.</h1>
      </div>
    </main>
  );
}
