import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)

/* A modo de ejemplo, podemos decir que la manera en que separamos las carpetas y funcionalidades son similares a un enfoque MVC, ya que :
    M: Carpeta HOC, con WhitPhotos(solo un ejemplo) que se encarga de comunicarse con la base de datos y solicitar los datos requeridos
    V: Carpeta COMPONENTS, que se encarga de mostrar nuestros componentes presentacionales
    C: Carpeta CONTAINER, que se encarga de comunicarse con HOC y COMPONENTS. Envuelve nuestro componente presentacional con los datos requeridos y se comunica con HOC para solicitar los datos que estos ya tienen.
*/
