import React from 'react'
import styled from 'styled-components'
import { Container } from "react-bootstrap";
import ModalComponent from '../Modal/Modal';


const HeroComponent = styled.header`
  padding: 5rem 0;
  height: 60vh;
  background-image: url("https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80");
  background-size: cover;
  background-position: center;
`;

const HeaderContainer = styled.div`
  background-color: rgb(5, 148, 112);
  padding: 3rem;
  color: white;
  width: 15rem;
    border-radius: 0.5rem;
    position: absolute;
    left: 20%;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
`;

const SubHeading = styled.h3`
  margin: 1rem 0;
  font-weight: 400;
`;


const Hero = () => {
  return (
    <HeroComponent>
        <Container>
            <HeaderContainer><Heading>Feed Your Mind</Heading>
            <SubHeading>Grow, learn, and become more successful by reading some of the top
            article by highly reputable individuals</SubHeading>
            <ModalComponent
            text="Sign-up "  variant="primary"/>
            <ModalComponent  
            text="Login" variant="danger" />
            </HeaderContainer>
            
        </Container>
    </HeroComponent>
  )
}

export default Hero
