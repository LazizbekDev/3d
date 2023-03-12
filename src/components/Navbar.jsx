import React from 'react';
import styled from "styled-components";


const Section = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  padding: 10px 0;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`
const Logo = styled.img`
  height: 50px;
`
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`
const ListItem = styled.li`
  cursor: pointer;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`
export const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  background: #da4ea2;
  width: 100px;
  color: white;
`
const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src={"../../public/img/logo.png"} />

                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src={"../../public/img/search.png"} />
                    <Button>Hire me</Button>
                </Icons>
            </Container>
        </Section>
    );
};

export default Navbar;