import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";

const Header = () => {
  
  const [toggle, setToggle] = useState(false);
  
  const handleToggle = () => {
    setToggle(!toggle);
  };
  
  const scrollToTop =()=>{
    let time = 4;
    let scroll = window.setInterval(function(){
      let pos = window.pageYOffset;
      let step = 30;
      if( pos > 0){
        window.scrollTo( 0, pos - step)
      } else {
        window.clearInterval( scroll )
      }
    }, time)
  }
  
  return (
    <Container>
      <Title onClick={()=>scrollToTop()}>List Ui</Title>
      <Hamburger onClick={() => handleToggle()} >
        <Line toggle={toggle}/>
        <Line toggle={toggle}/>
        <Line toggle={toggle}/>
      </Hamburger>
      <SideBar handleToggle={handleToggle} toggle={toggle}/>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #999bc6;
  width: 100%;
  height: 90px;
  box-shadow: 3px 3px 3px 3px #454764;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Title = styled.div`
  font-family: var(--font-Playfair-Display);
  color: white;
  font-size: 35px;
  font-weight: bold;
  padding-left: 20px;
  cursor: pointer;
`;

const Hamburger = styled.div`
  position: relative;
  width: 50px;
  height: 34px;
  cursor: pointer;
  margin-right: 30px;
  z-index: 99;
`;

const Line = styled.div`
  display: inline-block;
  transition: all .4s;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #EDEEFF;
  border-radius: 4px;

  &:nth-child(1) {
    top: ${({ toggle }) => (toggle ? '50%' : '0')};
    transform: ${({ toggle }) => (toggle ? 'rotate(45deg)' : 'none')};
  }

  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${({ toggle }) => (toggle ? 0 : 1)};
  }

  &:nth-child(3) {
    bottom: ${({ toggle }) => (toggle ? '38%' : '0')};
    transform: ${({ toggle }) => (toggle ? 'rotate(-45deg)' : 'none')};
  }
`;