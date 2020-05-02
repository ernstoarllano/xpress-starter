import React from "react"
import styled from "styled-components"
import Logo from "../Logo/Logo"
import FooterNav from "../Navigation/FooterNav"
import FooterAddress from "./FooterAddress"
import Button from "../Button/Button"

const FooterContainer = styled.footer`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.grey};

  @media (min-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

const FooterWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    align-items: flex-start;
  }
`

const FooterActions = styled.div``

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo />
        <FooterNav />
        <FooterAddress />
        <FooterActions>
          <Button url="#" label="Reserve Now" />
        </FooterActions>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
