import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import ReactLogo from "./ReactLogo.jsx";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Development = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 10] }}>
                <Suspense fallback={null}>
                    <ReactLogo />
                    <OrbitControls enableZoom={false} autoRotate />
                    <directionalLight position={[4,2,1]}/>
                </Suspense>
            </Canvas>
            <Desc>
                We design products with a strong focus on both world class design and
                ensuring your product is a market success.
            </Desc>
        </>
    );
};

export default Development;