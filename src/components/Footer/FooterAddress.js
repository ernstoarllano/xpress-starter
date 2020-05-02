import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const SchemaContainer = styled.div``

const AddressContainer = styled.address`
  margin-bottom: 30px;
  font-style: normal;
`

const FooterAddress = () => {
  return (
    <StaticQuery
      query={graphql`
        query GetAddress {
          wpgraphql {
            themeGlobalOptions {
              globalMeta {
                globalAddress
                globalAddress2
                globalCity
                globalPhone
                globalState
                globalZipcode
              }
            }
          }
        }
      `}
      render={({ wpgraphql: { themeGlobalOptions } }) => {
        const {
          globalMeta: {
            globalAddress,
            globalAddress2,
            globalCity,
            globalPhone,
            globalState,
            globalZipcode,
          },
        } = themeGlobalOptions

        return (
          <>
            <SchemaContainer>
              <AddressContainer>
                {globalAddress && <span>{globalAddress}</span>}
                {globalAddress2 && <span>{globalAddress2}</span>}
                <br />
                {globalCity && <span>{globalCity},</span>}
                {globalState && <span>{globalState}</span>}
                {globalZipcode && <span>{globalZipcode}</span>}
              </AddressContainer>
              {globalPhone && (
                <a href={`tel:${globalPhone.replace(/[^0-9]/g, "")}`}>
                  {globalPhone}
                </a>
              )}
            </SchemaContainer>
          </>
        )
      }}
    />
  )
}

export default FooterAddress
