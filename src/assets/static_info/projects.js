import { Portfolio_web_1, Portfolio_web_2, Portfolio_web_3, Portfolio_web_4 } from "../images/portfolio"
import { FFXIVCollect_1, FFXIVCollect_2, FFXIVCollect_3 } from "../images/ffxivcollect"
import { CatCuriousFact_1, CatCuriousFact_2 } from "../images/catcuriousfact"

export const PROJECTS = [
  {
    id: 0,
    title: "FFXIV Collect Imitation",
    EN: {
      preview: "An imitation of a Website that tracks the collections from Final Fantasy XIV ",
      description:
        "This project is an imitation of the web \"FFXIV Collect\" that let you track your Final Fantasy XIV Collections.\n\nIt uses an API, from the original web, to get the data. It's only made with React, so it doesn't have its own DB, therefore, it can't simulate a login or store user data yet.",
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
        'Este proyecto es una imitación de la web oficial "FFXIV Collect". Permite realizar un seguimiento a tus colecciones provenientes del juego Final Fantasy XIV.\n\nUtiliza una API, brindada por el desarrollador de la web oficial, para obtener todos los datos del juego. Esta hecho únicamente con React, sin utilización de base de datos, por lo que el objetivo inicial es meramente imitar las funcionalidades de manera visual',
      imagesTitles: [
        "Página inicial de FFXIV Collect Imitation",
        "Una lista de una de las colecciones de FFXIV Collect Imitation",
        "Vista de información de un objecto colectable",
      ],
    },
    tools: "React, redux-toolkit, react-router, axios, styled-components",
    repo: {
      url: "https://github.com/kfrst/FFXIV-Collect-Imitation",
      urlName: "FFXIV Collect Imitation (Repo)",
    },
    deploy: "",
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
    repo: {
      url: "https://github.com/kfrst/Portfolio-web",
      urlName: "Kevin Fravega - Portfolio (Repo)",
    },
    deploy: "https://kevinfravega-portfolio.vercel.app",
    images: [Portfolio_web_1, Portfolio_web_2, Portfolio_web_3, Portfolio_web_4],
  },
  {
    id: 2,
    title: "Cat Curious Fact",
    EN: {
      preview:
        "A simple Website that gets you curious facts about cats accompanied by pictures, in a card format, to make you smile",
      description:
        "This website in its simplicity, lets you learn more about cats while appreciating them.\n\nIt's made using two different APIs, one to get the Fact and the other to get images and a list of breeds to select the kind of cat that you want. Additionally, you can click the card to open a Modal that shows extra information about the breed of the cat",
      imagesTitles: ["Cat Curious Fact Example", "Cat Modal View"],
    },
    ES: {
      preview:
        "Sitio web sencillo, que genera tarjetas con datos curiosos de gatos, acompañado de fotos al azar, para alegrar el día",
      description:
        "Este sitio web permite aprender datos curiosos de los gatos, mientras ofrece imágenes al azar.\n\nLa web esta hecha con el uso de dos APIs públicas, una para obtener datos curiosos y otra para las imágenes junto con el listado de raza. Tambien se puede abrir un modal al hacer click en las tarjetas, mostrando información adicional sobre la raza del gato.",
      imagesTitles: ["Ejemplo de la página con algunos gatos", "Imagen de un Modal abierto"],
    },
    tools: "React, Tailwind CSS, Vite",
    repo: {
      url: "https://github.com/kfrst/CatCuriousFact",
      urlName: "Cat Curious Fact (Repo)",
    },
    deploy: "https://cat-curious-fact.vercel.app",
    images: [CatCuriousFact_1, CatCuriousFact_2],
  },
]
