import React from "react"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import { graphql } from "gatsby"

const Index = ({
  data: {
    wpgraphql: { page },
  },
}) => {
  const {
    heroMeta: { heroType, heroImage },
  } = page

  return (
    <>
      <Header />
      {heroType && <Hero type={heroType} />}
      <Footer />
    </>
  )
}

export const query = graphql`
  query GetHomeData {
    wpgraphql {
      page(id: "cGFnZTozMA==") {
        content
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
