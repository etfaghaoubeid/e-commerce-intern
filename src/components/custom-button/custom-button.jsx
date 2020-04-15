import React from "react";
import styled from "styled-components";

const CustomButton = ({ children }) => (
    <ButtonContainer>
        {children}
    </ButtonContainer>
    

)
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid #fff;
  border-color: #FFF;
  color: #fff ;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: balck;
    color: rgba(255,255,255,.5);
  }
  &:focus {
    outline: none;
  } 
`;

export default CustomButton; 