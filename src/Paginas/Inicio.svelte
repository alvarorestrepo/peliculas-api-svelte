<script>
  import Grid from "../Componentes/Grid.svelte";
  import Cargador from "../Componentes/Cargador.svelte";

  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=8d1e9f57bae66f3789c247673ac7f4cf&language=es&page=1";
  // const URLtop ="https://api.themoviedb.org/3/movie/top_rated?api_key=8d1e9f57bae66f3789c247673ac7f4cf&language=es&page=1";
  let promise = AJAX();
  let peliculas = [];

  async function AJAX() {
    const res = await fetch(URL);
    peliculas = await res.json();

    if (res.ok) {
      return peliculas.results;
    } else {
      throw new Error("No hay conexion con la API");
    }
  }
</script>

<h1>Peliculas mas Populares</h1>

{#await promise}

  <div align="center">
    <Cargador />
  </div>

{:then peliculas}

  <Grid {peliculas} />

{:catch error}
  <h1 style="color:red">error</h1>
{/await}
