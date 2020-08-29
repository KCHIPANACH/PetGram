import React, {useContext, Suspense} from 'react'
import {Router, Redirect} from '@reach/router' /* --history-api-fallback se agrega a package.json para que funcione el ruteo de reachrouter o react router */
import {Context} from './Context'

import { GlobalStyles } from './styles/GlobalStyles'

/* import {Detail} from './pages/Detail'
import {Home} from './pages/Home'
import {Favs} from './pages/Favs'
import {User} from './pages/User'
import {NotRegisteredUser} from './pages/NotRegisteredUser'
import {NotFound} from './pages/NotFound' */


import { Logo } from './components/Logo'
import {NavBar} from './components/NavBar'

import 'react-toastify/dist/ReactToastify.css'


/* const UserLogged=({children}) =>{
    return children({ isAuth: true })
    Metodo usado antes de Context, para hacer una funcionalidad parecida mas tarde.abs
}
 */

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
 /*  const urlParams = new window.URLSearchParams(window.location.search)  */
  /* window.location.search recupera la querystring del navegador  */
/*   const detailId = urlParams.get('detail') */
/*   console.log(detailId) */
   const {isAuth} = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        {/* noThrow se agrega a los redirect ya que sin este me sale un error de reach router, debo investigar porque sale esto, no lo olvides */}
            <NotFound default />
            <Home path="/"/>
            <Home path="/pet/:id" />
            <Detail path="/detail/:detailId" />
            {!isAuth && <NotRegisteredUser path='/login' />}
            {!isAuth && <Redirect from='/favs' to="/login" noThrow />} 
            {!isAuth && <Redirect from='/user' to="/login" noThrow />}
            {isAuth && <Redirect from='/login' to="/" noThrow />}
            <Favs path="/favs" />
            <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  )
}
