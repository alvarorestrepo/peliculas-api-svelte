<script>
import { createEventDispatcher} from 'svelte'
const dispach = createEventDispatcher()
export let imagen
export let titulo

function ver() {
    dispach('ver-mas')
}
</script>

<div class="card mb-3" style="width: 18rem;">
  <img src="https://image.tmdb.org/t/p/w500{imagen}" width="100%" height="500" alt={titulo}>
  <div class="card-body">
    <h5 class="card-title">{titulo}</h5>
    <button  class="btn btn-primary" on:click = {ver}>Ver mas...</button>
  </div>
</div>