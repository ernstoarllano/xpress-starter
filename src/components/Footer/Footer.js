import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import Logo from "../Logo/Logo"

const FooterContainer = styled.footer``

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
`

const LogoContainer = styled.div`
  width: 200px;

  img {
    object-fit: contain;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo />
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
