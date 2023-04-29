import { useState, useEffect } from "react"

export const ScrollUp = () => {
  const [isVisible, setVisible ] = useState(false)
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleVisiblity = () =>{
      window.pageYOffset > 250 ? setVisible(true) : setVisible(false)
    }
    window.addEventListener('scroll', handleVisiblity)
    return () =>{
      window.removeEventListener('scroll', handleVisiblity)
    }
  }, [])

  return(
    <>
    { isVisible && (
      <div onClick={handleScrollUp} className="fixed bottom-5 right-7 z-50 cursor-pointer p-4 rounded-full bg-gray-600 w-2 h-2 flex items-center justify-center text-white  hover:bg-teal-900">
        <i className="fa-solid fa-chevron-up"/>
      </div>
    )}
    </>
  )
}