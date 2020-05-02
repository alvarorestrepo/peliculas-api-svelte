<script>
import Router from 'svelte-spa-router'
import { link } from 'svelte-spa-router'

</script>

<nav class="navbar navbar-expand-lg navbar-primary bg-primary">
<a href= "/" use:link class="navbar-brand text-white">Peliculas favoritas</a>
<a href= "/Peliculastop" use:link class="navbar-brand text-white">Peliculas TOP</a>
</nav>