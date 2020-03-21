<script>
  import { fly } from 'svelte/transition'
  import SideBarItem from './SideBarItem.svelte';
</script>

<aside in transition:fly="{{x: -150, duration: 500}}" class="bg-info border border-success">
  <nav class="nav flex-column text-white">
    <SideBarItem title="Thing" sel_num="9" />
    <SideBarItem title="Thing_2" sel_num="19" />
    <SideBarItem title="Thing_3" sel_num="29" />
  </nav>
</aside>

<style>
  aside {
    padding-top: 6rem;
    width: 100%;
    height: 100%;
  }
</style>
