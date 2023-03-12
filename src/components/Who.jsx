import React from 'react';
import styled from "styled-components";
import {Button} from "./Navbar.jsx";
import {OrbitControls} from "@react-three/drei";
import Cube from "./Cube.jsx";
import {Canvas} from "@react-three/fiber";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  height: 100vh;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;`

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

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{fov: 23, position: [5,5,5]}}>
                        <OrbitControls />
                        <ambientLight intensity={1}/>
                        <directionalLight position={[4,2,1]}/>

                        <Cube />
                    </Canvas>
                </Left>

                <Right>
                    <Title>Think out side the square space</Title>

                    <WhatWeDo>
                        <SubTitle>What We DO</SubTitle>
                    </WhatWeDo>

                    <Desc>
                        We Enjoy creating delightful
                    </Desc>

                    <Button>See our works</Button>

                </Right>
            </Container>
        </Section>
    );
};

export default Who;