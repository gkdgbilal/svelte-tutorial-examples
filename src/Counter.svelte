<script>
  let count = 0;
  let count2 = 0;

  $: doubled = count * 2; //count değerini takip eder, state tutar

  // $: console.log(count);
  // $: console.log(count2);

  const handleClick = () => {
    count++;
  };
  const handleClick2 = () => {
    count2++;
  };
</script>

<button on:click={handleClick}>
  Bu butona {count} kez tıklanıldı.
</button>

{#if count == 10}
  <p>
    Bu butona tam {count} kez tıklanıldı. Tebrikler
  </p>
{:else if count == 15}
  <p style="background: lime">15. tıklama</p>
{:else if count == 20}
  <p style="background: rebeccapurple">20. tıklama</p>
{:else}
  <p>
    Bu butona {count} kez tıklanıldı.
  </p>
{/if}

<p>
  Bu sayı {doubled} değerindedir.
</p>
<hr />
<button on:click={handleClick2}>
  Bu butona {count2} tıklanıldı.
</button>
