import Inicio from './Paginas/inicio.svelte'
import Peliculas from './Paginas/Peliculas.svelte'
import Peliculastop from './Paginas/Peliculastop.svelte'
import Peliculasnuevas from './Paginas/Peliculasnuevas.svelte'
import Peliculasproximas from './Paginas/Peliculasproximas.svelte'
import ErrorRuta from './Paginas/ErrorRuta.svelte'


const routes ={
    '/': Inicio,
    '/Pelicula/:id':Peliculas,
    '/Peliculastop':Peliculastop,
    '/Peliculasnuevas':Peliculasnuevas,
    '/Peliculasproximas':Peliculasproximas,
    '*':ErrorRuta
}

export default routes