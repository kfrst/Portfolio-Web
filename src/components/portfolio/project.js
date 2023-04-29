import { useContext } from "react"
import { LanguageContext } from "../context/languageContext"

export const Project = (props) => {
  const { openModal, projectIndex, project } = props
  const { language } = useContext(LanguageContext)
  return (
    <article
      onClick={() => openModal(projectIndex)}
      className="w-1/2 xxs:w-4/5  md:w-3/12 p-4 mx-4 my-4 border border-gray-300 rounded-md inline-block hover:shadow-lg cursor-pointer"
    >
      <div className="flex flex-col gap-y-2 text-neutral-900">
        <img className="rounded-md" src={project.images[0]} alt={project[language].imagesTitles[0]} />
        <h4 className="text-center">{project.title}</h4>
        <p className="text-center">{project[language].preview}</p>
      </div>
    </article>
  )
}
