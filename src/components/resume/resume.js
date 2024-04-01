import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { ResumeCard } from "./resumeCard"
import { useViewport } from "../../assets/hooks/useViewport"
import CV from "../../assets/files/CV-Kevin-Fravega-2023.docx.pdf"
import { EDUCATION, EXPERIENCES } from "../../assets/static_info/experience"

export const Resume = () => {
  const { t } = useTranslation()
  const animatedSectionRef = useRef()
  const isInViewport = useViewport(animatedSectionRef)
  const education = [...EDUCATION]
  const experiences = [...EXPERIENCES]

  return (
    <section id="resume" className="bg-gray-300 py-10 ">
      <div ref={animatedSectionRef} className={`my-0 mx-auto max-w-screen-xl`}>
        <h1 className={`mb-8 text-center ${isInViewport ? "animate-fade-up" : ""}`}>{t("resume.title")}</h1>
        <div className="flex max-sm:flex-col max-sm:items-center">
          <div
            className={`flex flex-col w-full text-center max-sm:items-center md:w-1/2 ${
              isInViewport ? "animate-fade-right" : ""
            }`}
          >
            <h2 className="mb-5">{t("resume.education")}</h2>
            {education.map((data) => {
              return <ResumeCard data={data} key={`ed-${data.id}`} />
            })}
          </div>
          <div
            className={`flex flex-col w-full text-center max-sm:items-center md:w-1/2 ${
              isInViewport ? "animate-fade-left" : ""
            }`}
          >
            <h2 className="mb-5">{t("resume.experience")}</h2>
            {experiences.map((data) => {
              return <ResumeCard data={data} key={`exp-${data.id}`} />
            })}
          </div>
        </div>
        <div className="text-center bg-gray-300">
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white p-3 hover:bg-gray-200"
          >
            {t("resume.cv")}
            <span className="p-2">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
