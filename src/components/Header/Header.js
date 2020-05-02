import React from "react"
import styled from "styled-components"
import Logo from "../Logo/Logo"
import HeaderNav from "../Navigation/HeaderNav"
import HeaderActions from "./HeaderActions"

const HeaderContainer = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
`

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

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <HeaderNav />
        <HeaderActions />
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
