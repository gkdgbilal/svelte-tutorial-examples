<script>
  let numbers = [1, 2, 3, 4, 5];

  const clickHandle = () => {
    // numbers.push(numbers.length + 1);
    // numbers = numbers;

    numbers = [...numbers, numbers.length + 1];
  };

  $: totalNumber = numbers.reduce((acc, cur) => (acc += cur), 0);
</script>

<button on:click={clickHandle}>Numara Ekle</button>

<p>Toplam Numara = {totalNumber}</p>
