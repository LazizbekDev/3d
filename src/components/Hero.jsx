import React from 'react';
import styled from "styled-components";
import Navbar, {Button} from "./Navbar.jsx";
import {MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei";
import Cube from "./Cube.jsx";
import {Canvas} from "@react-three/fiber";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

const Container = styled.div`
  height: 100vh;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`
const Right = styled.div`
  flex: 3;
  position: relative;
`

const Title = styled.h1`
    font-size: 74px;
`;
const WhatWeDo = styled.div`
  margin-left: 45px;
`;
const SubTitle = styled.h2`
  position: relative;
  color: #da4ea2;
  
  &:before {
    transform: translate(-110%, -50%);
    top: 50%;
    position: absolute;
    content: "";
    width: 40px;
    height: 3px;
    border-radius: 4px;
    background: #A6A6A6;
  }
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Img = styled.img`
  position: absolute;
  width: 800px;
  height: 600px;
  object-fit: contain;
  inset: 0;
  margin: auto;
  pointer-events: none;
  
  animation: animate 2s infinite ease alternate;
  
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Think. Make. Salve.</Title>

                    <WhatWeDo>
                        <SubTitle>What We DO</SubTitle>
                    </WhatWeDo>

                    <Desc>
                        We Enjoy creating delightful
                    </Desc>

                    <Button>Learn more</Button>
                </Left>

                <Right>
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <directionalLight position={[4,2,1]}/>
                        <Sphere args={[1,100,200]} scale={2.7}>
                            <MeshDistortMaterial
                                color={'#220736'}
                                distort={.5}
                                attach={'material'}
                                speed={2}
                            />
                        </Sphere>
                    </Canvas>

                    <Img src={"../../public/img/moon.png"} />
                </Right>
            </Container>
        </Section>
    );
};

export default Hero;