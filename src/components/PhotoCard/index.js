import React from 'react'
import { ImgWrapper, Img, ArticleWrapper } from './styles'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <ArticleWrapper ref={element}>
      {
        show &&
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavButton = () => {
                    !liked && toggleLike({
                      variables: { input: { id } }
                    })
                    setLiked(!liked)
                  }
                  return <FavButton liked={liked} likes={likes} onClick={handleFavButton} />
                }
              }

            </ToggleLikeMutation>
          </>
      }

    </ArticleWrapper>
  )
}
