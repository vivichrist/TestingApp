<script>
  import { fly } from 'svelte/transition';
  let visible = false;
  let placeholder = "Search";

  const focus = () => {
    visible = true;
    placeholder = "";
  }

  const blur = () => {
    visible = false;
    setTimeout( () => placeholder = "Search", 480);
  }
</script>

<style>
.trans {
  z-index: 6;
  position: absolute;
  padding-left: 4.5rem;
}
.trans::before {
  z-index: 6;
}
.mid {
  text-align: left;
}
.input-group {
  margin-top: 1.5rem;
}
@media only screen and (orientation: portrait) {
  @media screen and (min-height: 1200px) {
    .mid {
      padding-top: 500px;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  @media screen and (max-height: 1200px) {
    .mid {
      padding-top: 400;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
  @media screen and (max-height: 930px) {
    .mid {
      padding-top: 300px;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  @media screen and (max-height: 768px) {
    .mid {
      padding-top: 250px;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
  }
}
@media only screen and (orientation: landscape) {
  @media screen and (min-width: 1200px) {
    .mid {
      padding-top: 30%;
      padding-left: 15rem;
      padding-right: 15rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .mid {
      padding-top: 25%;
      padding-left: 10rem;
      padding-right: 10rem;
    }
  }
  @media screen and (max-width: 930px) {
    .mid {
      padding-top: 25%;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  @media screen and (max-width: 768px) {
    .mid {
      padding-top: 30%;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
  }
}
</style>
<div class="container-flex mid">
  {#if visible}
  <label in transition:fly="{{ y: 40, duration: 500, opacity: 1 }}" for="searchbox" class="text-dark trans">
    Search
  </label>
  {/if}
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text bg-light">
        <i class="fas fa-search text-dark"></i>
      </span>
    </div>
    <input id="searchbox" on:focus="{focus}" on:blur="{blur}"
           type="text" class="form-control p-4 m-0" placeholder="{placeholder}">
  </div>
</div>
