import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"

const NavContainer = styled.nav``

const UlContainer = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
`

const ListItem = styled.li`
  + li {
    @media (min-width: 1024px) {
      margin-left: 15px;
    }
  }
`

const HeaderNav = () => {
  return (
    <StaticQuery
      query={graphql`
        query GetHeaderPages {
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

export default HeaderNav
