import { Social } from "../social"
import { useTranslation } from "react-i18next"
import { Profile_1 } from "../../assets/images/portfolio"
import { useRef } from "react"
import { useViewport } from "../../assets/hooks/useViewport"

export const Home = () => {
  const sectionRef = useRef()
  const isInViewport = useViewport(sectionRef)
  const { t } = useTranslation()
  document.title = "Kevin Fravega"
  return (
    <section id="home" className="bg-white py-10 h-screen">
      <div
        ref={sectionRef}
        className={`flex max-sm:flex-col w-4/5 xl:w-1/2 h-full mx-auto max-w-screen-xl items-center justify-center gap-4 ${
          isInViewport ? "animate-fade-up" : ""
        }`}
      >
        <div className="text-neutral-900">
          <h3>
            {t("home.welcome")}
          </h3>
          <h1>
            {t("home.i")} <span className="text-gray-400">Kevin Fravega</span>
          </h1>
          <h2>{t("home.job")}</h2>
          <p>{t("home.presentation")}</p>
          <div className="flex mt-3 items-center">
            <p>{t("home.invitation")}</p>
            <Social />
          </div>
        </div>
        <div className="flex w-60 h-60 xl:w-80 xl:h-80 items-center justify-center">
          <div
            style={{ "--image-url": `url(${Profile_1})` }}
            className="w-60 h-60 xl:w-80 xl:h-80  bg-[image:var(--image-url)] bg-center bg-cover rounded-full shadow-2xl"
          ></div>
        </div>
      </div>
    </section>
  )
}
