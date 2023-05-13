import React from "react";
import styled from "styled-components";

const AccordionCard = (props) => {
  const { handleToggle, active, dummy } = props;
  const { header, id, text } = dummy;

  return (
    <Card active={active} onClick={() => handleToggle(id)}>
      
      <Header active={active}>
        <Title>{header}</Title>
        <Arrow active={active}>▼</Arrow>
      </Header>

      <Text>{text}</Text>
    </Card>
  );
};

export default AccordionCard;

const Card = styled.div`
  border: 1px solid gray;
  border-radius: 12px;
  margin-top: 15px;
  margin: 20px auto;
  box-shadow: 2px 2px 2px 2px gainsboro;
  display: flex;
  flex-direction: column;
  height: ${({ active }) => (active ? '250px' : '40px')};
  overflow: hidden;
  transition: 0.4s ease;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "lightblue" : "inherit")};
  align-items: center;
  padding: 10px;
`;

const Title = styled.div`
  font-family: var(--font-Playfair-Display);
  font-weight: bold;
`;

const Arrow = styled.div`
  color:${({ active }) => (active ? 'white' : 'black')};
  transform: ${({ active }) => (active ? 'rotate(-180deg)' : 'none')};
  transition: 0.3s ease;
`;

const Text = styled.div`
  margin-top: 10px;
  padding: 10px;
`;
