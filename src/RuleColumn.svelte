<script>
    export let name = "";
    export let filter = "";
    export const callback = () => {};
    export let asc = "";
</script>

<th scope="col">
    <div class="input-group">
        <input type="text" class="form-control"
               placeholder={name} bind:value={filter}>
        <div class="input-group-append" on:click={callback}>
            <span class="input-group-text px-0">
                <i class="fa fa-sort{asc}"></i>
            </span>
        </div>
    </div>
</th>