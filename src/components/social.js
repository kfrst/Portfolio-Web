export const Social = () => {
  return (
    <div className="flex mx-4 gap-2">
      <span>
        <a
          href="https://www.linkedin.com/in/kevin-fravega-stevenson-3b718815a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-center rounded-full w-12 h-12 p-6 border border-slate-300 hover:border-black hover:scale-110">
            <i className="fab fa-linkedin text-2xl bg-white color-black" />
          </div>
        </a>
      </span>
      <span>
        <a href="https://github.com/kfrst" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center rounded-full w-12 h-12 p-6 border border-slate-300 hover:border-black hover:scale-110">
            <i className="fab fa-github text-2xl" />
          </div>
        </a>
      </span>
    </div>
  )
}
