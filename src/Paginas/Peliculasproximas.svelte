<script>
import Carga from '../Componentes/Cargador.svelte'
import Grid from '../Componentes/Grid.svelte'
const URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=8d1e9f57bae66f3789c247673ac7f4cf&language=es&page=1'
let promise = ajax()
let peliculas = []

async function ajax(){
    const res = await fetch(URL)
    peliculas = await res.json()

    if (res.ok) {
        return peliculas.results
    }else{
        throw new Error ('Error en carga de API')
    }
}
</script>

<h1>Proximas Peliculas</h1>

{#await promise}
   <div align = 'center'>
   <Carga/>
   </div>
{:then peliculas}
  <Grid {peliculas}/>
{:catch error}
    <!-- promise was rejected -->
{/await}