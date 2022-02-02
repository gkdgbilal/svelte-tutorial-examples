<script>
  import { ImagePreview } from './utils';

  let image;
  const handleChange = async e => {
    image = await ImagePreview(e.target.files[0]);
  };
</script>

<input type="file" accept="image/*" on:change={handleChange} />

{#if image}
  <img src={image} alt="" />
{/if}
