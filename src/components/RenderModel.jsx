"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className, camera }) => {
  return (
    <Canvas
      className={clsx("w-full h-full", className)}
      shadows={false}
      dpr={[1, 2]}
      camera={camera}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>{children}</Suspense>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 6]} intensity={1.35} color="#fff6c8" />
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
