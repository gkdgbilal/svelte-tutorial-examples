<script>
  export let name;
</script>

<div>
  <h1>{name.toUpperCase()}</h1>
</div>

<style lang="scss">
  @import 'styles/variables';
  div {
    h1 {
      color: $color;
    }
  }
</style>
