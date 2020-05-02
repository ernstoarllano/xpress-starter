import React, { createContext, useState } from "react"

export const SiteContext = createContext()

const SiteProvider = ({ children }) => {
  const [state, setState] = useState({
    mobileMenu: false,
  })

  const toggleMobileMenu = open => {
    setState(...state, { mobileMenu: open })
  }

  return (
    <SiteContext.Provider value={{ state, toggleMobileMenu }}>
      {children}
    </SiteContext.Provider>
  )
}

export default SiteProvider
