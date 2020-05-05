import React from "react"
import styled from "styled-components"
import { StaticQuery, query, graphql } from "gatsby"

const PortalIconsContainer = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    grid-gap: 30px;
  }
`

const PortalIconContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }
`

const PortalIcons = ({ portals }) => {
  return (
    <>
      {portals && (
        <PortalIconsContainer columns={portals.length}>
          {portals.map((portal, key) => {
            return (
              <PortalIconContainer key={key}>
                <div
                  dangerouslySetInnerHTML={{ __html: portal.iconPortalContent }}
                />
              </PortalIconContainer>
            )
          })}
        </PortalIconsContainer>
      )}
    </>
  )
}

export default PortalIcons
