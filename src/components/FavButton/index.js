import React from 'react'
import { Button } from './styles'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? IoMdHeart : IoMdHeartEmpty
  return (
    <Button>
      <div>
        <Icon size='32px' onClick={onClick} />
        <div> <p> {likes}</p></div>
      </div>
    </Button>
  )
}
