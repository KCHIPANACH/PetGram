import React from 'react'
import { Button, ImgWrapper, Img, ArticleWrapper } from './styles'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { useLocalStorage } from '../../components/hooks/useLocalStorage'
import { useNearScreen } from '../../components/hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? IoMdHeart : IoMdHeartEmpty

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
                <Icon size='32px' onClick={() => setLiked(!liked)} />
                <div> <p> {likes}</p></div>
              </div>
            </Button>
          </>
      }

    </ArticleWrapper>
  )
}
