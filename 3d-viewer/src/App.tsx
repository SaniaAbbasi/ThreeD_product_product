import React, { useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import * as THREE from "three";
import { animated, useSpring } from "@react-spring/three";

// 🦁🐯🐘 Animal Image Paths
const animalImages = [
  "/textures/lion.jpg",
  "/textures/tiger.jpg",
  "/textures/elephant.jpg",
];

const AnimatedPlane = animated(Plane);

const AnimalPlane: React.FC<{
  texturePath: string;
  mousePos: { x: number; y: number };
}> = ({ texturePath, mousePos }) => {
  const texture = useLoader(THREE.TextureLoader, texturePath);
  const [hovered, setHovered] = useState(false);

  // 🟢 Animation: Scale Up on Hover & Move Image Based on Mouse
  const { scale, position } = useSpring({
    scale: hovered ? 1.2 : 1,
    position: [mousePos.x * 3, -mousePos.y * 3, 0], // Move based on mouse
    config: { tension: 200, friction: 15 },
  });

  return (
    <AnimatedPlane
      args={[6, 6]}
      scale={scale}
      position={position.to((x, y, z) => [x, y, z])} // ✅ Fix: Convert SpringValue to [x, y, z]
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshBasicMaterial attach="material" map={texture} />
    </AnimatedPlane>
  );
};

const App: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 🟢 Track Mouse Movement Globally
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * -2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🟢 Change Image When "Next" Button is Clicked
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % animalImages.length);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        {/* ✅ Lighting to Make Textures Visible */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} />

        {/* ✅ Show One Image at a Time with Mouse Movement */}
        <AnimalPlane
          texturePath={animalImages[currentImageIndex]}
          mousePos={mousePos}
        />

        {/* ✅ Orbit Controls for Interaction */}
        <OrbitControls enableZoom={true} />
      </Canvas>

      {/* ✅ UI Button to Switch Images */}
      <div id="ui">
        <button onClick={nextImage}>Next Image</button>
      </div>
    </div>
  );
};

export default App;
