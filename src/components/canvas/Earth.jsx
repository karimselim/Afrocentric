import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF, Environment, ContactShadows, OrbitControls } from "@react-three/drei";

import CanvasLoader from "../Loader";

const EgyptModel = () => {
  const model = useGLTF("./planet/stylized_egyptian_embalmer.glb");
  const groupRef = useRef();
  // سرعة الدوران الأولية
  const rotationSpeed = useRef(0.0008);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed.current;

      const maxRotation = Math.PI / 30;    
      const minRotation = -Math.PI / 9.3;   

      if (groupRef.current.rotation.y > maxRotation || groupRef.current.rotation.y < minRotation) {
        rotationSpeed.current = -rotationSpeed.current;
      }
    }
  });

  return (
    <group ref={groupRef} position={[-20, -5, 17]}> 
      <primitive 
        object={model.scene} 
        position={[0, 0, 0]}  
        scale={0.1}
        castShadow
      />
    </group>
  );
};

const EgyptCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        position: [0, 0, 100],
      }}
    >
      <ambientLight intensity={0.6} />
      <spotLight position={[20, 30, 30]} angle={0.3} penumbra={1} intensity={2} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <Environment preset="city" />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          rotateSpeed={0.2}
          minDistance={50}
          maxDistance={120}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.3}
          minAzimuthAngle={-Math.PI / 30}    
          maxAzimuthAngle={Math.PI / 9.3}       
        />

        <EgyptModel />

        <ContactShadows position={[0, -70, 0]} opacity={0.5} scale={10} blur={2} far={10} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EgyptCanvas;
