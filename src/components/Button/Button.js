import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonContainer = styled.button`
  padding: 10px 30px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary1};
  border: 0;
  border-radius: 999px;
  appearance: none;
`

const Button = ({ url, label }) => {
  return (
    <Link to={url}>
      <ButtonContainer>{label}</ButtonContainer>
    </Link>
  )
}

export default Button
