import { useState } from "react"

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const [dataIndex, setProjectIndex] = useState(0)
  const openModal = (index) => {
    setIsOpen(true)
    setProjectIndex(index)
    document.body.style.overflow = "hidden"
  }
  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = "visible"
  }
  return [isOpen, dataIndex, openModal, closeModal]
}
