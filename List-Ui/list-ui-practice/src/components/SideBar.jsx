import React from "react";
import { useState,useEffect } from "react";
import styled, { keyframes,css } from "styled-components";
const SideBar = ({toggle, handleToggle}) =>{

    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(toggle);

    useEffect(() => {
        // toggle 값이 true -> false 가 되는 것을 감지
        if (localVisible && !toggle) {
          setAnimate(true);
          setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisible(toggle);
      }, [localVisible, toggle]);

    if (!animate && !localVisible) return null;

    return(
        <Container disappear={!toggle} >
            <MenuWraper>
                <Menu><span>Accordian</span></Menu>
            </MenuWraper>
            
        </Container>
    )
}

export default SideBar;

const slideOpen = keyframes`
    from{
        transform: translateX(30.725rem);
    }
    to{
        transform: translateX(0px);
    }
`
const slideClose = keyframes`
    from{
        transform: translateX(0px);
    }
    to{
        transform: translateX(30.725rem);
    }
`
const Container = styled.div`
    width: 30.725rem;
    height: 100%;
    background-color: rgb(27, 38, 77);;
    position: fixed;
    z-index: 40;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: -8px 0px 5px -2px black;
    @media screen and (max-width: 768px){
        width: 50%
    }
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
    animation-name: ${slideOpen};
    ${props =>
    props.disappear &&
    css`
      animation-name: ${slideClose};
    `}
    animation-fill-mode: forwards;
`

const MenuWraper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 90px;
`

const Menu = styled.div`
    font-size: 2.2rem;
    font-family: var(--font-Playfair-Display);
    font-weight: 700;
    line-height: 1.1;
    color: white;
    padding: 20px;   
    span{
        cursor: pointer;
    }
`