import { useState, useEffect } from "react"

const useMediaQuery = query => {
  const [isMediaQuery, setMediaQuery] = useState(false)

  // TODO: Look into to adding listener to have effect during window resize
  useEffect(() => {
    const matchedQuery = mediaQuery => {
      if (window.matchMedia(mediaQuery).matches) {
        setMediaQuery(true)
      }
    }

    matchedQuery(query)
  }, [query])

  return { isMediaQuery }
}

export default useMediaQuery
