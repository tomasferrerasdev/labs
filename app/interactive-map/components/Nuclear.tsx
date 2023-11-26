import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import styles from "../page.module.scss";

export const Nuclear = ({ setIsOpen }: any) => {
  const { nodes, materials }: any = useGLTF("/models/nuclear.glb");
  return (
    <group dispose={null} scale={0.5} position={[0, -5, 0]}>
      <mesh
        geometry={nodes.NUCLEAR.geometry}
        material={materials["Material.001"]}
        position={[-18.26, 5.519, -11.757]}
        rotation={[1.565, -0.011, 1.571]}
        scale={0.817}
      />
      <group scale={0.01}>
        <group
          position={[1529.815, 143.388, 1469.423]}
          rotation={[-1.61, 0, -Math.PI]}
          scale={46.152}
        >
          <group position={[-1.399, 0, 0.913]} scale={[2.038, 1.009, 1.009]}>
            <mesh
              geometry={nodes.Cube073_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube073_white_0.geometry}
              material={materials.white}
            />
          </group>
          <group position={[2.733, 0, 0.164]} scale={[0.01, 0.408, 0.147]}>
            <mesh
              geometry={nodes.Cube074_black_0.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes.Cube074_metallic_0.geometry}
              material={materials.metallic}
            />
            <Html distanceFactor={10}>
              <div className={styles.annotation}>
                Camión de residuos nucleares
              </div>
            </Html>
          </group>
          <group position={[2.629, 0.359, 0.701]} scale={[0.007, 0.244, 0.007]}>
            <mesh
              geometry={nodes.Cube075_black_0.geometry}
              material={materials.black}
              position={[0.001, 0, 0]}
            />
          </group>
          <group
            position={[1.529, -0.958, -0.521]}
            rotation={[-Math.PI / 2, 0, 1.912]}
            scale={[0.381, 0.381, 0.113]}
          >
            <mesh
              geometry={nodes.Cylinder051_black_0.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes.Cylinder051_metallic_0.geometry}
              material={materials.metallic}
            />
          </group>
          <group
            position={[-2.564, -0.921, -0.521]}
            rotation={[-Math.PI / 2, 0, 1.912]}
            scale={[-0.381, -0.381, -0.113]}
          >
            <mesh
              geometry={nodes.Cylinder052_black_0.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes.Cylinder052_metallic_0.geometry}
              material={materials.metallic}
            />
          </group>
          <group
            position={[1.529, 0.958, -0.521]}
            rotation={[-Math.PI / 2, 0, 1.912]}
            scale={[-0.381, -0.381, -0.113]}
          >
            <mesh
              geometry={nodes.Cylinder053_black_0.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes.Cylinder053_metallic_0.geometry}
              material={materials.metallic}
            />
          </group>
          <group
            position={[-2.564, 0.921, -0.521]}
            rotation={[-Math.PI / 2, 0, 1.912]}
            scale={[0.381, 0.381, 0.113]}
          >
            <mesh
              geometry={nodes.Cylinder054_black_0.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes.Cylinder054_metallic_0.geometry}
              material={materials.metallic}
            />
          </group>
          <mesh
            geometry={nodes.camion003_black_0.geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes.camion003_grey__0.geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes.camion003_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.camion003_phare_blanc_0.geometry}
            material={materials.phare_blanc}
          />
          <mesh
            geometry={nodes.camion003_phare_orange_0.geometry}
            material={materials.phare_orange}
          />
          <mesh
            geometry={nodes.camion003_phare_rouge_0.geometry}
            material={materials.phare_rouge}
          />
          <mesh
            geometry={nodes.camion003_white_0.geometry}
            material={materials.white}
          />
          <mesh
            geometry={nodes.camion003_windows_0.geometry}
            material={materials.windows}
          />
          <mesh
            geometry={nodes.Cube076_black_0.geometry}
            material={materials.black}
            position={[2.629, -0.339, 0.701]}
            scale={[0.007, 0.244, 0.007]}
          />
        </group>
        <group
          position={[579.545, 150.077, 2204.923]}
          rotation={[-1.571, 0.001, 0.032]}
          scale={46.152}
        >
          <mesh
            geometry={nodes.camion004_black_0.geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes.camion004_grey__0.geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes.camion004_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.camion004_phare_blanc_0.geometry}
            material={materials.phare_blanc}
          />
          <mesh
            geometry={nodes.camion004_phare_orange_0.geometry}
            material={materials.phare_orange}
          />
          <mesh
            geometry={nodes.camion004_phare_rouge_0.geometry}
            material={materials.phare_rouge}
          />
          <mesh
            geometry={nodes.camion004_white_0.geometry}
            material={materials.white}
          />
          <mesh
            geometry={nodes.camion004_windows_0.geometry}
            material={materials.windows}
          />
        </group>
        <group
          position={[574.236, 150.209, 1693.85]}
          rotation={[-1.571, 0.001, 0.005]}
          scale={46.152}
        >
          <mesh
            geometry={nodes.camion005_black_0.geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes.camion005_grey__0.geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes.camion005_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.camion005_phare_blanc_0.geometry}
            material={materials.phare_blanc}
          />
          <mesh
            geometry={nodes.camion005_phare_orange_0.geometry}
            material={materials.phare_orange}
          />
          <mesh
            geometry={nodes.camion005_phare_rouge_0.geometry}
            material={materials.phare_rouge}
          />
          <mesh
            geometry={nodes.camion005_white_0.geometry}
            material={materials.white}
          />
          <mesh
            geometry={nodes.camion005_windows_0.geometry}
            material={materials.windows}
          />
        </group>
        <group
          position={[572.275, 150.242, 1570.054]}
          rotation={[-1.571, 0.001, 0.119]}
          scale={46.152}
        >
          <mesh
            geometry={nodes.camion006_black_0.geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes.camion006_grey__0.geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes.camion006_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.camion006_phare_blanc_0.geometry}
            material={materials.phare_blanc}
          />
          <mesh
            geometry={nodes.camion006_phare_orange_0.geometry}
            material={materials.phare_orange}
          />
          <mesh
            geometry={nodes.camion006_phare_rouge_0.geometry}
            material={materials.phare_rouge}
          />
          <mesh
            geometry={nodes.camion006_white_0.geometry}
            material={materials.white}
          />
          <mesh
            geometry={nodes.camion006_windows_0.geometry}
            material={materials.windows}
          />
        </group>
        <group
          position={[705.457, 150.243, 1235.586]}
          rotation={[-1.571, 0, 1.006]}
          scale={46.152}
        >
          <mesh
            geometry={nodes.camion007_black_0.geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes.camion007_grey__0.geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes.camion007_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.camion007_phare_blanc_0.geometry}
            material={materials.phare_blanc}
          />
          <mesh
            geometry={nodes.camion007_phare_orange_0.geometry}
            material={materials.phare_orange}
          />
          <mesh
            geometry={nodes.camion007_phare_rouge_0.geometry}
            material={materials.phare_rouge}
          />
          <mesh
            geometry={nodes.camion007_white_0.geometry}
            material={materials.white}
          />
          <mesh
            geometry={nodes.camion007_windows_0.geometry}
            material={materials.windows}
          />
        </group>
        <group
          position={[5, 0, -2.255]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2424.982, 3998.464, 100]}
        >
          <group
            position={[0.046, -0.952, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.248]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.743, -0.077, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.256]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|102_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|102_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.195, -0.796, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.263]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|138_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|138_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.193, -0.92, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.304]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|142_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|142_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.473, 0.712, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.187]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|153_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|153_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.37, 0.72, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.144]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|156_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|156_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.798, 0.748, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.297]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|167_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|167_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.737, 0.526, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.351]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|171_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|171_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.152, 0.604, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.129]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|176_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|176_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.696, -0.827, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.332]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|180_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|180_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.667, -0.319, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.258]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|191_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|191_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.585, -0.305, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.228]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|194_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|194_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.758, -0.033, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.336]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|197_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|197_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.776, 0.311, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.294]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|20_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|20_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.174, -0.031, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.127]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|201_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|201_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.134, -0.834, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.302]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|202_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|202_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.005, -0.76, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.437]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|207_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|207_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.033, -0.771, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.134]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|208_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|208_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.06, -0.959, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.462]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|211_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|211_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.009, -0.735, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.413]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|216_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|216_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.82, -0.262, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.478]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|218_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|218_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.915, -0.159, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.313]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|224_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|224_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.732, -0.24, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.3]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|226_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|226_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.901, -0.925, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.347]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|234_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|234_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.9, -0.882, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.441]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|235_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|235_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.752, -0.54, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.33]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|242_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|242_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.926, -0.542, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.464]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|248_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|248_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.221, 0.561, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.178]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|25_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|25_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.902, -0.636, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.118]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|253_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|253_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.739, -0.545, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.258]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|258_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|258_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.021, 0.275, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.318]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|26_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|26_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.691, -0.707, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.117]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|263_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|263_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.489, 0.581, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.157]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|268_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|268_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.29, 0.994, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.176]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|271_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|271_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.593, 0.499, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.298]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|276_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|276_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.035, 0.26, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.438]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|28_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|28_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.694, 0.403, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.165]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|280_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|280_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.742, 0.497, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.267]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|282_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|282_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.707, 0.284, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.166]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|283_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|283_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.695, 0.316, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.15]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|285_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|285_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.528, 0.636, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.429]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|294_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|294_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.568, 0.625, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.208]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|302_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|302_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.507, 0.9, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.135]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|307_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|307_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.54, 0.935, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.469]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|309_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|309_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.295, -0.705, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.324]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|31_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|31_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.566, 0.95, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.366]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|312_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|312_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.522, 0.827, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.256]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|315_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|315_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.256, -0.732, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.474]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|32_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|32_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.335, 0.996, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.211]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|326_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|326_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.091, 0.487, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.419]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|328_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|328_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.447, 0.461, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.341]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|336_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|336_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.482, 0.364, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.332]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|338_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|338_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.05, -0.709, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.448]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|34_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|34_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.397, 0.349, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.123]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|340_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|340_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.104, 0.383, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.422]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|342_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|342_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.164, 0.321, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.449]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|350_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|350_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.261, -0.786, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.144]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|358_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|358_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.457, -0.82, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.4]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|360_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|360_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.411, -0.914, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.434]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|369_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|369_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.468, -0.709, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.188]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|371_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|371_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.659, -0.811, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.46]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|375_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|375_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.69, -0.544, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.479]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|384_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|384_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.746, -0.524, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.416]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|387_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|387_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.558, 0.507, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.433]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|4_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|4_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.72, -0.706, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.391]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|40_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|40_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.371, -0.708, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.171]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|400_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|400_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.33, -0.713, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.267]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|401_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|401_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.362, -0.748, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.142]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|402_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|402_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.348, -0.93, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.184]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|403_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|403_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.351, -0.926, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.427]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|405_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|405_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.301, -0.905, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.122]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|407_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|407_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.282, -0.888, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.249]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|410_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|410_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.262, -0.926, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.306]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|412_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|412_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.396, 0.801, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.418]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|415_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|415_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.498, 0.872, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.444]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|420_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|420_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.61, 0.254, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.227]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|437_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|437_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.704, -0.614, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.269]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|44_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|44_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.831, 0.539, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.277]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|445_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|445_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.826, 0.604, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.157]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|448_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|448_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.591, -0.996, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.284]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|45_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|45_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.757, -0.89, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.179]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|456_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|456_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.742, -0.823, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.147]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|46_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|46_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.755, -0.883, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.269]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|460_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|460_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.845, -0.224, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.285]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|462_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|462_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.848, -0.222, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.32]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|464_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|464_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.841, -0.163, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.321]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|469_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|469_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.693, -0.814, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.452]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|47_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|47_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.174, -0.923, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.219]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|473_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|473_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.621, -0.946, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.458]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|476_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|476_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.511, -0.928, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.432]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|479_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|479_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.068, -0.997, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.463]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|491_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|491_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.046, -0.899, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.278]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|497_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|497_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.06, 0.429, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.442]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|59_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|59_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.576, 0.768, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.154]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|66_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|66_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.609, 0.516, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.351]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|68_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|68_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.699, 0.634, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.425]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|70_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|70_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.779, 0.417, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.429]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|76_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|76_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.919, 0.523, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.476]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|79_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|79_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.288, 0.929, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.314]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|81_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|81_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.92, -0.587, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.003, 1.368]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|85_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder043|Dupli|85_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.032, -0.941, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.611]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|1_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|1_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.755, -0.465, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.573]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|10_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|10_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.096, -0.741, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.575]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|100_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|100_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.088, -0.944, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.487]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|101_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|101_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.698, -0.356, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.588]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|105_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|105_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.518, -0.85, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.514]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|109_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|109_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.676, 0.504, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.528]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|114_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|114_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.146, -0.849, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.536]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|121_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|121_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.141, -0.848, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.52]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|122_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|122_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.769, -0.858, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.554]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|127_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|127_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.065, -0.859, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.001, 0.464]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|129_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|129_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.775, -0.709, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.571]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|13_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|13_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.121, -0.773, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.479]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|130_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|130_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.005, -0.789, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.557]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|132_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|132_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.226, -0.82, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.571]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|135_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|135_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.243, -0.771, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.596]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|137_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|137_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.161, -0.898, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.511]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|147_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|147_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.772, 0.556, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.559]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|15_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|15_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.276, 0.523, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.528]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|157_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|157_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.8, 0.537, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.563]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|16_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|16_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.754, 0.67, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.582]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|165_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|165_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.78, 0.646, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.525]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|166_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|166_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.738, 0.593, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.485]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|173_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|173_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.625, 0.603, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.524]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|175_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|175_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.58, -0.844, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.584]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|178_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|178_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.774, 0.5, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.528]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|18_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|18_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.714, -0.797, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.6]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|183_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|183_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.687, -0.759, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.473]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|184_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|184_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.8, 0.286, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.495]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|19_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|19_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.629, -0.325, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.546]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|190_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|190_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.448, 0.556, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.58]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|2_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|2_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.05, -0.783, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.569]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|205_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|205_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.753, 0.281, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.482]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|21_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|21_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.927, -0.907, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.589]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|236_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|236_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.96, -0.715, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.508]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|249_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|249_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.879, -0.643, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.48]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|254_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|254_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.892, -0.671, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.592]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|255_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|255_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.728, -0.542, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.602]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|262_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|262_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.747, -0.732, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.596]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|264_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|264_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.537, 0.49, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.534]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|277_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|277_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.529, 0.508, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.555]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|3_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|3_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.556, 0.602, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.508]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|301_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|301_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.647, 0.925, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.474]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|303_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|303_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.636, 0.937, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.48]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|304_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|304_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.069, 0.581, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.587]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|319_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|319_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.4, 0.947, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.483]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|321_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|321_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.305, 0.879, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.506]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|323_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|323_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.331, 0.82, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.487]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|327_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|327_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.664, 0.495, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.001, 0.467]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|332_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|332_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.104, 0.488, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.512]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|343_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|343_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.365, -0.816, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.513]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|355_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|355_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.469, -0.762, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.618]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|363_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|363_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.419, -0.761, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.512]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|365_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|365_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.476, -0.924, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.53]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|368_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|368_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.695, -0.706, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.571]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|37_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|37_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.243, -0.742, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.606]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|372_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|372_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.686, -0.859, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.001, 0.467]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|374_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|374_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.699, -0.752, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.519]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|377_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|377_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.639, -0.537, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.548]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|380_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|380_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.708, -0.537, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.576]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|381_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|381_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.691, -0.534, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.563]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|382_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|382_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.733, -0.546, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.593]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|385_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|385_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.696, -0.523, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.598]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|388_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|388_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.761, -0.61, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.597]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|389_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|389_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.731, -0.935, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.509]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|397_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|397_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.099, -0.714, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.599]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|398_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|398_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.294, -0.923, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.591]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|409_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|409_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.377, 0.78, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.568]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|416_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|416_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.726, -0.572, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.609]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|42_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|42_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.46, 0.824, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.476]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|423_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|423_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.164, 0.553, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.599]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|424_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|424_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.677, 0.82, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.508]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|428_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|428_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.587, 0.255, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.523]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|433_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|433_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.622, 0.369, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.542]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|440_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|440_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.859, 0.323, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.563]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|443_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|443_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.786, 0.368, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.581]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|444_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|444_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.847, -0.969, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.579]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|451_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|451_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.82, -0.976, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.547]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|452_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|452_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.86, -0.968, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.607]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|453_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|453_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.841, -0.934, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.509]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|454_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|454_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.872, -0.165, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.53]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|466_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|466_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.874, -0.152, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.579]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|470_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|470_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.768, -0.158, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.494]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|471_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|471_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.742, -0.16, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.559]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|475_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|475_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.004, 0.582, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.571]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|480_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|480_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.399, 0.536, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.613]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|484_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|484_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.385, 0.611, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.561]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|486_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|486_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.428, 0.597, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.591]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|487_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|487_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.089, -0.96, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.602]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|490_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|490_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.067, -0.876, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.561]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|493_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|493_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.092, -0.883, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.553]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|495_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|495_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.409, -0.82, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.561]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|51_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|51_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.277, -0.852, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.601]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|55_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|55_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.255, -0.857, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.534]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|58_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|58_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.449, 0.893, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.471]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|65_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|65_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.606, 0.774, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.604]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|67_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|67_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.924, 0.287, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.534]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|73_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|73_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.936, 0.534, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.618]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|78_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|78_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.293, 0.934, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.571]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|80_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|80_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.925, -0.742, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.524]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|82_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|82_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.755, -0.563, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.518]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|88_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|88_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.789, -0.844, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.479]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|92_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|92_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.917, -0.495, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.524]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|96_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|96_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.879, -0.498, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.001, 0.002, 0.556]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|97_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder044|Dupli|97_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.777, -0.24, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.121]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|11_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|11_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.331, 0.543, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.271]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|116_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|116_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.793, -0.7, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.27]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|12_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|12_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.004, -0.824, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.135]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|126_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|126_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.203, -0.845, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.157]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|134_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|134_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.195, -0.806, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.356]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|136_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|136_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.172, -0.885, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.357]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|146_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|146_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.415, 0.631, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.098]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|148_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|148_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.463, 0.729, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.367]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|151_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|151_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.457, 0.737, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.306]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|152_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|152_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.27, 0.564, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.39]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|158_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|158_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.355, 0.592, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.345]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|162_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|162_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.802, 0.627, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.335]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|163_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|163_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.806, 0.664, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.133]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|164_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|164_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.695, 0.502, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.232]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|172_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|172_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.742, 0.564, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.316]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|174_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|174_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.764, -0.111, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.248]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|196_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|196_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.776, -0.132, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.31]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|199_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|199_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.143, -0.812, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.102]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|203_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|203_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.017, -0.825, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.12]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|204_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|204_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.035, -0.907, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.208]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|213_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|213_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.843, -0.31, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.395]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|219_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|219_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.952, -0.246, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.282]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|222_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|222_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.719, -0.196, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.177]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|225_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|225_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.773, -0.754, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.346]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|228_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|228_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.877, -0.88, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.201]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|237_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|237_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.956, -0.609, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.127]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|243_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|243_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.965, -0.67, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.172]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|252_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|252_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.715, -0.523, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.112]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|257_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|257_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.441, 0.537, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.23]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|267_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|267_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.005, 0.291, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.134]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|27_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|27_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.298, 0.974, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.316]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|270_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|270_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.805, 0.468, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.143]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|274_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|274_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.636, 0.317, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.162]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|287_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|287_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.686, 0.366, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.412]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|288_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|288_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.687, 0.321, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.264]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|289_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|289_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.634, 0.371, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.422]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|290_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|290_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.559, 0.609, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.334]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|298_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|298_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.504, 0.582, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.266]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|299_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|299_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.275, -0.702, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.348]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|30_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|30_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.518, 0.616, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.199]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|300_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|300_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.523, 0.956, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.212]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|310_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|310_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.539, 0.801, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.328]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|313_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|313_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.502, 0.814, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.334]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|316_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|316_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.309, 0.98, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.304]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|325_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|325_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.287, -0.746, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.29]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|33_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|33_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.612, 0.47, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.238]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|333_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|333_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.493, 0.321, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.385]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|339_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|339_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.04, 0.478, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.308]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|345_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|345_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.187, 0.44, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.185]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|349_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|349_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.16, 0.353, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.394]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|351_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|351_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.346, -0.848, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.109]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|352_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|352_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.364, -0.813, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.122]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|354_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|354_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.481, -0.874, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.398]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|359_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|359_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.467, -0.865, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.34]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|361_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|361_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.459, -0.946, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.275]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|367_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|367_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.48, -0.725, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.393]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|370_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|370_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.727, -0.77, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.394]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|376_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|376_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.767, -0.728, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.217]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|390_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|390_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.792, -0.648, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.204]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|392_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|392_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.677, -0.901, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.093]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|396_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|396_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.267, -0.906, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.081]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|406_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|406_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.306, -0.882, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.145]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|408_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|408_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.114, 0.336, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.172]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|413_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|413_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.019, 0.329, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.248]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|414_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|414_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.626, 0.579, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.176]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|430_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|430_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.611, 0.255, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.118]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|436_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|436_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.827, 0.366, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.404]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|441_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|441_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.829, 0.584, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.304]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|447_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|447_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.81, -0.927, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.261]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|458_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|458_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.782, -0.919, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.409]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|461_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|461_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.828, -0.198, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.222]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|463_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|463_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.842, -0.188, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.257]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|465_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|465_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.529, -0.877, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.383]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|478_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|478_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.161, -0.705, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.195]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|48_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|48_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.594, 0.534, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.332]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|481_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|481_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.596, 0.546, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.312]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|483_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|483_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.464, 0.619, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.08]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|489_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|489_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.119, -0.91, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.099]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|492_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|492_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.689, -0.493, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.09]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|5_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|5_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.411, -0.714, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.145]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|50_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|50_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.403, -0.842, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.325]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|53_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|53_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.274, -0.844, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.398]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|57_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|57_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.704, -0.498, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.155]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|6_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|6_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.577, 0.406, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.304]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|61_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|61_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.356, 0.933, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.429]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|63_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|63_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.645, 0.304, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.122]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|71_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|71_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.631, 0.252, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.276]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|72_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|72_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.785, 0.385, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.233]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|75_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|75_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.774, 0.426, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.394]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|77_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|77_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.741, -0.445, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.378]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|8_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|8_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.735, -0.238, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.002, 0.004, 1.091]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|9_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|9_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.891, -0.827, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.005, 1.417]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|91_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|91_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[0.896, -0.46, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.311]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|95_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|95_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <group
            position={[-0.12, -0.734, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.003, 0.004, 1.241]}
          >
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|98_brown_0"].geometry}
              material={materials.brown}
            />
            <mesh
              geometry={nodes["Cube|Cylinder|Dupli|98_green_0"].geometry}
              material={materials.green}
            />
          </group>
          <mesh
            geometry={nodes.Cube_earth_0.geometry}
            material={materials.earth}
          />
          <mesh
            geometry={nodes.Cube_grass_0.geometry}
            material={materials.grass}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|103_green_0"].geometry}
            material={materials.green}
            position={[-0.706, -0.107, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.396]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|104_green_0"].geometry}
            material={materials.green}
            position={[-0.69, -0.372, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.019, 0.464]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|106_green_0"].geometry}
            material={materials.green}
            position={[0.679, -0.993, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.37]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|113_green_0"].geometry}
            material={materials.green}
            position={[0.683, 0.543, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.019, 0.473]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|115_green_0"].geometry}
            material={materials.green}
            position={[0.63, 0.523, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.016, 0.379]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|119_green_0"].geometry}
            material={materials.green}
            position={[-0.317, 0.666, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.446]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|124_green_0"].geometry}
            material={materials.green}
            position={[0.143, -0.839, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.391]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|125_green_0"].geometry}
            material={materials.green}
            position={[0.026, -0.845, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.432]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|128_green_0"].geometry}
            material={materials.green}
            position={[0.064, -0.815, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.36]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|131_green_0"].geometry}
            material={materials.green}
            position={[0.089, -0.793, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.411]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|133_green_0"].geometry}
            material={materials.green}
            position={[0.043, -0.796, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.455]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|139_green_0"].geometry}
            material={materials.green}
            position={[0.179, -0.789, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.446]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|14_green_0"].geometry}
            material={materials.green}
            position={[0.507, -0.708, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.382]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|141_green_0"].geometry}
            material={materials.green}
            position={[0.242, -0.896, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.016, 0.377]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|143_green_0"].geometry}
            material={materials.green}
            position={[0.164, -0.904, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.452]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|144_green_0"].geometry}
            material={materials.green}
            position={[0.183, -0.903, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.458]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|145_green_0"].geometry}
            material={materials.green}
            position={[0.157, -0.878, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.02, 0.475]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|168_green_0"].geometry}
            material={materials.green}
            position={[-0.767, 0.543, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.413]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|169_green_0"].geometry}
            material={materials.green}
            position={[-0.784, 0.519, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.451]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|17_green_0"].geometry}
            material={materials.green}
            position={[0.782, 0.561, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.404]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|177_green_0"].geometry}
            material={materials.green}
            position={[0.582, -0.861, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.362]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|181_green_0"].geometry}
            material={materials.green}
            position={[0.728, -0.874, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.442]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|185_green_0"].geometry}
            material={materials.green}
            position={[0.657, -0.81, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.456]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|186_green_0"].geometry}
            material={materials.green}
            position={[0.664, -0.937, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.019, 0.463]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|187_green_0"].geometry}
            material={materials.green}
            position={[0.71, -0.307, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.408]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|188_green_0"].geometry}
            material={materials.green}
            position={[-0.767, -0.263, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.402]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|189_green_0"].geometry}
            material={materials.green}
            position={[-0.797, -0.47, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.398]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|192_green_0"].geometry}
            material={materials.green}
            position={[-0.627, -0.312, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.019, 0.469]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|195_green_0"].geometry}
            material={materials.green}
            position={[-0.715, -0.042, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.383]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|200_green_0"].geometry}
            material={materials.green}
            position={[-0.753, -0.157, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.017, 0.423]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|206_green_0"].geometry}
            material={materials.green}
            position={[-0.053, -0.799, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.372]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|210_green_0"].geometry}
            material={materials.green}
            position={[-0.067, -0.78, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.374]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|212_green_0"].geometry}
            material={materials.green}
            position={[-0.009, -0.909, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.386]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|214_green_0"].geometry}
            material={materials.green}
            position={[-0.033, -0.925, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.369]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|22_green_0"].geometry}
            material={materials.green}
            position={[-0.73, 0.793, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.457]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|223_green_0"].geometry}
            material={materials.green}
            position={[0.995, -0.151, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.017, 0.422]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|227_green_0"].geometry}
            material={materials.green}
            position={[0.848, -0.791, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.441]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|23_green_0"].geometry}
            material={materials.green}
            position={[-0.207, 0.544, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.37]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|233_green_0"].geometry}
            material={materials.green}
            position={[0.929, -0.887, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.41]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|239_green_0"].geometry}
            material={materials.green}
            position={[0.814, -0.561, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.385]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|240_green_0"].geometry}
            material={materials.green}
            position={[0.812, -0.543, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.428]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|241_green_0"].geometry}
            material={materials.green}
            position={[0.807, -0.524, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.364]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|244_green_0"].geometry}
            material={materials.green}
            position={[0.943, -0.524, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.019, 0.466]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|245_green_0"].geometry}
            material={materials.green}
            position={[0.969, -0.514, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.41]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|247_green_0"].geometry}
            material={materials.green}
            position={[0.919, -0.539, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.366]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|251_green_0"].geometry}
            material={materials.green}
            position={[0.94, -0.676, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.41]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|261_green_0"].geometry}
            material={materials.green}
            position={[0.723, -0.551, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.373]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|265_green_0"].geometry}
            material={materials.green}
            position={[0.728, -0.628, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.019, 0.462]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|272_green_0"].geometry}
            material={materials.green}
            position={[0.915, 0.569, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.451]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|279_green_0"].geometry}
            material={materials.green}
            position={[0.694, 0.396, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.36]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|281_green_0"].geometry}
            material={materials.green}
            position={[0.717, 0.391, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.419]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|284_green_0"].geometry}
            material={materials.green}
            position={[0.693, 0.367, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.417]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|29_green_0"].geometry}
            material={materials.green}
            position={[0.297, -0.989, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.392]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|292_green_0"].geometry}
            material={materials.green}
            position={[-0.631, 0.731, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.453]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|293_green_0"].geometry}
            material={materials.green}
            position={[-0.693, 0.724, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.447]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|295_green_0"].geometry}
            material={materials.green}
            position={[-0.525, 0.708, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.404]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|296_green_0"].geometry}
            material={materials.green}
            position={[-0.556, 0.737, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.381]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|306_green_0"].geometry}
            material={materials.green}
            position={[-0.656, 0.938, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.44]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|320_green_0"].geometry}
            material={materials.green}
            position={[-0.067, 0.576, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.019, 0.47]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|322_green_0"].geometry}
            material={materials.green}
            position={[-0.497, 0.987, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.388]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|329_green_0"].geometry}
            material={materials.green}
            position={[-0.666, 0.427, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.408]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|331_green_0"].geometry}
            material={materials.green}
            position={[-0.639, 0.471, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.016, 0.376]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|335_green_0"].geometry}
            material={materials.green}
            position={[0.451, 0.451, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.388]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|341_green_0"].geometry}
            material={materials.green}
            position={[0.116, 0.407, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.363]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|348_green_0"].geometry}
            material={materials.green}
            position={[0.153, 0.448, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.371]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|35_green_0"].geometry}
            material={materials.green}
            position={[0.021, -0.745, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.383]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|353_green_0"].geometry}
            material={materials.green}
            position={[0.346, -0.83, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.401]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|36_green_0"].geometry}
            material={materials.green}
            position={[0.005, -0.743, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.45]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|362_green_0"].geometry}
            material={materials.green}
            position={[0.484, -0.809, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.454]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|364_green_0"].geometry}
            material={materials.green}
            position={[0.438, -0.767, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.443]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|366_green_0"].geometry}
            material={materials.green}
            position={[0.405, -0.756, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.369]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|373_green_0"].geometry}
            material={materials.green}
            position={[-0.652, -0.864, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.445]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|38_green_0"].geometry}
            material={materials.green}
            position={[-0.721, -0.749, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.428]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|391_green_0"].geometry}
            material={materials.green}
            position={[-0.77, -0.722, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.442]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|393_green_0"].geometry}
            material={materials.green}
            position={[-0.663, -0.714, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.411]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|394_green_0"].geometry}
            material={materials.green}
            position={[-0.675, -0.955, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.412]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|404_green_0"].geometry}
            material={materials.green}
            position={[0.321, -0.908, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.415]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|411_green_0"].geometry}
            material={materials.green}
            position={[0.256, -0.932, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.398]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|418_green_0"].geometry}
            material={materials.green}
            position={[-0.41, 0.856, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.443]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|421_green_0"].geometry}
            material={materials.green}
            position={[-0.45, 0.84, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.401]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|425_green_0"].geometry}
            material={materials.green}
            position={[-0.131, 0.506, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.419]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|426_green_0"].geometry}
            material={materials.green}
            position={[-0.676, 0.799, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.457]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|427_green_0"].geometry}
            material={materials.green}
            position={[-0.659, 0.795, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.019, 0.463]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|431_green_0"].geometry}
            material={materials.green}
            position={[-0.7, 0.62, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.387]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|432_green_0"].geometry}
            material={materials.green}
            position={[0.617, 0.296, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.019, 0.464]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|434_green_0"].geometry}
            material={materials.green}
            position={[0.568, 0.292, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.387]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|435_green_0"].geometry}
            material={materials.green}
            position={[0.58, 0.265, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.369]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|438_green_0"].geometry}
            material={materials.green}
            position={[0.622, 0.342, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.432]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|439_green_0"].geometry}
            material={materials.green}
            position={[0.591, 0.375, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.418]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|449_green_0"].geometry}
            material={materials.green}
            position={[0.871, 0.579, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.424]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|459_green_0"].geometry}
            material={materials.green}
            position={[0.791, -0.904, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.381]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|472_green_0"].geometry}
            material={materials.green}
            position={[-0.168, -0.739, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.394]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|474_green_0"].geometry}
            material={materials.green}
            position={[-0.666, -0.188, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.366]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|477_green_0"].geometry}
            material={materials.green}
            position={[0.601, -0.886, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.449]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|485_green_0"].geometry}
            material={materials.green}
            position={[-0.423, 0.625, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.019, 0.45]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|49_green_0"].geometry}
            material={materials.green}
            position={[0.429, -0.701, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.019, 0.47]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|494_green_0"].geometry}
            material={materials.green}
            position={[0.125, -0.907, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.381]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|496_green_0"].geometry}
            material={materials.green}
            position={[0.053, -0.933, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.367]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|498_green_0"].geometry}
            material={materials.green}
            position={[0.028, -0.922, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.012, 0.019, 0.466]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|52_green_0"].geometry}
            material={materials.green}
            position={[0.4, -0.864, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.358]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|54_green_0"].geometry}
            material={materials.green}
            position={[0.423, -0.837, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.406]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|56_green_0"].geometry}
            material={materials.green}
            position={[0.291, -0.846, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.408]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|60_green_0"].geometry}
            material={materials.green}
            position={[-0.58, 0.437, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.383]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|62_green_0"].geometry}
            material={materials.green}
            position={[-0.341, 0.8, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.414]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|64_green_0"].geometry}
            material={materials.green}
            position={[-0.353, 0.917, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.011, 0.018, 0.44]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|83_green_0"].geometry}
            material={materials.green}
            position={[0.896, -0.718, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.391]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|84_green_0"].geometry}
            material={materials.green}
            position={[0.91, -0.703, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.407]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|86_green_0"].geometry}
            material={materials.green}
            position={[0.911, -0.607, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.017, 0.403]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere001|Dupli|87_green_0"].geometry}
            material={materials.green}
            position={[0.896, -0.616, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.384]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|107_green_0"].geometry}
            material={materials.green}
            position={[0.638, -0.851, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.305]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|108_green_0"].geometry}
            material={materials.green}
            position={[0.52, -0.816, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.323]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|110_green_0"].geometry}
            material={materials.green}
            position={[0.516, -0.87, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.299]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|111_green_0"].geometry}
            material={materials.green}
            position={[0.17, 0.552, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.012, 0.302]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|112_green_0"].geometry}
            material={materials.green}
            position={[0.137, 0.5, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.313]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|117_green_0"].geometry}
            material={materials.green}
            position={[-0.344, 0.55, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.386]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|118_green_0"].geometry}
            material={materials.green}
            position={[-0.328, 0.51, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.363]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|120_green_0"].geometry}
            material={materials.green}
            position={[-0.467, 0.685, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.363]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|123_green_0"].geometry}
            material={materials.green}
            position={[0.152, -0.828, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.309]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|140_green_0"].geometry}
            material={materials.green}
            position={[0.237, -0.998, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.291]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|149_green_0"].geometry}
            material={materials.green}
            position={[-0.423, 0.629, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.016, 0.377]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|150_green_0"].geometry}
            material={materials.green}
            position={[-0.388, 0.685, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.321]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|154_green_0"].geometry}
            material={materials.green}
            position={[-0.459, 0.729, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.376]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|155_green_0"].geometry}
            material={materials.green}
            position={[-0.491, 0.735, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.371]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|159_green_0"].geometry}
            material={materials.green}
            position={[-0.298, 0.565, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.368]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|160_green_0"].geometry}
            material={materials.green}
            position={[-0.287, 0.614, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.014, 0.351]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|161_green_0"].geometry}
            material={materials.green}
            position={[-0.356, 0.596, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.016, 0.376]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|170_green_0"].geometry}
            material={materials.green}
            position={[-0.774, 0.595, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.308]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|179_green_0"].geometry}
            material={materials.green}
            position={[0.586, -0.837, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.014, 0.351]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|182_green_0"].geometry}
            material={materials.green}
            position={[0.693, -0.775, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.335]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|193_green_0"].geometry}
            material={materials.green}
            position={[-0.539, -0.281, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.362]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|198_green_0"].geometry}
            material={materials.green}
            position={[-0.777, -0.059, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.293]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|209_green_0"].geometry}
            material={materials.green}
            position={[-0.089, -0.801, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.33]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|215_green_0"].geometry}
            material={materials.green}
            position={[-0.08, -0.876, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.292]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|217_green_0"].geometry}
            material={materials.green}
            position={[0.818, -0.309, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.363]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|220_green_0"].geometry}
            material={materials.green}
            position={[0.829, -0.099, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.016, 0.378]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|221_green_0"].geometry}
            material={materials.green}
            position={[0.942, -0.191, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.012, 0.302]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|229_green_0"].geometry}
            material={materials.green}
            position={[0.795, -0.786, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.355]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|230_green_0"].geometry}
            material={materials.green}
            position={[0.799, -0.777, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.356]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|231_green_0"].geometry}
            material={materials.green}
            position={[0.957, -0.862, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.338]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|232_green_0"].geometry}
            material={materials.green}
            position={[0.913, -0.77, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.33]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|238_green_0"].geometry}
            material={materials.green}
            position={[0.815, -0.57, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.37]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|24_green_0"].geometry}
            material={materials.green}
            position={[-0.224, 0.507, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.309]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|246_green_0"].geometry}
            material={materials.green}
            position={[0.969, -0.515, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.308]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|250_green_0"].geometry}
            material={materials.green}
            position={[0.96, -0.675, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.37]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|256_green_0"].geometry}
            material={materials.green}
            position={[0.933, -0.654, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.313]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|259_green_0"].geometry}
            material={materials.green}
            position={[0.71, -0.502, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.328]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|260_green_0"].geometry}
            material={materials.green}
            position={[0.724, -0.548, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.364]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|266_green_0"].geometry}
            material={materials.green}
            position={[0.708, -0.63, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.338]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|269_green_0"].geometry}
            material={materials.green}
            position={[0.319, 0.982, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.321]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|273_green_0"].geometry}
            material={materials.green}
            position={[0.849, 0.439, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.297]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|275_green_0"].geometry}
            material={materials.green}
            position={[0.916, 0.444, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.311]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|278_green_0"].geometry}
            material={materials.green}
            position={[0.505, 0.494, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.332]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|286_green_0"].geometry}
            material={materials.green}
            position={[0.644, 0.366, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.373]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|291_green_0"].geometry}
            material={materials.green}
            position={[-0.627, 0.691, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.307]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|297_green_0"].geometry}
            material={materials.green}
            position={[-0.623, 0.718, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.016, 0.38]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|305_green_0"].geometry}
            material={materials.green}
            position={[-0.638, 0.942, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.314]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|308_green_0"].geometry}
            material={materials.green}
            position={[-0.538, 0.9, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.304]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|311_green_0"].geometry}
            material={materials.green}
            position={[-0.583, 0.942, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.357]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|314_green_0"].geometry}
            material={materials.green}
            position={[-0.53, 0.864, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.315]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|317_green_0"].geometry}
            material={materials.green}
            position={[-0.784, 0.76, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.292]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|318_green_0"].geometry}
            material={materials.green}
            position={[-0.04, 0.573, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.306]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|324_green_0"].geometry}
            material={materials.green}
            position={[-0.27, 0.877, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.381]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|330_green_0"].geometry}
            material={materials.green}
            position={[-0.653, 0.45, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.328]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|334_green_0"].geometry}
            material={materials.green}
            position={[0.476, 0.489, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.332]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|337_green_0"].geometry}
            material={materials.green}
            position={[0.452, 0.349, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.385]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|344_green_0"].geometry}
            material={materials.green}
            position={[0.092, 0.492, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.363]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|346_green_0"].geometry}
            material={materials.green}
            position={[0.226, 0.491, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.294]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|347_green_0"].geometry}
            material={materials.green}
            position={[0.228, 0.442, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.386]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|356_green_0"].geometry}
            material={materials.green}
            position={[0.317, -0.807, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.36]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|357_green_0"].geometry}
            material={materials.green}
            position={[0.32, -0.791, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.308]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|378_green_0"].geometry}
            material={materials.green}
            position={[-0.622, -0.876, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.014, 0.347]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|379_green_0"].geometry}
            material={materials.green}
            position={[-0.565, -0.888, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.354]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|383_green_0"].geometry}
            material={materials.green}
            position={[-0.734, -0.506, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.356]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|386_green_0"].geometry}
            material={materials.green}
            position={[-0.724, -0.546, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.298]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|39_green_0"].geometry}
            material={materials.green}
            position={[-0.734, -0.737, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.363]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|395_green_0"].geometry}
            material={materials.green}
            position={[-0.642, -0.917, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.31]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|399_green_0"].geometry}
            material={materials.green}
            position={[0.08, -0.732, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.364]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|41_green_0"].geometry}
            material={materials.green}
            position={[-0.694, -0.693, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.336]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|417_green_0"].geometry}
            material={materials.green}
            position={[-0.409, 0.829, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.319]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|419_green_0"].geometry}
            material={materials.green}
            position={[-0.438, 0.841, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.382]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|422_green_0"].geometry}
            material={materials.green}
            position={[-0.439, 0.845, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.33]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|429_green_0"].geometry}
            material={materials.green}
            position={[-0.668, 0.846, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.3]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|43_green_0"].geometry}
            material={materials.green}
            position={[-0.7, -0.62, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.299]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|442_green_0"].geometry}
            material={materials.green}
            position={[0.851, 0.344, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.016, 0.378]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|446_green_0"].geometry}
            material={materials.green}
            position={[0.835, 0.591, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.334]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|450_green_0"].geometry}
            material={materials.green}
            position={[0.828, -0.712, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.292]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|455_green_0"].geometry}
            material={materials.green}
            position={[0.874, -0.898, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.33]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|457_green_0"].geometry}
            material={materials.green}
            position={[0.764, -0.876, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.014, 0.35]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|467_green_0"].geometry}
            material={materials.green}
            position={[0.838, -0.187, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.007, 0.012, 0.299]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|468_green_0"].geometry}
            material={materials.green}
            position={[0.863, -0.151, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.309]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|482_green_0"].geometry}
            material={materials.green}
            position={[0.579, 0.552, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.327]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|488_green_0"].geometry}
            material={materials.green}
            position={[-0.445, 0.6, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.31]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|499_green_0"].geometry}
            material={materials.green}
            position={[0.053, -0.898, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.32]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|69_green_0"].geometry}
            material={materials.green}
            position={[-0.581, 0.54, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.015, 0.352]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|7_green_0"].geometry}
            material={materials.green}
            position={[-0.696, -0.476, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.335]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|74_green_0"].geometry}
            material={materials.green}
            position={[0.935, 0.312, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.31]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|89_green_0"].geometry}
            material={materials.green}
            position={[0.808, -0.621, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.321]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|90_green_0"].geometry}
            material={materials.green}
            position={[0.926, -0.953, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.013, 0.312]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|93_green_0"].geometry}
            material={materials.green}
            position={[0.936, -0.208, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.01, 0.016, 0.386]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|94_green_0"].geometry}
            material={materials.green}
            position={[0.924, -0.453, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.009, 0.014, 0.347]}
          />
          <mesh
            geometry={nodes["Cube|Icosphere|Dupli|99_green_0"].geometry}
            material={materials.green}
            position={[-0.101, -0.701, 1]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.008, 0.014, 0.339]}
          />
        </group>
        <group
          position={[-616.572, 153.9, 3115.319]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.141}
        >
          <group position={[-7.902, 0, 0]}>
            <mesh
              geometry={nodes.Cube025_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube026_grey__0.geometry}
              material={materials.grey}
              position={[0, 0, 9.425]}
              scale={[0.736, 0.351, 0.638]}
            />
            <mesh
              geometry={nodes.Cube027_grey__0.geometry}
              material={materials.grey}
              position={[0, 0, 6.293]}
              scale={[0.736, 0.351, 0.638]}
            />
          </group>
          <mesh
            geometry={nodes.Cube002_grey__0.geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes.BezierCurve001_electric_cables_0.geometry}
            material={materials.electric_cables}
            position={[2.625, 0, 8.674]}
            rotation={[0, 0, Math.PI / 2]}
            scale={1.609}
          />
          <mesh
            geometry={nodes.Cube003_grey__0.geometry}
            material={materials.grey}
            position={[0, 0, 9.425]}
            scale={[0.736, 0.351, 0.638]}
          />
          <mesh
            geometry={nodes.Cube004_grey__0.geometry}
            material={materials.grey}
            position={[0, 0, 6.293]}
            scale={[0.736, 0.351, 0.638]}
          />
          <mesh
            geometry={nodes.Cube012_grey__0.geometry}
            material={materials.grey}
            position={[-2.078, 20.401, -0.317]}
            scale={[1.017, 0.506, 0.506]}
          />
          <mesh
            geometry={nodes.Cube013_white_0.geometry}
            material={materials.white}
            position={[-3.4, 21.654, -0.582]}
            scale={[0.78, 0.506, 0.222]}
          />
          <mesh
            geometry={nodes.Cube014_white_0.geometry}
            material={materials.white}
            position={[0.916, 21.654, -0.582]}
            scale={[0.78, 0.506, 0.222]}
          />
          <mesh
            geometry={nodes.Cube016_grey__0.geometry}
            material={materials.grey}
            position={[2.087, 20.401, -0.317]}
            scale={[1.017, 0.506, 0.506]}
          />
          <mesh
            geometry={nodes.Cube017__0.geometry}
            material={materials["Cube.017__0"]}
            position={[2.624, 0, 8.769]}
            scale={[0.025, 0.025, 0.087]}
          />
          <mesh
            geometry={nodes.Cube018__0.geometry}
            material={materials["Cube.017__0"]}
            position={[1.573, 0, 8.756]}
            scale={[0.025, 0.025, 0.082]}
          />
          <mesh
            geometry={nodes.Cube019__0.geometry}
            material={materials["Cube.017__0"]}
            position={[0, 0, 9.425]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.025, -0.025, -0.087]}
          />
          <mesh
            geometry={nodes.Cube020__0.geometry}
            material={materials["Cube.017__0"]}
            position={[0, 0, 9.425]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.025, -0.025, -0.082]}
          />
          <mesh
            geometry={nodes.Cube021__0.geometry}
            material={materials["Cube.017__0"]}
            position={[0, 0, 9.425]}
            scale={[0.025, 0.025, 0.087]}
          />
          <mesh
            geometry={nodes.Cube022__0.geometry}
            material={materials["Cube.017__0"]}
            position={[0, 0, 9.425]}
            scale={[0.025, 0.025, 0.082]}
          />
          <mesh
            geometry={nodes.Cube023__0.geometry}
            material={materials["Cube.017__0"]}
            position={[0, 0, 9.425]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.025, -0.025, -0.087]}
          />
          <mesh
            geometry={nodes.Cube024__0.geometry}
            material={materials["Cube.017__0"]}
            position={[0, 0, 9.425]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.025, -0.025, -0.082]}
          />
          <mesh
            geometry={nodes.Cube028_grey__0.geometry}
            material={materials.grey}
            position={[-5.815, 20.401, -0.317]}
            scale={[1.017, 0.506, 0.506]}
          />
          <mesh
            geometry={nodes.Cube029__0.geometry}
            material={materials["Cube.017__0"]}
            position={[-5.278, 0, 8.769]}
            scale={[0.025, 0.025, 0.087]}
          />
          <mesh
            geometry={nodes.Cube030__0.geometry}
            material={materials["Cube.017__0"]}
            position={[-6.328, 0, 8.756]}
            scale={[0.025, 0.025, 0.082]}
          />
          <mesh
            geometry={nodes.Cube031__0.geometry}
            material={materials["Cube.017__0"]}
            position={[-7.902, 0, 9.425]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.025, -0.025, -0.087]}
          />
          <mesh
            geometry={nodes.Cube032__0.geometry}
            material={materials["Cube.017__0"]}
            position={[-7.902, 0, 9.425]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.025, -0.025, -0.082]}
          />
          <mesh
            geometry={nodes.Cube033__0.geometry}
            material={materials["Cube.017__0"]}
            position={[-7.902, 0, 9.425]}
            scale={[0.025, 0.025, 0.087]}
          />
          <mesh
            geometry={nodes.Cube034__0.geometry}
            material={materials["Cube.017__0"]}
            position={[-7.902, 0, 9.425]}
            scale={[0.025, 0.025, 0.082]}
          />
          <mesh
            geometry={nodes.Cube035__0.geometry}
            material={materials["Cube.017__0"]}
            position={[-7.902, 0, 9.425]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.025, -0.025, -0.087]}
          />
          <mesh
            geometry={nodes.Cube036__0.geometry}
            material={materials["Cube.017__0"]}
            position={[-7.902, 0, 9.425]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.025, -0.025, -0.082]}
          />
          <mesh
            geometry={nodes.Cube037_grey__0.geometry}
            material={materials.grey}
            position={[-9.979, 20.401, -0.317]}
            scale={[1.017, 0.506, 0.506]}
          />
          <mesh
            geometry={nodes.Cube038_white_0.geometry}
            material={materials.white}
            position={[-11.302, 21.654, -0.582]}
            scale={[0.78, 0.506, 0.222]}
          />
          <mesh
            geometry={nodes.Cube039_white_0.geometry}
            material={materials.white}
            position={[-6.985, 21.654, -0.582]}
            scale={[0.78, 0.506, 0.222]}
          />
          <mesh
            geometry={nodes.Cylinder004_grey__0.geometry}
            material={materials.grey}
            position={[-3.4, 21.654, -0.582]}
            scale={[0.288, 0.288, 0.015]}
          />
          <mesh
            geometry={nodes.Cylinder005_grey__0.geometry}
            material={materials.grey}
            position={[-3.4, 21.654, -0.582]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.288, -0.288, -0.015]}
          />
          <mesh
            geometry={nodes.Cylinder006_black_0.geometry}
            material={materials.black}
            position={[-3.064, 21.654, -0.35]}
            scale={[0.288, 0.288, 0.015]}
          />
          <mesh
            geometry={nodes.Cylinder007_black_0.geometry}
            material={materials.black}
            position={[-3.735, 21.654, -0.35]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.288, -0.288, -0.015]}
          />
          <mesh
            geometry={nodes.Cylinder008_grey__0.geometry}
            material={materials.grey}
            position={[0.916, 21.654, -0.582]}
            scale={[0.288, 0.288, 0.015]}
          />
          <mesh
            geometry={nodes.Cylinder009_black_0.geometry}
            material={materials.black}
            position={[1.252, 21.654, -0.35]}
            scale={[0.288, 0.288, 0.015]}
          />
          <mesh
            geometry={nodes.Cylinder010_grey__0.geometry}
            material={materials.grey}
            position={[0.916, 21.654, -0.582]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.288, -0.288, -0.015]}
          />
          <mesh
            geometry={nodes.Cylinder011_black_0.geometry}
            material={materials.black}
            position={[0.581, 21.654, -0.35]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.288, -0.288, -0.015]}
          />
          <mesh
            geometry={nodes.Cylinder012_grey__0.geometry}
            material={materials.grey}
            position={[-11.302, 21.654, -0.582]}
            scale={[0.288, 0.288, 0.015]}
          />
          <mesh
            geometry={nodes.Cylinder013_black_0.geometry}
            material={materials.black}
            position={[-10.966, 21.654, -0.35]}
            scale={[0.288, 0.288, 0.015]}
          />
          <mesh
            geometry={nodes.Cylinder014_grey__0.geometry}
            material={materials.grey}
            position={[-11.302, 21.654, -0.582]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.288, -0.288, -0.015]}
          />
          <mesh
            geometry={nodes.Cylinder015_black_0.geometry}
            material={materials.black}
            position={[-11.637, 21.654, -0.35]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.288, -0.288, -0.015]}
          />
          <mesh
            geometry={nodes.Cylinder016_grey__0.geometry}
            material={materials.grey}
            position={[-6.985, 21.654, -0.582]}
            scale={[0.288, 0.288, 0.015]}
          />
          <mesh
            geometry={nodes.Cylinder017_black_0.geometry}
            material={materials.black}
            position={[-6.65, 21.654, -0.35]}
            scale={[0.288, 0.288, 0.015]}
          />
          <mesh
            geometry={nodes.Cylinder018_grey__0.geometry}
            material={materials.grey}
            position={[-6.985, 21.654, -0.582]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.288, -0.288, -0.015]}
          />
          <mesh
            geometry={nodes.Cylinder019_black_0.geometry}
            material={materials.black}
            position={[-7.321, 21.654, -0.35]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.288, -0.288, -0.015]}
          />
        </group>
        <group
          position={[-2008.969, 206.169, -1075.567]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2.575}
        >
          <group position={[0, 1130.978, 0]}>
            <mesh
              geometry={nodes.Cube009_black_0.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes["Cube009_��missif_0"].geometry}
              material={materials.missif}
            />
          </group>
          <group
            position={[42.639, 122.805, -33.103]}
            scale={[1.093, 1.093, 7.769]}
          >
            <mesh
              geometry={nodes.Cube054_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes["Cube057_barri��res_0"].geometry}
              material={materials.barrires}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[-0.168, -0.141, -7.107]}
            />
            <mesh
              geometry={nodes["Cube058_barri��res_0"].geometry}
              material={materials.barrires}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[0.168, 0.141, 7.107]}
            />
          </group>
          <mesh
            geometry={nodes.Cube007_black_0.geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes["Cube007_��missif_0"].geometry}
            material={materials.missif}
          />
        </group>
        <group
          position={[1836.797, 258.312, -229.039]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[410.308, 270.128, 171.765]}
        >
          <mesh
            geometry={nodes.Cube041_black_0.geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes.Cube041_dark_red_0.geometry}
            material={materials.dark_red}
          />
          <mesh
            geometry={nodes.Cube041_grey__0.geometry}
            material={materials.grey}
          />
        </group>
        <group
          position={[-2003.071, 154.381, -877.439]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1.298, 1.298, 46.249]}
        >
          <group position={[0, 2248.18, 0]}>
            <mesh
              geometry={nodes.Cube050_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube050_wire_mesh_0.geometry}
              material={materials.wire_mesh}
            />
          </group>
          <mesh
            geometry={nodes.Cube049_grey__0.geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes.Cube049_wire_mesh_0.geometry}
            material={materials.wire_mesh}
          />
        </group>
        <group
          position={[733.43, 105.769, 1378.628]}
          rotation={[-Math.PI / 2, 0, 0.529]}
          scale={[38.437, 22.163, 2.284]}
        >
          <mesh
            geometry={nodes.Cube077_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.Cube077_sand_0.geometry}
            material={materials.sand}
          />
          <mesh
            geometry={nodes.Cube077_yellow_0.geometry}
            material={materials.yellow}
          />
        </group>
        <group
          position={[-1600.607, 153.9, 116.317]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={55.406}
        >
          <mesh
            geometry={nodes.Cylinder002_grey__0.geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes.Cylinder002_red_0.geometry}
            material={materials.material}
          />
        </group>
        <group
          position={[-1600.607, 153.9, -156.426]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={55.406}
        >
          <mesh
            geometry={nodes.Cylinder003_grey__0.geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes.Cylinder003_red_0.geometry}
            material={materials.material}
          />
        </group>
        <group
          position={[596.952, 116.814, 1863.715]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[10.175, 10.175, 14.478]}
        >
          <mesh
            geometry={nodes.Cylinder020_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.Cylinder020_yellow_0.geometry}
            material={materials.yellow}
          />
        </group>
        <group
          position={[1543.518, 1065.891, -3170.877]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[780.371, 780.371, 997.354]}
        >
          <mesh
            geometry={nodes.Cylinder021_concrete_0.geometry}
            material={materials.concrete}
          />
          <mesh
            geometry={nodes.Cylinder021_electric_cables_0.geometry}
            material={materials.electric_cables}
          />
          <mesh
            geometry={nodes.Cylinder038_grey__0.geometry}
            material={materials.grey}
            position={[0, 0, -0.911]}
            scale={[0.985, 0.985, 0.882]}
          />
        </group>
        <group
          position={[868.07, 122.761, -2425.212]}
          scale={[17.831, 17.831, 3.042]}
        >
          <mesh
            geometry={nodes.Cylinder022_grey__0.geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes.Cylinder022_metallic_0.geometry}
            material={materials.metallic}
          />
        </group>
        <group
          position={[585.306, 116.814, 1888.957]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[10.175, 10.175, 14.478]}
        >
          <mesh
            geometry={nodes.Cylinder023_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.Cylinder023_yellow_0.geometry}
            material={materials.yellow}
          />
        </group>
        <group
          position={[1356.119, 116.814, 983.228]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[10.175, 10.175, 14.478]}
        >
          <mesh
            geometry={nodes.Cylinder024_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.Cylinder024_yellow_0.geometry}
            material={materials.yellow}
          />
        </group>
        <group
          position={[1379.375, 116.814, 983.228]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[10.175, 10.175, 14.478]}
        >
          <mesh
            geometry={nodes.Cylinder025_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.Cylinder025_yellow_0.geometry}
            material={materials.yellow}
          />
        </group>
        <group
          position={[-52.339, 1065.891, -3170.877]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[780.371, 780.371, 997.354]}
        >
          <mesh
            geometry={nodes.Cylinder039_concrete_0.geometry}
            material={materials.concrete}
          />
          <mesh
            geometry={nodes.Cylinder039_electric_cables_0.geometry}
            material={materials.electric_cables}
          />
          <mesh
            geometry={nodes.Cylinder040_grey__0.geometry}
            material={materials.grey}
            position={[0, 0, -0.911]}
            scale={[0.985, 0.985, 0.882]}
          />
        </group>
        <group
          position={[1367.728, 116.814, 1008.471]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[10.175, 10.175, 14.478]}
        >
          <mesh
            geometry={nodes.Cylinder041_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.Cylinder041_yellow_0.geometry}
            material={materials.yellow}
          />
        </group>
        <group
          position={[1405.427, 116.814, 1011.648]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[10.175, 10.175, 14.478]}
        >
          <Html distanceFactor={10}>
            <button
              className={styles.annotationBtn}
              onClick={() => setIsOpen(true)}
            >
              Residuos
            </button>
          </Html>

          <mesh
            geometry={nodes.Cylinder042_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.Cylinder042_yellow_0.geometry}
            material={materials.yellow}
          />
        </group>
        <group
          position={[573.696, 116.814, 1863.715]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[10.175, 10.175, 14.478]}
        >
          <mesh
            geometry={nodes.Cylinder055_metallic_0.geometry}
            material={materials.metallic}
          />
          <mesh
            geometry={nodes.Cylinder055_yellow_0.geometry}
            material={materials.yellow}
          />
        </group>
        <group
          position={[358.331, 391.736, 420.458]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[546.314, 284.14, 284.14]}
        >
          <group
            position={[1.088, -1.455, -0.508]}
            scale={[0.961, 0.461, 0.54]}
          >
            <group
              position={[0.868, -0.999, 0.647]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.034, 0.116, 0.135]}
            >
              <mesh
                geometry={nodes.BezierCircle001_blue_0.geometry}
                material={materials.blue}
              />
              <mesh
                geometry={nodes.BezierCircle001_yellow_0.geometry}
                material={materials.yellow}
              />
            </group>
            <mesh
              geometry={nodes.Cube008_black_0.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes.Cube008_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube008_red_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Cube008_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Text001_black_0.geometry}
              material={materials.black}
              position={[0.649, -1.011, 0.575]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.054, 0.186, 0.218]}
            />
          </group>
          <mesh
            geometry={
              nodes["piscine_et_maintenance_r��acteur_B_black_0"].geometry
            }
            material={materials.black}
          />
          <mesh
            geometry={
              nodes["piscine_et_maintenance_r��acteur_B_dark_red_0"].geometry
            }
            material={materials.dark_red}
          />
          <mesh
            geometry={
              nodes["piscine_et_maintenance_r��acteur_B_grey__0"].geometry
            }
            material={materials.grey}
          />
          <mesh
            geometry={nodes.Cube010_metallic_0.geometry}
            material={materials.metallic}
            position={[1.088, -1.477, -0.508]}
            scale={[0.981, 0.461, 0.54]}
          />
          <Html distanceFactor={10}>
            <div className={styles.annotation}>Depósitos</div>
          </Html>
        </group>
        <group
          position={[1224.531, 184.446, -152.693]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[-546.314, -284.14, -284.14]}
        >
          <mesh
            geometry={
              nodes["piscine_et_maintenance_r��acteur_B001_black_0"].geometry
            }
            material={materials.black}
          />
          <mesh
            geometry={
              nodes["piscine_et_maintenance_r��acteur_B001_dark_red_0"].geometry
            }
            material={materials.dark_red}
          />
          <mesh
            geometry={
              nodes["piscine_et_maintenance_r��acteur_B001_grey__0"].geometry
            }
            material={materials.grey}
          />
        </group>
        <group
          position={[-1060.958, 354.272, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[385.222, 1022.299, 258.829]}
        >
          <Html distanceFactor={10}>
            <div className={styles.annotation}>Sala administrativa</div>
          </Html>
          <group
            position={[-1.981, 0.829, 0.859]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.045, 0.178, 0.119]}
          >
            <mesh
              geometry={nodes.BezierCircle_blue_0.geometry}
              material={materials.blue}
              position={[5.484, -1.609, 0]}
            />
            <mesh
              geometry={nodes.BezierCircle_yellow_0.geometry}
              material={materials.yellow}
              position={[5.532, -1.609, 0]}
            />
          </group>
          <group
            position={[-1.835, 1.203, -0.53]}
            scale={[0.051, 0.005, 0.049]}
          >
            <mesh
              geometry={nodes.Cube001_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube001_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Cylinder001_grey__0.geometry}
              material={materials.grey}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
            <mesh
              geometry={nodes.Cylinder026_black_0.geometry}
              material={materials.black}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
          </group>
          <group position={[-1.72, 1.203, -0.53]} scale={[0.051, 0.005, 0.049]}>
            <mesh
              geometry={nodes.Cube005_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube005_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Cylinder027_grey__0.geometry}
              material={materials.grey}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
            <mesh
              geometry={nodes.Cylinder028_black_0.geometry}
              material={materials.black}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
          </group>
          <group
            position={[-1.608, 1.203, -0.53]}
            scale={[0.051, 0.005, 0.049]}
          >
            <mesh
              geometry={nodes.Cube006_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube006_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Cylinder029_grey__0.geometry}
              material={materials.grey}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
            <mesh
              geometry={nodes.Cylinder030_black_0.geometry}
              material={materials.black}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
          </group>
          <group
            position={[-2.192, 1.181, -0.833]}
            scale={[0.123, 0.016, 0.158]}
          >
            <group
              position={[-2.192, 31.775, 1.028]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.208, 0.104, 0.312]}
            >
              <mesh
                geometry={nodes.Cube051_grey__0.geometry}
                material={materials.grey}
              />
              <mesh
                geometry={nodes.Cube051_white_0.geometry}
                material={materials.white}
              />
              <mesh
                geometry={nodes.Cylinder037_black_0.geometry}
                material={materials.black}
                position={[0.371, 1.097, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[-0.466, -0.716, -0.099]}
              />
            </group>
            <mesh
              geometry={nodes.Cube053_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube053_windows_0.geometry}
              material={materials.windows}
            />
          </group>
          <group
            position={[-1.469, -0.56, -0.291]}
            scale={[0.014, 0.022, 0.037]}
          >
            <mesh
              geometry={nodes.Cube080_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube080_metallic_0.geometry}
              material={materials.metallic}
            />
          </group>
          <group
            position={[-1.469, -0.61, -0.291]}
            scale={[0.014, 0.022, 0.037]}
          >
            <mesh
              geometry={nodes.Cube081_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube081_metallic_0.geometry}
              material={materials.metallic}
            />
          </group>
          <mesh
            geometry={nodes.qg_grey__0.geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes.qg_white_0.geometry}
            material={materials.white}
          />
          <mesh
            geometry={nodes.qg_windows_0.geometry}
            material={materials.windows}
          />
        </group>
        <group
          position={[1836.797, 276.669, 303.345]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[314.592, 314.592, 185.803]}
        >
          <mesh
            geometry={nodes["R��acteur_B_black_0"].geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes["R��acteur_B_grey__0"].geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes["R��acteur_B_white_0"].geometry}
            material={materials.white}
          />
        </group>
        <group
          position={[1836.797, 276.669, -760.018]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={[-314.592, -314.592, -185.803]}
        >
          <Html distanceFactor={10}>
            <div className={styles.annotation}>Centro de control</div>
          </Html>
          <mesh
            geometry={nodes["R��acteur_B001_black_0"].geometry}
            material={materials.black}
          />
          <mesh
            geometry={nodes["R��acteur_B001_grey__0"].geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes["R��acteur_B001_white_0"].geometry}
            material={materials.white}
          />
        </group>
        <group
          position={[24.695, 262.926, 1860.349]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[289.182, 646.367, 165.606]}
        >
          <group
            position={[-1.016, 0.256, -0.074]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[0.03, 0.017, 0.077]}
          >
            <mesh
              geometry={nodes.Cube011_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube011_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Cylinder031_grey__0.geometry}
              material={materials.grey}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
            <mesh
              geometry={nodes.Cylinder032_black_0.geometry}
              material={materials.black}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
          </group>
          <group
            position={[-1.016, 0.187, -0.074]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[0.03, 0.017, 0.077]}
          >
            <mesh
              geometry={nodes.Cube042_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube042_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Cylinder033_grey__0.geometry}
              material={materials.grey}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
            <mesh
              geometry={nodes.Cylinder034_black_0.geometry}
              material={materials.black}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
          </group>
          <group
            position={[-1.016, 0.119, -0.074]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[0.03, 0.017, 0.077]}
          >
            <mesh
              geometry={nodes.Cube043_grey__0.geometry}
              material={materials.grey}
            />
            <mesh
              geometry={nodes.Cube043_white_0.geometry}
              material={materials.white}
            />
            <mesh
              geometry={nodes.Cylinder035_grey__0.geometry}
              material={materials.grey}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
            <mesh
              geometry={nodes.Cylinder036_black_0.geometry}
              material={materials.black}
              position={[0.371, 1.097, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[-0.466, -0.716, -0.099]}
            />
          </group>
          <mesh
            geometry={nodes["turbo-alternateur_grey__0"].geometry}
            material={materials.grey}
          />
          <mesh
            geometry={nodes["turbo-alternateur_white_0"].geometry}
            material={materials.white}
          />
          <mesh
            geometry={nodes["turbo-alternateur_windows_0"].geometry}
            material={materials.windows}
          />
        </group>
        <mesh
          geometry={nodes.Cube040_grey__0.geometry}
          material={materials.grey}
          position={[745.556, 230.476, -509.425]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[1253.065, 196.207, 112.986]}
        />
        <mesh
          geometry={nodes.Cube055_sand_0.geometry}
          material={materials.sand}
          position={[750.425, 100.917, -2113.969]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[162.35, 366.664, 1.427]}
        />
        <mesh
          geometry={nodes.Cube078_sand_0.geometry}
          material={materials.sand}
          position={[695.396, 105.683, 1861.283]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[38.437, 22.163, 2.284]}
        />
        <mesh
          geometry={nodes.Cube079_sand_0.geometry}
          material={materials.sand}
          position={[695.396, 109.936, 1861.283]}
          rotation={[-Math.PI / 2, 0, -0.596]}
          scale={[38.437, 22.163, 2.284]}
        />
        <mesh
          geometry={nodes.Plane001_black_0.geometry}
          material={materials.black}
          position={[-1613.235, 2313.765, 4133.776]}
          rotation={[0, 0, -0.576]}
          scale={[13.655, 1.813, 8.249]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/models/nuclear.glb");
