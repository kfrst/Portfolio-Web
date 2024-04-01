import { useContext } from "react"
import { LanguageContext } from "../context/languageContext"

export const ResumeCard = (props) => {
  const { data } = props
  const { language } = useContext(LanguageContext)
  return (
    <div className="flex mb-10 w-4/5 mx-auto border border-white p-4 border-solid rounded-md text-start whitespace-pre-wrap">
      <div className="text-neutral-900">
        <p className="bg-gray-600 rounded-md inline-block py-1 px-2 text-sm text-white">
          {data[language].date}
        </p>
        <h3>{data[language].title}</h3>
        <p>{data.location}</p>
        {data[language].description && <p>{data[language].description}</p>}
      </div>
    </div>
  )
}
