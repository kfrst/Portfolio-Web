import { useVisibility } from "../assets/hooks/useVisibility"
import { useTranslation } from "react-i18next"

export const HeaderDropdown = () => {
  const { ref, isVisible, setIsVisible } = useVisibility(false)
  const { t } = useTranslation()
  
  return (
    <div ref={ref} onClick={() => setIsVisible(!isVisible)}className="md:absolute md:left-8 md:top-4  rounded-md px-3 py-2 text-sm font-medium">
      <button className="bg-gray-200/70 rounded-md p-2"><i className="fa-solid fa-bars"/></button>
      {isVisible && (
        <div className="absolute left-0 right-0 text-center bg-white border border-gray-300 rounded-md">
          <a href="#home" className="block w-full hover:bg-gray-100 px-3 py-2 text-sm font-medium" aria-current="page">{t("header.home")}</a>
          <hr/>
          <a href="#resume" className="block w-full hover:bg-gray-100 px-3 py-2 text-sm font-medium">{t('header.resume')}</a>
          <hr/>
          <a href="#portfolio" className="block w-full hover:bg-gray-100 px-3 py-2 text-sm font-medium">{t('header.portfolio')}</a>
          <hr/>
          <a href="#contact" className="block w-full hover:bg-gray-100 px-3 py-2 text-sm font-medium">{t('header.contact')}</a>
        </div>
      )}
    </div>
  )
}
