<script>
  import SideBarItem from './SideBarItem.svelte';

  export let open = true;
</script>

<aside class="bg-light border border-primary border-2" class:open>
  <nav class="text-white">
    <SideBarItem title="Thing" sel_item="9" />
    <SideBarItem title="Thing_2" sel_item="19" />
    <SideBarItem title="Thing_3" sel_item="29" />
  </nav>
</aside>

<style>
  aside {
    position: absolute;
    margin-top: 4.5rem;
    padding-top: 1.6rem;
    width: 18vw;
    height: calc(100vh - 3.2rem);
    /* offscreen by default */
    left: -18vw;
    transition: left 0.3s ease-in-out;
  }
  .open {
    /* slide on screen */
    border-width: 4;
    left: 0;
  }
</style>
