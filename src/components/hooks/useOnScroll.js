import { useEffect, useState } from 'react'

/* activeTop es el numero que indica cuando se debe activar u ocultar */
export function useOnScroll (activeTop) {
  const [showFixed, setShowFixed] = useState(false)
  useEffect(function () {
    const onScroll = e => {
      const nowShowFixed = window.scrollY > activeTop
      showFixed !== nowShowFixed && setShowFixed(nowShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    /* Limpiar eventos
        useEffect devuelve una función la cual podemos usar para limpiar los eventos
        */
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return [showFixed]
}
