<script>
  export let pages = 3;
  export let pos = 1;
  export let limit = undefined;
  export let rng = undefined;

  let arr = [];

  const update = newpos => {
    let np = Math.min(Number(newpos), limit);
    if (np > 0) {
      let s = Math.max(1, Math.min(np - Math.floor(pages / 2),
                       limit - (pages - 1)));
      let e = s + pages;
      arr = []
      for (let i = s; i < e; ++i) {
        arr.push(i);
      }
      pos = np;
    }
  };

  update(pos);
</script>

<style>
  .page-link {
    border-radius: 0.85rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
  #page-btn {
    width: 2.25rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }
  #np-btn {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }
</style>

<div class="d-flex flex-row justify-content-between">
  <span class="text-primary">
    <span>Page</span>
    <div class="btn-group dropup">
      <button  type="button" id="dropdownMenuButton" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false"
               class="btn btn-outline-primary btn-xs dropdown-toggle rounded-pill p-1">
        {pos}
      </button>
      <div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuButton" direction="left" aria-hidden="true">
        {#each [...Array(limit).keys()] as i}
        <button class="dropdown-item py-0" type="button" role="menuitem"
                on:click={update(i + 1)}>
          {Math.max(1, i + 1)}
        </button>
        {/each}
      </div>
    </div>
    <span>of</span>
    {limit}
  </span>
  <nav class="nav justify-content-center" aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <button
          class="btn btn-light btn-outline-primary rounded-pill m-1"
                  id="np-btn"
          on:click={update(pos - 1)}
          aria-label="Previous">
          <i aria-hidden="true" class="fas fa-angle-left" />
          <span class="sr-only">Previous</span>
        </button>
      </li>
      {#each arr as n}
        {#if n === pos}
          <li class="page-item active">
            <button class="btn btn-primary rounded-pill m-1"
                    id="page-btn"
                    on:click={update(n)}>{n}</button>
          </li>
        {:else}
          <li class="page-item">
            <button class="btn btn-outline-primary rounded-pill m-1"
                    id="page-btn"
                    on:click={update(n)}>{n}</button>
          </li>
        {/if}
      {/each}
      <li class="page-item">
        <button class="btn btn-light btn-outline-primary rounded-pill m-1"
                id="np-btn"
                on:click={update(pos + 1)} aria-label="Next">
          <i aria-hidden="true" class="fas fa-angle-right" />
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
               class="btn btn-outline-primary dropdown-toggle rounded-pill p-1">
        {rng}
      </button>
      <div class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuButton"
           direction="left" aria-hidden="true">
        {#each [10, 20, 50, 100, 200] as i}
        <button class="dropdown-item py-0" type="button" role="menuitem"
                on:click={() => {rng = i;update(1);}}>
          {i}
        </button>
        {/each}
      </div>
    </div>
  </span>
</div>
