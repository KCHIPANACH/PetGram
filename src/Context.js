import React, {createContext, useState} from 'react'

export const Context = createContext()

const Provider = ({children}) =>{
    const [isAuth, setIsAuth] = useState(()=>{
        return window.sessionStorage.getItem('token')
    })
    const [isRegister, setIsRegister] = useState(false)
    const [errormsg, setError] = useState(undefined)
    const value = {
        isAuth,
        activeAutth: token =>{
            setIsAuth(true)
            window.sessionStorage.setItem('token', token)
        },
        removeAuth: ()=>{
            setIsAuth(false)
            window.sessionStorage.removeItem('token')
        },
        isRegister,
        activeRegister: ()=>{
            setIsRegister(true)
        },
        disableRegister: ()=>{
            console.log("eee")
            setIsRegister(false)
        },
        errormsg,
        disableError: ()=>{
          setError(false)
        },
        activeError: (valor)=>{
            setError(valor)
        }
    }

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )

}

export default {
    Provider,
    Consumer: Context.Consumer
}

/* 
Introducción a React.Context
Context API es una característica que tiene React para poder pasar datos en nuestra aplicación sin necesidad de usar las Props.

Para crear un contexto vamos a importar el método createContext de la librería React. El contexto que creemos no va a dejar de ser un componente de React, por ello debe llevar mayúscula al inicio.

El Context que creemos nos va a proporcionar 2 componentes:

Provider: componente que debe envolver a nuestra aplicación.
Consumer: nos va a permitir acceder a las render props que declaremos en el Provider.


Nota: El contexto es una api nativa de REACT, es parecida a la funcionalidad de Redux, se crea para tener un estado global en toda la aplicacion, ademas podemos utilizar aqui mismo funcionalidad o props de ract, como lo es en este caso
*/