import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const ChangeBtn = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Title>List Ui</Title>
      <Hamburger onClick={() => ChangeBtn()} >
        <Line toggle={toggle}/>
        <Line toggle={toggle}/>
        <Line toggle={toggle}/>
      </Hamburger>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #999bc6;
  height: 100px;
  box-shadow: 3px 3px 3px 3px gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  color: white;
  font-size: 35px;
  font-weight: bold;
  padding-left: 20px;
`;

const Hamburger = styled.div`
  position: relative;
  width: 50px;
  height: 34px;
  cursor: pointer;
  margin-right: 30px;
`;

const Line = styled.div`
  display: inline-block;
  transition: all .4s;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #fff;
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