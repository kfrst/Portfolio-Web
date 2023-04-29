import {
  Portfolio_web_1,
  Portfolio_web_2,
  Portfolio_web_3,
  Portfolio_web_4,
} from "../../assets/images/portfolio"
import { FFXIVCollect_1, FFXIVCollect_2, FFXIVCollect_3 } from "../../assets/images/ffxivcollect"
import { ProjectModal } from "./projectModal"
import { useTranslation } from "react-i18next"
import { useModal } from "../../assets/hooks/useModal"
import { useViewport } from "../../assets/hooks/useViewport"
import { useRef } from "react"
import { Project } from "./project"

export const Portfolio = () => {
  const [isOpen, dataIndex, openModal, closeModal] = useModal()
  const { t } = useTranslation()
  const animatedSectionRef = useRef()
  const isInViewport = useViewport(animatedSectionRef)

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

const projects = [
  {
    id: 0,
    title: "FFXIV Collect Imitation",
    EN: {
      preview: "An imitation of a Website that tracks the collections from Final Fantasy XIV ",
      description:
        "This project is an imitation of the web \"FFXIV Collect\" that let you track your Final Fantasy XIV Collections. It uses an API, from the original web, to get the data. It's only made with React, so it doesn't have its own DB, therefore, it can't simulate a login or store user data yet.",
      imagesTitles: [
        "FFXIV Collect Imitation Home Page",
        "A list of collections from FFXIV Collect Imitation",
        "A view of a collectable",
      ],
    },
    ES: {
      preview:
        "Imitación de un sitio web que permite hacer un seguimiento de tu colección del juego Final Fantasy XIV",
      description:
        'Este proyecto es una imitación de la web oficial "FFXIV Collect". Permite realizar un seguimiento a tus colecciones provenientes del juego Final Fantasy XIV. Utiliza una API, brindada por el desarrollador de la web oficial, para obtener todos los datos del juego. Esta hecho únicamente con React, por lo que aún no cuenta con base de datos propia y no puede simular el registro de datos por usuario.',
      imagesTitles: [
        "Página inicial de FFXIV Collect Imitation",
        "Una lista de una de las colecciones de FFXIV Collect Imitation",
        "Vista de información de un objecto colectable",
      ],
    },
    tools: "React, redux-toolkit, react-router, axios, styled-components",
    url: "https://github.com/kfrst/FFXIV-Collect-Imitation",
    urlName: "FFXIV Collect Imitation (Repository)",
    images: [FFXIVCollect_1, FFXIVCollect_2, FFXIVCollect_3],
  },
  {
    id: 1,
    title: "Portfolio Web",
    EN: {
      preview: "My portfolio web, shows information about me and my personal projects",
      description:
        "My portfolio web, considered as a part of my own projects, serves as a complementary information of my CV and an additional demonstration of my skills.",
      imagesTitles: [
        "Portoflio Web Home Page",
        "A view of Resume Section",
        "A view of Projects Section",
        "A view of a project",
      ],
    },
    ES: {
      preview: "Mi portafolio, da a conocer información sobre mi y mis proyectos realizados",
      description:
        "Mi portafolio, considerado como uno de mis proyectos realizados, es utilizado como información complementaria a mi Curriculum, además de servir como demostración de mi conocimiento.",
      imagesTitles: [
        "Página inicial de Portfolio web",
        "Imagen de la sección de CV",
        "Imagen de la sección de proyectos",
        "Imagen de un proyecto seleccionado",
      ],
    },
    tools: "React, Tailwind CSS, i18n",
    url: "https://github.com/kfrst/Portfolio-web",
    urlName: "Kevin Fravega - Portfolio (Repository)",
    images: [Portfolio_web_1, Portfolio_web_2, Portfolio_web_3, Portfolio_web_4],
  },
]
