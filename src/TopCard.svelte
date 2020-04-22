<script>
  export let colour = "primary";
  export let item = {};
  export let handlePopup = undefined;
</script>

<div class="card bg-{colour}">
  <div class="card-body m-0 p-2" data-toggle="popover" title="{item.alias}"
       data-trigger="focus" data-template={
       `<div class="popover dropdown-menu">
          <h3 class="popover-header"></h3>
          <div class="dropdown-item text-dark"> View <span class="popover-body m-0 p-0"></span> Concept </div>
          <div class="dropdown-item text-dark"> View <span class="popover-body m-0 p-0"></span> Detail </div>
          <div class="dropdown-item text-dark"> View Events </div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item text-dark"> View <span class="popover-body m-0 p-0"></span> Change Rules </div>
          <div class="dropdown-item text-dark"> View <span class="popover-body m-0 p-0"></span> Validation Rules </div>
          <div class="dropdown-item text-dark"> View <span class="popover-body m-0 p-0"></span> Consume Rules </div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item text-dark"> Create Concept </div>
          <div class="dropdown-item text-dark"> Create Detail </div>
          <div class="dropdown-item text-dark"> Create Event </div>
          <div class="dropdown-item text-dark"> Create Rule </div>
        </div>`} data-html={true}
        data-content={item.alias.split(' ')[0]}
        on:contextmenu|preventDefault={handlePopup}>
    <h6 class="card-title heading-{colour} flex-wrap">{item.alias}</h6>
    <p class="card-text">
    {#each item.topics as token}
      <span class="border border-ternary bg-light topic px-1 py-0 m-1 rounded">
        {token}
      </span>
    {/each}
    </p>
  </div>
</div>