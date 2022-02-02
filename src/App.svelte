<script>
  import Button from './components/Button.svelte';

  import Todos from './components/Todos.svelte';
  import { marked } from 'marked';

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
      title: 'Изучить Angular',
      completed: false
    }
  ];
  const changeHandle = event => {
    console.log(event.detail);
  };

  const clickHandle = e => {
    console.log('test click', e.target.innerText);
  };

  let name = 'Bilal',
    number1 = 1,
    number2 = 2,
    ruleAccept = false,
    value = 'bu bir **deneme**',
    selected = [],
    selectedSize,
    selectedColors = [];

  let cities = ['İstanbul', 'Samsun', 'Ankara'],
    colors = ['red', 'green', 'blue'],
    sizes = ['small', 'medium', 'large'];

  const submitHandle = () => {
    console.log('Selected Size', selectedSize);
    console.log('Selected Colors', selectedColors);
  };
</script>

<form action="" on:submit|preventDefault={submitHandle}>
  <input type="text" name="" id="" bind:value={name} />
  {name}
  <hr />
  <input type="number" bind:value={number1} /> <br />
  <input type="number" bind:value={number2} /> <br />
  {number1} + {number2} = {number1 + number2}

  <hr />
  <label>
    <input type="checkbox" name="" id="" bind:checked={ruleAccept} />
    Kuralları kabule ediyorum.
  </label>

  <hr />
  <textarea bind:value name="" id="" cols="30" rows="10" /> <br />
  {@html marked(value)}
  <hr />
  <select multiple bind:value={selected} name="" id="">
    {#each cities as city (city)}
      <option value={city}>{city}</option>
    {/each}
  </select>
  {JSON.stringify(selected)}

  {#each sizes as size (size)}
    <label>
      <input type="radio" bind:group={selectedSize} value={size} />
      {size}
    </label>
  {/each}
  {#each colors as color (color)}
    <label>
      <input type="checkbox" bind:group={selectedColors} value={color} />
      {color}
    </label>
  {/each}
  {JSON.stringify(selectedSize)} <br />
  {JSON.stringify(selectedColors)}
  <hr />
  <button type="submit" disabled={!ruleAccept}>Gönder</button>
</form>
<!-- 
<Todos on:todoChanged={changeHandle} {todos} />

<Button on:click={clickHandle} title="Tıkla bana" /> -->
