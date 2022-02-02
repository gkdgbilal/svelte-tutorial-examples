<script>
  import { getPosts, addPost } from './services/posts.js';

  const clickHandle = () => {
    addPost({
      userId: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    });
  };
</script>

<button on:click={clickHandle}>Yeni Post Ekle</button>

<h2>Await Block</h2>

{#await getPosts()}
  <p>Post verileri çekiliyor..</p>
{:then data}
  {#each data as post (post.id)}
    <div>
      <h1>
        {post.title}
      </h1>
      <p>
        {post.body}
      </p>
    </div>
  {/each}
{:catch error}
  <p>
    Hata: {error}
  </p>
{/await}
