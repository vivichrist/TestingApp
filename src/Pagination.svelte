<script>
  export let pages = 3;
  export let pos = 1;
  export let limit = undefined;
  export let rng = undefined;

  let arr = [];

  const update = newpos => {
    console.log(`Pagination: ${newpos}`);
    let np = Number(newpos);
    if (Number(pos) != np && np < limit && np >= 0) {
      let s = Math.max(1, Math.min(np - 1, limit - pages));
      let e = s + pages;
      arr = []
      for (let i = s; i < e; ++i) {
        arr.push(i);
      }
      pos = np;
    }
  };

  let s = Math.max(1, Math.min(pos - 1, limit - pages));
  let e = s + pages;
  for (let i = s; i < e; ++i) {
    arr.push(i);
  }
</script>

<style>
  .page-link {
    border-radius: 0.85rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
</style>

<div class="d-flex flex-row justify-content-between">
  <span class="text-primary">
    <span>Page</span>
    <div class="btn-group dropup">
      <button  type="button" id="dropdownMenuButton" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false"
               class="btn btn-outline-primary btn-xs dropdown-toggle">
        {pos}
      </button>
      <div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuButton" direction="left" aria-hidden="true">
        {#each [...Array(limit).keys()] as i}
        <button class="dropdown-item" type="button" role="menuitem"
                on:click={update(i)}>
          {i}
        </button>
        {/each}
      </div>
    </div>
    <span>of</span>
    limit
  </span>
  <nav class="nav justify-content-center" aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <button
          class="page-link"
          on:click={update(pos - 1)}
          aria-label="Previous">
          <i aria-hidden="true" class="fas fa-arrow-alt-circle-left" />
          <span class="sr-only">Previous</span>
        </button>
      </li>
      {#each arr as n}
        {#if n === pos}
          <li class="page-item active">
            <button class="page-link" on:click={update(n)}>{n}</button>
          </li>
        {:else}
          <li class="page-item">
            <button class="page-link" on:click={update(n)}>{n}</button>
          </li>
        {/if}
      {/each}
      <li class="page-item">
        <button class="page-link" on:click={update(pos + 1)} aria-label="Next">
          <i aria-hidden="true" class="fas fa-arrow-alt-circle-right" />
          <span class="sr-only">Next</span>
        </button>
      </li>
    </ul>
  </nav>
  <span class="text-primary">
    <span>Items:</span>
    <div class="btn-group dropup">
      <button  type="button" id="dropdownMenuButton" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false"
               class="btn btn-outline-primary btn-xs dropdown-toggle">
        {rng}
      </button>
      <div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuButton" direction="left" aria-hidden="true">
        {#each [...Array(16).keys()].map(n => n + 5) as i}
        <button class="dropdown-item" type="button" role="menuitem"
                on:click={() => rng = i}>
          {i}
        </button>
        {/each}
      </div>
    </div>
  </span>
</div>
