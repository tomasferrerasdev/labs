"use client";
import {
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Nissan } from "./Nissan";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import { Effects } from "./Effects";

export const CarShow = () => {
  const { chasisColor, rimsColor } = useControls({
    chasisColor: "#b73030",
    rimsColor: "#000",
  });

  return (
    <Suspense fallback={null}>
      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 15], fov: 25 }}
      >
        <ContactShadows
          resolution={1024}
          frames={1}
          position={[0, -1.16, 0]}
          scale={15}
          blur={0.5}
          opacity={0.8}
          far={20}
        />
        <Nissan rimsColor={rimsColor} chasisColor={chasisColor} />
        <color attach="background" args={["#fff"]} />
        <hemisphereLight intensity={0.5} />

        <mesh
          scale={4}
          position={[3, -1.161, -1.5]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
        >
          <ringGeometry args={[0.9, 1, 4, 1]} />
          <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>
        <mesh
          scale={4}
          position={[-3, -1.161, -1]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
        >
          <ringGeometry args={[0.9, 1, 3, 1]} />
          <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>
        <Environment resolution={512}>
          <Lightformer
            intensity={3}
            rotation-x={Math.PI / 2}
            position={[0, 4, -9]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 4, -6]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 0]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 6]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 9]}
            scale={[10, 1, 1]}
          />
          {/* Sides */}
          <Lightformer
            intensity={4}
            rotation-y={Math.PI / 2}
            position={[-50, 2, 0]}
            scale={[100, 2, 1]}
          />
          <Lightformer
            intensity={9}
            rotation-y={-Math.PI / 2}
            position={[50, 4, 0]}
            scale={[100, 2, 1]}
          />
          {/* Key */}
          <Lightformer
            form="ring"
            color="red"
            intensity={10}
            scale={2}
            position={[10, 5, 10]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </Environment>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.25}
          makeDefault
          autoRotate
        />
        <Effects />
        {/* <Perf position="bottom-right" /> */}
      </Canvas>
    </Suspense>
  );
};
