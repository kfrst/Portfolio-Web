import { ProjectModal } from "./projectModal"
import { useTranslation } from "react-i18next"
import { useModal } from "../../assets/hooks/useModal"
import { useViewport } from "../../assets/hooks/useViewport"
import { useRef } from "react"
import { Project } from "./project"
import { PROJECTS } from "../../assets/static_info/projects"

export const Portfolio = () => {
  const [isOpen, dataIndex, openModal, closeModal] = useModal()
  const { t } = useTranslation()
  const animatedSectionRef = useRef()
  const isInViewport = useViewport(animatedSectionRef)
  const projects = [...PROJECTS]

  return (
    <section id="portfolio" className={`bg-white py-10 `}>
      <div ref={animatedSectionRef} className={`mx-auto max-w-screen-xl `}>
        <h1 className={`mb-8 text-center ${isInViewport ? "animate-fade-up" : ""}`}>
          {t("portfolio.title")}
        </h1>
        <div
          className={`py-8 flex flex-col md:flex-row flex-wrap justify-center items-center md:items-stretch ${
            isInViewport ? "animate-fade-up" : ""
          }`}
        >
          {projects.map((project, index) => {
            return <Project openModal={openModal} projectIndex={index} project={project} key={project.id} />
          })}
        </div>
        {isOpen && <ProjectModal closeModal={closeModal} project={projects[dataIndex]} />}
      </div>
    </section>
  )
}
