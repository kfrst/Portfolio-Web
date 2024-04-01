import { useState } from "react"

export const ImageSlider = ({ images, imagesTitles }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const nextIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1
  const previousIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1
  const nextImage = () => {
    setImageIndex(nextIndex)
  }
  const previousImage = () => {
    setImageIndex(previousIndex)
  }
  return (
    <div className="md:h-full relative">
      {imageIndex !== nextIndex && imageIndex !== previousIndex && (
        <>
          <button
            className="absolute z-20 top-1/2 left-0 bg-[rgba(238,238,238,0.5)] hover:bg-[rgba(238,238,238,0.8)] max-sm:w-4  max-sm:h-4 max-sm:text-xs sm:w-8 sm:h-8"
            onClick={previousImage}
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button
            className="absolute z-20 top-1/2 right-0 bg-[rgba(238,238,238,0.5)] hover:bg-[rgba(238,238,238,0.8)] max-sm:w-4  max-sm:h-4 max-sm:text-xs sm:w-8 sm:h-8"
            onClick={nextImage}
          >
            <i className="fa-solid fa-chevron-right" />
          </button>{" "}
        </>
      )}
      {images.map((image, index) => {
        return (
          <div
            className={` w-full md:h-full
          ${index === imageIndex ? "animate-fade-1 z-10 translate-x-0 flex" : "hidden"}`}
            key={index}
          >
            <img
              className="w-full max-h-full md:h-full rounded-md border border-slate-300"
              src={image}
              alt={imagesTitles[index]}
            />
          </div>
        )
      })}
    </div>
  )
}
