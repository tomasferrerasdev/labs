"use client";
import { Suspense, useState } from "react";
import styles from "./page.module.scss";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Nuclear } from "./components/Nuclear";
import Image from "next/image";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    console.log("close");
    setIsOpen(!isOpen);
  };
  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        Educational Nuclear Plant / clickear en tag residuos
      </div>

      <div className={styles.canvasContainer}>
        <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
          <button onClick={handleClose}>cerrar</button>
          <div className={styles.modalImage}>
            <Image src={`/images/radioactive.jpg`} alt="radioactive" fill />
          </div>
          <p>
            Los residuos radiactivos son residuos que contienen elementos
            químicos radiactivos que no tienen un propósito práctico. Es
            frecuentemente el subproducto de un proceso nuclear, como la fisión
            nuclear. El residuo también puede generarse durante el proceso de
            combustible para los reactores o armas nucleares o en las
            aplicaciones médicas como la radioterapia o la medicina nuclear.
          </p>
        </div>

        <Suspense fallback={null}>
          <Canvas>
            <color attach="background" args={["#d6d2ca"]} />
            <Nuclear setIsOpen={handleOpen} />
            <Environment preset="apartment" />
            <OrbitControls />
          </Canvas>
        </Suspense>
      </div>
    </main>
  );
}
