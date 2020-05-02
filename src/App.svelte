<script>
import Route from 'svelte-spa-router'
import Menu from './Componentes/Menu.svelte'
import routes from './routes.js'
</script>

<Menu/>

<div class="container">
<Route {routes}/> 
</div>