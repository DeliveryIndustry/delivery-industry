import { useEffect, useState } from 'react'

const getMatches = (query: string) => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches
  }
  return false
}

const useMedia = (query: string) => {
  const [matches, setMatches] = useState(getMatches(query))

  useEffect(() => {
    const matchMedia = window.matchMedia(query)
    const onChange = () => {
      setMatches(getMatches(query))
    }

    setMatches(matchMedia.matches)

    if (matchMedia.addListener) {
      matchMedia.addListener(onChange)
    } else {
      matchMedia.addEventListener('change', onChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(onChange)
      } else {
        matchMedia.removeEventListener('change', onChange)
      }
    }
  }, [query])

  return matches
}

export default useMedia
