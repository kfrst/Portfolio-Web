import { useEffect, useState } from "react"

export const useViewport = (ref) => {
  const [isInViewport, setIsInViewport] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const { top } = ref.current.getBoundingClientRect()
      const elementH = ref.current.clientHeight
      const viewH = window.innerHeight
      const diffTop = top + elementH
      const isVisible = top <= viewH && diffTop > 0
      return setIsInViewport(isVisible)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [ref, isInViewport])

  return isInViewport
}
