import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"

const NavContainer = styled.nav``

const UlContainer = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
`

const ListItem = styled.li`
  + li {
    @media (min-width: 1024px) {
      margin-top: 15px;
    }
  }
`

const FooterNav = () => {
  return (
    <StaticQuery
      query={graphql`
        query GetFooterPages {
          wpgraphql {
            pages(
              where: { notIn: 30, orderby: { field: MENU_ORDER, order: ASC } }
            ) {
              edges {
                node {
                  id
                  slug
                  title
                }
              }
            }
          }
        }
      `}
      render={({ wpgraphql: { pages } }) => {
        return (
          <>
            {pages && (
              <NavContainer>
                <UlContainer>
                  {pages.edges.map(page => {
                    const { id, slug, title } = page.node

                    return (
                      <ListItem key={id}>
                        <Link to={slug}>{title}</Link>
                      </ListItem>
                    )
                  })}
                </UlContainer>
              </NavContainer>
            )}
          </>
        )
      }}
    />
  )
}

export default FooterNav
