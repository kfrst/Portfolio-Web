import { useState, useEffect, useRef } from "react"

export const useVisibility = (initialValue) => {
  const [isVisible, setIsVisible] = useState(initialValue)
  const ref = useRef(null)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false)
    }
  }
  useEffect(() => {
    window.addEventListener("click", handleClickOutside, true)
    return () => {
      window.removeEventListener("click", handleClickOutside, true)
    }
  }, [])

  return { ref, isVisible, setIsVisible }
}
