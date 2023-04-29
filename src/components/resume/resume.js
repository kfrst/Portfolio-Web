import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { ResumeCard } from "./resumeCard"
import { useViewport } from "../../assets/hooks/useViewport"
import CV from '../../assets/files/CV-Kevin-Fravega-2023.docx.pdf'

export const Resume = () => {
  const { t } = useTranslation()
  const animatedSectionRef = useRef()
  const isInViewport = useViewport(animatedSectionRef)

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

const education = [
  {
    id: 0,
    EN: { title: "Computer Science Engineer", date: "2015 - 2018" },
    ES: { title: "Ingeniería de ejecución Informática", date: "2015 - 2018" },
    location: "Pontificia Universidad Católica de Valparaíso",
    date: "2015 - 2018",
  },
  {
    id: 1,
    EN: { title: "Computer Science Engineer", date: "2015 - 2018" },
    ES: { title: "Ingeniería de ejecución Informática", date: "2015 - 2018" },
    location: "Pontificia Universidad Católica de Valparaíso",
  },
]

const experiences = [
  {
    id: 0,
    EN: {
      title: "Internship",
      date: "Jan 2018 - Feb 2018",
      description:
        "I had to refactor codes and implement new requirements as a Fullstack developer in a CRM system, using the following technologies: ASP, JS, COM+ y MySQL",
    },
    ES: {
      title: "Práctica Profesional",
      date: "Ene 2018 - Feb 2018",
      description:
        "Refactoricé código e implementé nuevos requerimientos de clientes a un software tipo CRM, utilizando las siguientes tecnologías: ASP, JS, COM+ y MySQL",
    },
    location: "Ingeniería SOLEM",
  },
  {
    id: 1,
    EN: {
      title: "Jr. Java Developer",
      date: "Mar 2019 - Oct 2019",
      description:
        "I worked with Spring/Spring Boot at a microservice architecture environment where i had to maintain old features in the back-end area and implement a product from CyberArk",
    },
    ES: {
      title: "Desarrollador Java Junior",
      date: "Mar 2019 - Oct 2019",
      description:
        "Trabajé con Spring y Spring Boot bajo una arquitectura de microservicios. Realicé mantención a antiguas funcionalidades e implenté un producto de CyberArk.",
    },
    location: "EQUIFAX",
  },
]
