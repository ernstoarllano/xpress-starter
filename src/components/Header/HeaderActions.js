import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Button from "../Button/Button"

const ActionsContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }
`

const HeaderActions = () => {
  return (
    <StaticQuery
      query={graphql`
        query GetPhone {
          wpgraphql {
            themeGlobalOptions {
              globalMeta {
                globalPhone
              }
            }
          }
        }
      `}
      render={({ wpgraphql: { themeGlobalOptions } }) => {
        const {
          globalMeta: { globalPhone },
        } = themeGlobalOptions

        return (
          <ActionsContainer>
            {globalPhone && (
              <a href={`tel:${globalPhone.replace(/[^0-9]/g, "")}`}>
                {globalPhone}
              </a>
            )}
            <Button url="#" label="Reserve Now" />
          </ActionsContainer>
        )
      }}
    />
  )
}

export default HeaderActions
