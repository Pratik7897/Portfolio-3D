import { useEffect, useRef } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { gsap } from "gsap";

const Scene = () => {
  const { setLoading } = useLoading();
  const hoverDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let progress = setProgress((value) => setLoading(value));
    
    // Simulate loading for the AI avatar
    setTimeout(() => {
      progress.loaded().then(() => {
        if (hoverDivRef.current) {
          gsap.fromTo(
            hoverDivRef.current,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2, ease: "power3.out", delay: 2.5 }
          );
        }
      });
    }, 1500);
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="character-rim"></div>
          <div 
            className="character-hover" 
            ref={hoverDivRef} 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              width: '100%', 
              height: '100%', 
              opacity: 0,
              pointerEvents: 'none' 
            }}
          >
            <img 
               src="/images/pratik_avatar.png" 
               alt="Pratik Shinde Avatar" 
               style={{ 
                  width: '100%', 
                  maxWidth: '550px', 
                  objectFit: 'contain',
                  maskImage: 'radial-gradient(ellipse calc(50% - 10px) calc(50% - 10px) at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 72%)',
                  animation: 'floatImage 6s ease-in-out infinite'
               }} 
             />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes floatImage {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </>
  );
};

export default Scene;
