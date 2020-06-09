import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { PhotoCardWithQUery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search) /* window.location.search recupera la querystring del navegador  */
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <div>
      <GlobalStyles />
      <Logo />
      {
        detailId ? <PhotoCardWithQUery id={detailId} />
          : <> <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
            {/* eslint-disable-next-line react/jsx-closing-tag-location  */}
          </>
      }

    </div>
  )
}
