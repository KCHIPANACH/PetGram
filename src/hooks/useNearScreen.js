import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' // esta validacion es para cargar el polyfill solo si el navegador lo necesita
        ? window.IntersectionObserver : import('intersection-observer')) // ejemplo de import dinamico, import(), esto para que solo se importe cuando el hook lo necesite
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0] // esto lo saco de entries.isIntersecting
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })
  }, [element])

  return [show, element]
}
