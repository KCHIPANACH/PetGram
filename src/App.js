import React from 'react'
import {Router} from '@reach/router' /* --history-api-fallback se agrega a package.json para que funcione el ruteo de reachrouter o react router */
import Context from './Context'

import { GlobalStyles } from './styles/GlobalStyles'

import {Detail} from './pages/Detail'
import {Home} from './pages/Home'
import {Favs} from './pages/Favs'
import {User} from './pages/User'
import {NotRegisteredUser} from './pages/NotRegisteredUser'


import { Logo } from './components/Logo'
import {NavBar} from './components/NavBar'

import 'react-toastify/dist/ReactToastify.css'


/* const UserLogged=({children}) =>{
    return children({ isAuth: true })
    Metodo usado antes de Context, para hacer una funcionalidad parecida mas tarde.abs
}
 */

export const App = () => {
 /*  const urlParams = new window.URLSearchParams(window.location.search)  */
  /* window.location.search recupera la querystring del navegador  */
/*   const detailId = urlParams.get('detail') */
/*   console.log(detailId) */

  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
            <Home path="/"/>
            <Home path="/pet/:id" />
            <Detail path="/detail/:detailId" />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth}) => isAuth ?
          <Router>
              <Favs path="/favs" />
              <User path="/user" />
          </Router>
          :
          <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
          </Router>
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
