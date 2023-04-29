import { useState } from "react"

export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue)
  const [dataIndex, setProjectIndex] = useState(0)
  const openModal = (index) => {
    setIsOpen(true)
    setProjectIndex(index)
  }
  const closeModal = () => setIsOpen(false)
  return [isOpen, dataIndex, openModal, closeModal]
}
