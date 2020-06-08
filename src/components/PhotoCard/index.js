import React, { useEffect, useState, useRef } from 'react'
import { Button, ImgWrapper, Img, ArticleWrapper } from './styles'
import { IoMdHeartEmpty } from 'react-icons/io'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef()

  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver : import('intersection-observer')) // ejemplo de import dinamico import()
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            console.log('esta visto')
            setShow(true)
            observer.disconnect()
          }
          console.log(isIntersecting)
          console.log(entries)
        })
        observer.observe(element.current)
      })
  }, [element])

  return (
    <ArticleWrapper ref={element}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button>
              <div>
                <IoMdHeartEmpty size='32px' />
                <div> <p> {likes}</p></div>
              </div>
            </Button>
          </>
      }

    </ArticleWrapper>
  )
}
