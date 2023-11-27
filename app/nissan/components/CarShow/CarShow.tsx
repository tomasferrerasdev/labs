'use client';
import {
  ContactShadows,
  Environment,
  Grid,
  OrbitControls,
  PerformanceMonitor,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import { Suspense, useMemo, useState } from 'react';
import { Effects } from './Effects';
import { Nissan } from './Nissan';
import { Screen } from './Screen';

export const CarShow = () => {
  const [degraded, degrade] = useState(false);
  const { chasisColor, rimsColor } = useControls({
    chasisColor: '#b73030',
    rimsColor: '#000',
  });

  const options = useMemo(() => {
    return {
      x: { value: 4.7, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: -10, max: Math.PI * 2, step: 0.01 },
      posX: { value: 0.0, min: -15, max: 15, step: 0.01 },
      posY: { value: 0.56, min: -15, max: 15, step: 0.01 },
      posZ: { value: 15.0, min: -15, max: 15, step: 0.01 },
      scaleX: { value: 2.88, min: 0, max: Math.PI * 2, step: 0.01 },
      scaleY: { value: 1.89, min: 0, max: Math.PI * 2, step: 0.01 },
      scaleZ: { value: 1.3, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
    };
  }, []);

  const screen = useControls('Screen', options);

  return (
    <Suspense fallback={null}>
      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 15], fov: 25 }}
        shadows
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
        <Screen
          position={[screen.posX, screen.posY, screen.posZ]}
          rotation={[screen.x, screen.y, screen.z]}
          visible={screen.visible}
          scale={[screen.scaleX, screen.scaleY, screen.scaleZ]}
        />
        <color attach="background" args={['#fff']} />
        <hemisphereLight intensity={0.5} />
        <Environment background preset="sunset" blur={0.8} />
        <OrbitControls />
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <Effects />
        <Grid
          renderOrder={-1}
          position={[0, -1.2, 0]}
          infiniteGrid
          cellSize={0.6}
          cellThickness={0.6}
          sectionSize={3.3}
          sectionThickness={1.5}
          sectionColor={'#E0C5FF'}
          fadeDistance={30}
        />
      </Canvas>
    </Suspense>
  );
};
