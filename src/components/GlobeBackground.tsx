// src/components/GlobeBackground.tsx
import Globe from "react-globe.gl";
import { useEffect, useRef, useState } from "react";
import type { GlobeMethods } from "react-globe.gl";

export default function GlobeBackground() {
  const globeRef = useRef<GlobeMethods>(null!);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (globeRef.current) {
        const controls = globeRef.current.controls();
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="fixed top-0 left-0 w-full h-full -z-10">
    
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(162, 157, 155, 0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="pink"
        atmosphereAltitude={0.15}
      />
    </div>
  );
}
