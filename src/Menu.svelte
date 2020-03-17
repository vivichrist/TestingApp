
<script>
  import MenuItem from "./MenuItem.svelte";
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
        <button type="button" class="btn btn-dark px-3 py-0 mx-4 my-3 dropdown-toggle" data-toggle="dropdown">
          Icealicous
        </button>
        <div class="dropdown-menu mt-3 ml-3">
          <a class="dropdown-item" href="#">Link 1</a>
          <a class="dropdown-item" href="#">Link 2</a>
          <a class="dropdown-item" href="#">Link 3</a>
        </div>
      </li>
      <li class="nav-item btn-group">
        <div role="button" class="btn btn-primary py-4 border-0" data-toggle="dropdown">
          Catalog
        </div>
        <div class="dropdown-menu bg-light mt-3">
          <a class="dropdown-item text-dark" href="#">Link 1</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-dark" href="#">Link 2</a>
          <a class="dropdown-item text-dark" href="#">Link 3</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-dark" href="#">Link 4</a>
        </div>
      </li>
      <li class="nav-item btn-group">
      <MenuItem title="Events"
      items="Link_1 # divider # Link_2 # Link_3 # divider # Link_4 #" />
      </li>
      <li class="nav-item btn-group">
        <MenuItem title="Rules"
        items="Add_Rules # divider # All_Rules # Change_Rules # Validation_Rules # Consume_Rules # divider # Lineage #" />
      </li>
      <li class="nav-item btn-group">
        <MenuItem title="Consume"
        items="Link_1 # divider # Link_2 # Link_3 # divider # Link_4 #" />
      </li>
      <li class="nav-item btn-group">
        <MenuItem title="Manage"
        items="Link_1 # divider # Link_2 # Link_3 # divider # Link_4 #" />
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
  @media screen and (min-width: 1200px) {
    .dropdown-item {
      font-size: 14pt;
    }
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
  @media screen and (max-width: 1200px) {
    .dropdown-item {
      font-size: 12pt;
    }
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
  @media screen and (max-width: 930px) {
    .dropdown-item {
      font-size: 11pt;
    }
    .btn {
      font-size: 11pt;
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
