import React from 'react'
import {Query} from 'react-apollo'
import {gql} from 'apollo-boost'
import {ListOfFavs} from '../components/ListOfFavs'
import Skeleton from 'react-loading-skeleton'
import {WrapperSkeleton} from './stylesFav'
 const GET_FAVS = gql`
 query getFavs {
    favs{
      id
      categoryId
      src
      likes
      userId
    }
  }
 `

 const renderProp = ({loading, error, data}) =>{ 
    if(loading) return [1, 2, 3].map((item, key) => <WrapperSkeleton key={key}><Skeleton height={147} /></WrapperSkeleton>)
    if(error) return <p>Error</p>

    const {favs} = data 

    return <ListOfFavs favs={favs} loading={loading} />

 }

 export const FavsWithQuery = () =>(
   /*  */
     <Query query={GET_FAVS} fetchPolicy='network-only' >
         {renderProp}
     </Query>
 )