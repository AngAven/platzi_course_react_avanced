import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { PhotoCard } from '../PhotoCard'

const withPhotos = gql`
query getPhotos{
  photos{
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const ListsOfPhotoCards = () => {
  const { loading, error, data } = useQuery(withPhotos)

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul>
      {data.photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}

export { ListsOfPhotoCards }
