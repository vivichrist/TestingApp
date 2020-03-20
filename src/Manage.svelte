<script>
  import Sidebar from './SideBar.svelte';
  import Managed from './Managed.svelte';

  export let open = true;
</script>

<Sidebar bind:open/>
<Managed/>
