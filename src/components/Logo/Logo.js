import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"

const LogoContainer = styled.div`
  width: 200px;

  img {
    object-fit: contain;
  }
`

const Logo = () => {
  return (
    <StaticQuery
      query={graphql`
        query GetLogoData {
          wpgraphql {
            allSettings {
              generalSettingsTitle
            }
            themeGlobalOptions {
              globalMeta {
                globalLogo {
                  guid
                  imageFile {
                    publicURL
                  }
                }
              }
            }
          }
        }
      `}
      render={({ wpgraphql: { allSettings, themeGlobalOptions } }) => {
        const {
          globalMeta: {
            globalLogo: { imageFile },
          },
        } = themeGlobalOptions
        const { generalSettingsTitle } = allSettings

        return (
          <LogoContainer>
            <Link to="/">
              <img src={imageFile.publicURL} alt={generalSettingsTitle} />
            </Link>
          </LogoContainer>
        )
      }}
    />
  )
}

export default Logo
