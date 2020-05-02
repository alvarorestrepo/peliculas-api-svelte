import Inicio from './Paginas/inicio.svelte'
import Peliculas from './Paginas/Peliculas.svelte'
import Peliculastop from './Paginas/Peliculastop.svelte'
import ErrorRuta from './Paginas/ErrorRuta.svelte'


const routes ={
    '/': Inicio,
    '/Pelicula/:id':Peliculas,
    '/Peliculastop':Peliculastop,
    '*':ErrorRuta
}

export default routes