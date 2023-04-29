import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <section id="contact" className="bg-gray-300 py-4 border border-t-2">
      <div className="flex flex-col my-0 mx-auto max-w-xs xs:max-w-screen-xl items-center text-center max-xs:text-xs  text-neutral-900">
        <div className="flex">
          <div className="flex flex-col w-max py-2 px-4 xs:py-4 xs:px-8">
            <h2 className="max-xs:text-xs">{t("footer.contact")}</h2>
            <p>{t("footer.where")}</p>
          </div>
          <div className="flex flex-col w-max py-2 px-4 xs:py-4 xs:px-8">
            <ul>
              <li>
                <a
                  className="flex items-center gap-2 [&>span]:hover:text-gray-700 [&>p]:hover:text-neutral-700"
                  href="mailto:kevinfravega@gmail.com"
                >
                  <span className="text-gray-900">
                    <i className="fas fa-envelope" />
                  </span>
                  <p>kevinfravega@gmail.com</p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 [&>span]:hover:text-gray-700 [&>p]:hover:text-neutral-700"
                  href="https://github.com/kfrst"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-900">
                    <i className="fab fa-github" />
                  </span>
                  <p>Github</p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 [&>span]:hover:text-gray-700 [&>p]:hover:text-neutral-700"
                  href="https://www.linkedin.com/in/kevin-fravega-stevenson-3b718815a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-900">
                    <i className="fab fa-linkedin" />
                  </span>
                  <p>LinkedIn</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p>© 2023 Kevin Fravega. {t("footer.copyright")}</p>
      </div>
    </section>
  )
}
