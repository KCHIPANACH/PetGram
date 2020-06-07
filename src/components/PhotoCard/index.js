import React from 'react'
import { Button, ImgWrapper, Img, ArticleWrapper } from './styles'
import { IoMdHeartEmpty } from 'react-icons/io'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <ArticleWrapper>
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
    </ArticleWrapper>
  )
}
