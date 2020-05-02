<script>
import Router from 'svelte-spa-router'
import { link } from 'svelte-spa-router'

</script>


<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
  <a class="navbar-brand" href="/" use:link>Super Peliculas</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
      <li class="nav-item">
        <a class="nav-link" href="/" use:link>Peliculas Populares</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Peliculastop" use:link>Peliculas top</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Peliculasnuevas" use:link>Ultimas peliculas</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Peliculasproximas" use:link>Proximas peliculas</a>
      </li>
      
    </ul>
  </div>
</nav>