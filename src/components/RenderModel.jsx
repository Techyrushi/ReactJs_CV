"use client";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const SceneLights = () => {
  return (
    <>
      <hemisphereLight args={["#ffe9b0", "#17150f", 0.9]} />
      <ambientLight intensity={0.55} color="#fff3d4" />
      <directionalLight position={[4, 6, 5]} intensity={1.55} color="#fff1c2" />
      <directionalLight position={[-5, 1.5, -3]} intensity={0.35} color="#7ea2ff" />
      <pointLight position={[0, 2.4, 3.2]} intensity={0.7} color="#fefe5b" distance={14} />
    </>
  );
};

const RenderModel = ({ children, className, camera }) => {
  return (
    <Canvas
      className={clsx("w-full h-full", className)}
      shadows={false}
      dpr={[1, 1.5]}
      camera={camera}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
      }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Suspense fallback={null}>
        <SceneLights />
        {children}
      </Suspense>
    </Canvas>
  );
};

export default RenderModel;
