import { useLoader } from '@react-three/fiber';
import { Bloom, EffectComposer, LUT, SSR } from '@react-three/postprocessing';
import { useControls } from 'leva';
import { LUTCubeLoader } from 'postprocessing';

export function Effects() {
  const texture: any = useLoader(LUTCubeLoader, '/textures/F-6800-STD.cube');
  const { enabled, ...props } = useControls({
    enabled: false,
  });
  return (
    enabled && (
      <EffectComposer disableNormalPass>
        <SSR {...props} />
        <Bloom
          luminanceThreshold={0.2}
          mipmapBlur
          luminanceSmoothing={0}
          intensity={1.75}
        />
        <LUT lut={texture} />
      </EffectComposer>
    )
  );
}
