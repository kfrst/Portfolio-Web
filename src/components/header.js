import { useTranslation } from "react-i18next"
import { LanguageDropdown } from "./languageDropdown"
import { HeaderDropdown } from "./headerDropdown"

export const Header = () => {
  const { t } = useTranslation()
  return(
    <nav className="bg-transparent fixed w-full backdrop-blur-xs z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center md:justify-center relative">
          <div className="flex hidden md:block md:items-center">
            <div className="hidden md:block">
              <div className="text-black ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">{t("header.home")}</a>
                <a href="#resume" className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{t('header.resume')}</a>
                <a href="#portfolio" className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{t('header.portfolio')}</a>
                <a href="#contact" className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">{t('header.contact')}</a>
              </div>
              <LanguageDropdown/>
            </div>
          </div>
          <div className="flex w-full items-center justify-between md:hidden">
              <HeaderDropdown/>
              <LanguageDropdown/>
          </div>
        </div>  
      </div>
    </nav>
  )
}
