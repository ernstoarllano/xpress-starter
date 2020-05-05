import React from "react"
import Header from "../components/Header/Header"
import HeroImage from "../components/Hero/HeroImage"
import PortalIcons from "../components/Portal/PortalIcons"
import Footer from "../components/Footer/Footer"
import { graphql } from "gatsby"

const Index = ({
  data: {
    wpgraphql: { page },
  },
}) => {
  const { frontendComponents, heroMeta } = page
  const { componentType, iconPortals } = frontendComponents || {}
  const { heroType, heroImage } = heroMeta || {}

  return (
    <>
      <Header />
      {heroType && heroType === "image" && heroImage && (
        <HeroImage
          mobile={heroImage.imageFile.childImageSharp.mobile.src}
          desktop={heroImage.imageFile.childImageSharp.desktop.src}
        />
      )}
      {componentType && componentType === "icon-portals" && (
        <PortalIcons portals={iconPortals} />
      )}
      <Footer />
    </>
  )
}

export const query = graphql`
  query GetHomeData {
    wpgraphql {
      page(id: "cGFnZTozMA==") {
        content
        frontendComponents {
          componentType
          iconPortals {
            iconPortalIcon {
              guid
              imageFile {
                publicURL
              }
            }
            iconPortalContent
          }
        }
        heroMeta {
          heroType
          heroImage {
            guid
            imageFile {
              childImageSharp {
                mobile: fixed(width: 960, height: 775) {
                  ...GatsbyImageSharpFixed
                }
                desktop: fixed(width: 1920, height: 775) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Index
