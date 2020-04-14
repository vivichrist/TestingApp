<script>
  let titles = ["Topics", "Events", "Concepts", "Details", "History", "Consume",
                "Recently Added", "Most Viewed", "My Lists"];
</script>

<ul class="nav sticky-top vw-100 nav-fill bg-white border-bottom border-ternary">
  {#each titles as item}
    <li class="nav-item">
      <span role="button" class="nav-link under-dark">{item}</span>
    </li>
  {:else}
    <li class="nav-item">
      <span role="button" class="nav-link under-dark">No Data</span>
    </li>
  {/each}
</ul>

<style>
  ul {
    top: 4.5rem;
  }
</style>