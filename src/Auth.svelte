<script>
  let user = {
    loggedIn: false
  };

  const login = () => {
    user.loggedIn = true;
  };

  const logout = () => {
    user.loggedIn = false;
  };
</script>

{#if user.loggedIn}
  <button on:click={logout}>Çıkış Yap</button>
{:else}
  <button on:click={login}>Giriş Yap</button>
{/if}
