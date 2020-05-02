<script>
  import { onMount } from "svelte";
  import Carga from "../Componentes/Cargador.svelte";
  export let params = {};
  let id = params.id;
  const url = "https://api.themoviedb.org/3/movie/";
  const key = "?api_key=8d1e9f57bae66f3789c247673ac7f4cf&language=es";
  const urlfinal = url + id + key;

  let pelicula = {};
  let generos = [];

  onMount(async () => {
    const res = await fetch(urlfinal);
    pelicula = await res.json();
    generos = await pelicula.genres;
  });
</script>

<style>
  .ranking {
    width: 300px;
    border: solid;
    font-size: 200px;
    font-weight: bolder;
  }
  p {
    text-align: justify;
  }
  .abajo {
    margin-top: 250px;
  }
</style>

{#await pelicula}
  <div aling="center">
    <Carga />
  </div>
{:then pelicula}
  <div class="row mt-3">
    <div class="col-sm-6">
      <img
        src="https://image.tmdb.org/t/p/w500{pelicula.poster_path}"
        width="100%"
        height="800"
        alt={pelicula.title} />
    </div>
    <div class="col-sm-6">
      <h1>{pelicula.title}</h1>
      <br />
      <br />
      <h3>Géneros</h3>
      {#each generos as item}
        <li>{item.name}</li>
      {/each}
      <br />
      <h3>Sinopsis</h3>
      <p>{pelicula.overview}</p>

      <h4>Fecha de estreno {pelicula.release_date}</h4>
      <br />

      <div class="row">
        <div class="col-sm-8">
          <div class="ranking" align="center">{pelicula.vote_average}</div>
        </div>
        <div class="col-sm-4 abajo">
          <a
            type="button"
            class="btn btn-success "
            target="_blank"
            href={pelicula.homepage}>
            Tráiler
          </a>
          <button class="btn btn-primary ">Volver</button>
        </div>
      </div>

    </div>

  </div>

{:catch error}
  <!-- promise was rejected -->
{/await}
