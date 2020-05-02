import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import Logo from "../Logo/Logo"

const HeaderContainer = styled.header``

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }
`

const LogoContainer = styled.div`
  width: 200px;

  img {
    object-fit: contain;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
