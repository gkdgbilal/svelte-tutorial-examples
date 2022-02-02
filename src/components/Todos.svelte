<script>
  import Todo from './Todo.svelte';

  export let todos;

  
</script>

<ul>
  {#each todos as todo (todo.id)}
    <Todo on:todoChanged {todo} />
  {/each}
</ul>
