import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { graphql } from "gatsby"

const Page = ({
  data: {
    wpgraphql: { page },
  },
}) => {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export const query = graphql`
  query GetPage($id: ID!) {
    wpgraphql {
      page(id: $id) {
        content
        id
        slug
        title
      }
    }
  }
`

export default Page
