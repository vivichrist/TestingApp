<script>
  import { fly } from 'svelte/transition'
  import SideBarItem from './SideBarItem.svelte';
</script>

<aside in transition:fly="{{x: -150, duration: 500}}" class="bg-info border border-left-0 border-bottom-0">
  <nav class="nav flex-column text-white">
    <SideBarItem title="Thing" sel_num="9" />
    <SideBarItem title="Thing_2" sel_num="19" />
    <SideBarItem title="Thing_3" sel_num="29" />
  </nav>
</aside>

<style>
  aside {
    box-shadow: 0 0 140px rgb(74, 65, 80) inset;
    border-right-color: rgb(99, 77, 77);
    padding-top: 6rem;
    width: 100%;
    height: 100%;
  }
</style>
