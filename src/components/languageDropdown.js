import { useContext } from "react"
import { useVisibility } from "../assets/hooks/useVisibility"
import { LanguageContext } from "./context/languageContext"
import { useTranslation } from "react-i18next"

export const LanguageDropdown = () => {
  const { ref, isVisible, setIsVisible } = useVisibility(false)
  const { language, setLanguage } = useContext(LanguageContext)
  const { i18n } = useTranslation()
  const handleLanguage = (value) => {
    setLanguage(value)
    i18n.changeLanguage(value)
  }
  return (
    <div ref={ref} onClick={() => setIsVisible(!isVisible)}className="md:absolute md:right-8 md:top-4  rounded-md px-3 py-2 text-sm font-medium">
      <button className="px-2"><i className="fa-solid fa-earth-americas px-2"></i>{language}</button>
      {isVisible && (
        <div className="absolute bg-white border border-gray-300 rounded-md">
          <button className="w-full p-2 hover:bg-gray-100" onClick={() => handleLanguage("EN")}>English</button>
          <hr/>
          <button className="w-full p-2 hover:bg-gray-100" onClick={() => handleLanguage("ES")}>Español</button>
        </div>
      )}
    </div>
  )
}
