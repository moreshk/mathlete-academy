import { useState, useEffect } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
      setIsVisible(position > window.innerHeight * 0.8) // Show after 80% of viewport height
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isVisible
} 