<script>
  import Sidebar from './SideBar.svelte';
  import Managed from './Managed.svelte';

  export let index = 0;
</script>

<div class="container-flex">
  <div class="row align-items-center justify-center">
    <div class="col-3 col-md-auto col-sm-auto">
      <Sidebar />
    </div>
    <div class="col-9 align-self-center">
      <Managed {index}/>
    </div>
  </div>
</div>

<style>
  .col-3 {
    height: 100vh;
  }
</style>
