<script>
import Carga from '../Componentes/Cargador.svelte'
import Grid from '../Componentes/Grid.svelte'
const URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=8d1e9f57bae66f3789c247673ac7f4cf&language=es'
let peliculas = []
let promise = ajax()

async function ajax(){
    const res = await fetch(URL)
    peliculas = await res.json()
    console.log(peliculas);

    if (res.ok) {
        return peliculas.results
    }else{
        throw new Error('no cargo la api')
    }
}


</script>

<h1>Peliculas top</h1>

{#await promise}
  <div align='center'>
  <Carga/>
  </div>
{:then peliculas}
    <Grid {peliculas}/>
{:catch error}
    <!-- promise was rejected -->
{/await}