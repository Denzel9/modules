import { useState } from 'react'

export const useVisible = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 700) {
      setVisible(true)
    } else if (scrolled <= 700) {
      setVisible(false)
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', toggleVisible)
  }
  return { visible }
}
