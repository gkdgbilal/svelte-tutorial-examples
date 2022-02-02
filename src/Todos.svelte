<script>
  import TodoItem from './TodoItem.svelte';
  let todos = [
    {
      id: 1,
      title: 'Изучить JavaScript',
      completed: true
    },
    {
      id: 2,
      title: 'Изучить React',
      completed: false
    },
    {
      id: 3,
      title: 'Написать приложение',
      completed: false
    }
  ];
  const clickHandle = () => {
    todos = todos.slice(1);
  };
</script>

<button on:click={clickHandle}>İlk elemanı çıkar</button>

<ul>
  {#each todos as todo, i (todo.id)}
    <!-- parantez içindeki key -->
    <TodoItem {todo} {i} />
  {/each}
</ul>

{#each Array(5) as _, i}
  <div>
    {i}
  </div>
{/each}
