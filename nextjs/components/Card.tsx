import React from 'react';
import styled from 'styled-components';

// Defina os tipos das propriedades
interface CardProps {
  title: string;
  description: string;
}

// Crie um componente estilizado para o card
const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 300px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card;
