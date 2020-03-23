
<script>
  import MenuItem from "./MenuItem.svelte";
  import TopItem from "./TopItem.svelte";
  import MenuDrop from "./MenuDrop.svelte";
  import Icon from "./Icon.svelte";

  export let user = "";
  export let pic = "";
</script>

<header class="bg-primary">
  <nav class="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-Item btn-group">
        <MenuDrop title="Icealicous"
        items="Link_1 0 Link_2 0 Link_3 0" />
      </li>
      <li class="nav-item btn-group">
        <MenuItem title="Catalog"
        items="Link_1 0 divider 0 Link_2 0 Link_3 0 divider 0 Link_4 0" />
      </li>
      <li class="nav-item btn-group">
        <MenuItem title="Events"
        items="Link_1 0 divider 0 Link_2 0 Link_3 0 divider 0 Link_4 0" />
      </li>
      <li class="nav-item btn-group">
        <MenuItem title="Rules"
        items="Add_Rules 2 divider 0 All_Rules 3 Change_Rules 4 Validation_Rules 5 Consume_Rules 6 divider 0 Lineage 7" />
      </li>
      <li class="nav-item btn-group">
        <MenuItem title="Consume"
        items="Link_1 0 divider 0 Link_2 0 Link_3 0 divider 0 Link_4 0" />
      </li>
      <li class="nav-item btn-group">
        <TopItem title="Manage" />
      </li>
    </ul>
    <ul class="navbar-nav ml-auto mr-3">
      <li class="nav-item">
        <Icon awesome="fas fa-plus" />
      </li>
      <li class="nav-item">
        <Icon awesome="fas fa-cog" />
      </li>
      <li class="nav-item">
        <div role="button" class="btn btn-primary mx-0 px-0">
          <img src={pic} class="rounded-circle user" alt={user} />
        </div>
      </li>
    </ul>
    </div>
  </nav>
</header>

<style>
  header {
    padding: 0;
    font-family: Tahoma,sans-serif;
  }
  li {
    padding: 0;
    margin: 0;
  }
  nav {
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 1260px) {
    .btn {
      font-size: 14pt;
      padding-left: 3rem;
      padding-right: 3rem;
    }
    .user {
      width: 2rem;
      height: 2rem;
      padding-left: 0;
      padding-right: 0;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  @media screen and (max-width: 1260px) {
    .btn {
      font-size: 12pt;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .user {
      width: 1.8rem;
      height: 1.8rem;
      padding-left: 0;
      padding-right: 0;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  @media screen and (max-width: 970px) {
    .btn {
      font-size: 10pt;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .user {
      width: 1.6rem;
      height: 1.6rem;
      padding-left: 0;
      padding-right: 0;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
</style>
