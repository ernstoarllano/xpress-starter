import React from "react"
import styled from "styled-components"
import HeroImage from "./HeroImage"

const HeroContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
`

const Hero = ({ type }) => {
  return (
    <HeroContainer>
      {type && type === "image" && <HeroImage />}
      <h1>Hero Text</h1>
    </HeroContainer>
  )
}

export default Hero
