/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import SiteProvider from "./src/context/SiteContext"
import { ThemeProvider } from "styled-components"
import theme from "./src/theme/theme"

export const wrapRootElement = ({ element }) => (
  <SiteProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </SiteProvider>
)
