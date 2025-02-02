import { useState, useEffect } from 'react'

export function useScrollPosition() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setIsVisible(position > window.innerHeight * 0.8) // Show after 80% of viewport height
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isVisible
} 