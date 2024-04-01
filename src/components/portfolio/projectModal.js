import { useContext } from "react"
import { LanguageContext } from "../context/languageContext"
import { useTranslation } from "react-i18next"
import { ImageSlider } from "./imageSlider"

export const ProjectModal = (props) => {
  const { closeModal, project } = props
  const { language } = useContext(LanguageContext)
  const { t } = useTranslation()
  const handleModalClick = (e) => e.stopPropagation()
  return (
    <article
      className="fixed flex justify-center p-2 top-0 left-0 w-full h-full bg-black/50 z-50 touch-auto overflow-auto"
      onClick={closeModal}
    >
      <div
        className="relative m-auto my-4 w-auto h-fit max-w-screen-lg bg-white rounded-xl"
        onClick={handleModalClick}
      >
        <div className="p-4">
          <span className="float-right" onClick={closeModal}>
            <i className="fas fa-times" />
          </span>
          <div className="my-4">
            <h2 className="mb-4 text-center">{project.title}</h2>
            <div className="flex max-lg:flex-col max-lg:items-center">
              <div className="px-4 w-full mm:max-lg:w-3/4 lg:w-3/5 max-lg:pb-1/10">
                <ImageSlider images={project.images} imagesTitles={project[language].imagesTitles} />
              </div>
              <div className="text-neutral-900 flex flex-col px-4 w-full lg:w-2/5">
                <h3 className="mb-2">{t("project.about")}</h3>
                <p className="mb-2 whitespace-pre-wrap">{project[language].description}</p>
                <h3 className="my-2">{t("project.details")}</h3>
                <ul className="[&>li]:py-2">
                  <li>
                    <span>{t("project.tools")}</span>
                    {project.tools}
                  </li>
                  {project.deploy && (
                    <li>
                      <span>Live demo: </span>
                      <a
                        className="hover:text-neutral-700"
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </li>
                  )}
                  <li>
                    <span className="text-gray-900 gap-2">
                      <a
                        className="hover:text-neutral-700"
                        href={project.repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github pr-1" />
                        {project.repo.urlName}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
