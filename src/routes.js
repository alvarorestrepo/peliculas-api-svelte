import Inicio from './Paginas/inicio.svelte'
import Peliculas from './Paginas/Peliculas.svelte'
import ErrorRuta from './Paginas/ErrorRuta.svelte'


const routes ={
    '/': Inicio,
    '/Pelicula/:id':Peliculas,
    '*':ErrorRuta
}

export default routes