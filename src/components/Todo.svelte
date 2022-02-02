<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let todo;

  const doneToggle = () => {
    todo.completed = !todo.completed;
    dispatch('todoChanged', todo);
  };
</script>

<li on:click={doneToggle}>
  {todo.title}
  {#if todo.completed}
    <span class="completed-checkbox">✔</span>
  {/if}
</li>

<style>
  span {
    background: green;
    color: #fff;
    padding: 3px 6px;
    border-radius: 3px;
  }
</style>
