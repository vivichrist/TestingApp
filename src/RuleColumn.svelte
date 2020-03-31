<script>
    let sorts = [
        "/agiledata-logo-icon-purple-dropdown.svg",
        "/agiledata-logo-icon-purple-dropdown.svg",
        "/agiledata-logo-icon-grey-dropdown.svg"
    ];
    export let name = "";
    export let filter = "";
    export let column = "";
    export let callback = () => {};
    export let sort = 2;
</script>

<th scope="col">
    <div class="input-group">
        <input type="text" class="form-control"
               placeholder={name} bind:value={filter} data-toggle="tooltip"
               data-placement="bottom" title={name}>
        <div class="input-group-append" on:click={callback}>
            <span class="input-group-text px-0">
            {#if column == name}
                {#if sort == 1}
                    <img width=15 height=15 src={sorts[sort]}
                         style="transform: rotate(180deg);" alt="sorting" />
                {:else}
                    <img width=15 height=15 src={sorts[sort]} alt="sorting" />
                {/if}
            {:else}
                <img width=15 height=15 src={sorts[2]} alt="sorting" />
            {/if}
            </span>
        </div>
    </div>
</th>

<style>
  input::placeholder {
    color: #bd8eff;
  }
  input {
    color: black;
    padding: 0.125rem;
    margin: 0.0126rem;
    container: 'th';
  }
</style>