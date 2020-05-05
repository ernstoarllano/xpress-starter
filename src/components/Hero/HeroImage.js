import React from "react"
import styled from "styled-components"
import useMediaQuery from "../../hooks/useMediaQuery"

const HeroContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  background-image: ${({ image }) => `url('${image}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1023px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media (min-width: 1024px) {
    height: 100vh;
    max-height: ${({ maxHeight }) => `${maxHeight}px`};
  }
`

const HeroImage = ({ mobile, desktop, maxHeight = 562 }) => {
  const { isMediaQuery } = useMediaQuery("(min-width: 1024px)")

  const image = isMediaQuery ? desktop : mobile

  return (
    <HeroContainer image={image} maxHeight={maxHeight}>
      <h2>Content Here</h2>
    </HeroContainer>
  )
}

export default HeroImage
