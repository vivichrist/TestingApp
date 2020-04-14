<script context="module">
  let categories = new Set();
  let topics = new Set();

  fetch(
    'https://agiledata-core-prd.appspot.com/tables/?apikey=977609nhgfty86HJKhjkl78')
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response for Catagory views was not ok');
    }
    return res.json()
  }).then(jsn => jsn.forEach(obj => {
    categories.add(obj.object);
    obj.topics.forEach(element => {
      topics.add(element);
    });
  }));
</script>

<script>
  import Topic from './Topic.svelte';
  import Category from './Category.svelte';
  import SubMenu from "./SubMenu.svelte";
</script>

<SubMenu />
{#each [...categories] as cat}
  <Category name="{cat[0].toUpperCase() + cat.substr(1)} View" type={cat} />
{/each}
{#each [...topics] as topic}
  <Topic name="{topic} Topic" type={topic} />
{/each}