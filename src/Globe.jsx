
// // Final responsive

// import React, { useRef, useMemo } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Stars, Float, PerspectiveCamera } from "@react-three/drei";
// import * as THREE from "three";

// function Earth() {
//   const earthRef = useRef();
//   const cloudsRef = useRef();
//   const { viewport } = useThree();

//   // Responsive sizing: If screen is small (mobile), make globe smaller
//   const isMobile = viewport.width < 5;
//   const globeScale = isMobile ? 1.2 : 1.6;
//   // Responsive positioning: Center on mobile, Right on desktop
//   const positionX = isMobile ? 0 : viewport.width / 4;
//   const positionY = isMobile ? viewport.height / 5 : 0;

//   const [colorMap, bumpMap, specMap, cloudMap] = useMemo(() => {
//     const loader = new THREE.TextureLoader();
//     return [
//       loader.load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"),
//       loader.load("https://threejs.org/examples/textures/planets/earth_normal_2048.jpg"),
//       loader.load("https://threejs.org/examples/textures/planets/earth_specular_2048.jpg"),
//       loader.load("https://threejs.org/examples/textures/planets/earth_clouds_1024.png"),
//     ];
//   }, []);

//   useFrame((_, delta) => {
//     earthRef.current.rotation.y += delta * 0.12;
//     cloudsRef.current.rotation.y += delta * 0.15;
//   });

//   return (
//     <group position={[positionX, -positionY, 0]}> 
//       <mesh ref={earthRef}>
//         <sphereGeometry args={[globeScale, 64, 64]} />
//         <meshPhongMaterial
//           map={colorMap}
//           bumpMap={bumpMap}
//           bumpScale={0.05}
//           specularMap={specMap}
//           specular={new THREE.Color('#222222')}
//           shininess={10}
//         />
//       </mesh>

//       <mesh ref={cloudsRef}>
//         <sphereGeometry args={[globeScale + 0.02, 64, 64]} />
//         <meshPhongMaterial
//           map={cloudMap}
//           transparent={true}
//           opacity={0.4}
//           depthWrite={false}
//         />
//       </mesh>
//     </group>
//   );
// }

// export default function ResponsiveGlobeScene() {
//   return (
//     <div className="relative w-full h-screen bg-[#010308] overflow-hidden flex flex-col lg:flex-row">
//       {/* Background Glow */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute top-1/2 lg:right-[10%] left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blue-600/10 rounded-full blur-[80px] lg:blur-[120px]" />
//       </div>

//       {/* Canvas Layer */}
//       <div className="absolute inset-0 z-10">
//         <Canvas shadows>
//           <PerspectiveCamera makeDefault position={[0, 0, 6]} />
//           <ambientLight intensity={0.2} /> 
//           <directionalLight position={[5, 3, 5]} intensity={2.5} />
//           <pointLight position={[-5, -2, -2]} intensity={1} color="#2563eb" />
//           <Stars radius={200} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
          
//           <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
//             <Earth />
//           </Float>

//           <OrbitControls enableZoom={false} enablePan={false} />
//         </Canvas>
//       </div>

//       {/* UI Overlay - Responsive Text */}
//       <div className="relative z-20 flex flex-col justify-center h-full px-6 lg:px-[10%] text-center lg:text-left pointer-events-none">
//         <div className="mt-auto lg:mt-0 mb-12 lg:mb-0">
//           <p className="text-blue-400 font-mono text-[10px] lg:text-xs tracking-[0.3em] uppercase mb-4">
//             System Status: Nominal
//           </p>
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-6">
//             WORLD <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-100">
//               ENGINE
//             </span>
//           </h1>
//           <p className="text-slate-400 text-sm md:text-base lg:text-lg max-w-sm mx-auto lg:mx-0 leading-relaxed mb-8 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-6">
//             Real-time environmental tracking and global data synthesis. 
//             Built for the next generation of web experience.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pointer-events-auto">
//             <button className="px-8 py-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-blue-500 transition-all">
//               Initialize
//             </button>
//             <button className="px-8 py-4 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all">
//               Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const { viewport } = useThree();

  const isMobile = viewport.width < 5;
  const globeScale = isMobile ? 1.2 : 1.5; // Reduced slightly for better composition
  const positionX = isMobile ? 0 : viewport.width / 4;
  const positionY = isMobile ? viewport.height / 6 : 0;

  const [colorMap, bumpMap, specMap, cloudMap] = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [
      loader.load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"),
      loader.load("https://threejs.org/examples/textures/planets/earth_normal_2048.jpg"),
      loader.load("https://threejs.org/examples/textures/planets/earth_specular_2048.jpg"),
      loader.load("https://threejs.org/examples/textures/planets/earth_clouds_1024.png"),
    ];
  }, []);

  useFrame((_, delta) => {
    earthRef.current.rotation.y += delta * 0.1;
    cloudsRef.current.rotation.y += delta * 0.12;
  });

  return (
    <group position={[positionX, -positionY, 0]}>
      <mesh ref={earthRef}>
        <sphereGeometry args={[globeScale, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.05}
          specularMap={specMap}
          specular={new THREE.Color('#222222')}
          shininess={10}
        />
      </mesh>
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[globeScale + 0.02, 64, 64]} />
        <meshPhongMaterial
          map={cloudMap}
          transparent={true}
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[#010308] overflow-hidden pt-[100px]">
      
      {/* 1. Background Glow - Z-index 0 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 lg:right-[10%] left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blue-600/10 rounded-full blur-[80px] lg:blur-[120px]" />
      </div>

      {/* 2. Canvas Layer - Z-index 10 (Allows interaction via OrbitControls) */}
      <div className="absolute inset-0 z-10 ">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 3, 5]} intensity={2.5} />
          <pointLight position={[-5, -2, -2]} intensity={1} color="#2563eb" />
          <Stars radius={200} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
          
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <Earth />
          </Float>

          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* 3. UI Overlay - Z-index 20 (pointer-events-none is vital here) */}
      <div className="relative z-20 flex flex-col justify-center h-full px-6 lg:px-[10%] text-center lg:text-left pointer-events-none select-none">
        <div className="mt-auto lg:mt-0 mb-20 lg:mb-0">
          <p className="text-emerald-400 font-mono text-[10px] lg:text-xs tracking-[0.3em] uppercase mb-4">
            Evolving World Ventures
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6">
            {/* GLOBAL <br /> */}
            Consulting <br />
            <span className="text-white">
              {/* IMPACT */} Solutions
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base lg:text-lg max-w-sm mx-auto lg:mx-0 leading-relaxed mb-8 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-6">
            Expediting development processes and reducing time-to-market with interdisciplinary global expertise.
          </p>
          
          {/* Buttons - pointer-events-auto makes them clickable again */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pointer-events-auto">
            <button className="px-8 py-4 bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20">
              Explore Products
            </button>
            <button className="px-8 py-4 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all">
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}