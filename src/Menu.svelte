<script context="module">
  let menus = {
    Icealicous: "Link_1 13 Link_2 13 Link_3 13",
    Events: "Link_1 13 divider 0 Link_2 13 Link_3 13 divider 0 Link_4 13",
    Rules: "Add_Rules 13 divider 0 All_Rules 1 Change_Rules 1 Validation_Rules 13 Consume_Rules 13 divider 0 Lineage 13",
    Consume: "Link_1 13 divider 0 Link_2 13 Link_3 13 divider 0 Link_4 13",
    Plus: "Blah 13 divider 0 Blah_Blah 13"
  };
</script>

<script>
  import MenuItem from "./MenuItem.svelte";
  import TopItem from "./TopItem.svelte";
  import MenuDrop from "./MenuDrop.svelte";
  import MenuPopup from "./MenuPopup.svelte";
  import Icon from "./Icon.svelte";

  export let user = "";
  export let pic = "";
</script>

<header class="bg-primary">
  <nav class="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- nav menu -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-Item btn-group">
          <MenuDrop title="Icealicous" items="{menus.Icealicous}" />
        </li>
        <li class="nav-item btn-group">
          <TopItem title="Catalog" index=2 />
        </li>
        <li class="nav-item btn-group">
          <MenuItem title="Events" items="{menus.Events}" />
        </li>
        <li class="nav-item btn-group">
          <MenuItem title="Rules" items="{menus.Rules}" />
        </li>
        <li class="nav-item btn-group">
          <MenuItem title="Consume" items="{menus.Consume}" />
        </li>
        <li class="nav-item btn-group">
          <TopItem title="Manage" index=0 />
        </li>
      </ul>
      <!-- icon buttons and user button -->
      <ul class="navbar-nav ml-auto mr-3">
        <li class="nav-item btn-group">
          <MenuPopup awesome="fas fa-plus" items={menus.Plus}/>
        </li>
        <li class="nav-item">
          <Icon awesome="fas fa-cog" />
        </li>
        <li class="nav-item">
          <div role="button" class="btn btn-primary mx-0 px-0">
            <img src={pic} class="user rounded-circle" alt={user} />
          </div>
        </li>
      </ul>
    </div>
  </nav>
</header>

<style>
  header {
    padding: 0;
  }
  li {
    padding: 0;
    margin: 0;
  }
  nav {
    margin: 0;
    padding: 0;
    box-shadow: 0 5px 10px #d7baff;
  }
  .navbar {
    position: static;
  }
  @media screen and (min-width: 1260px) {
    header {
      height: 4.5rem;
    }
    .btn {
      font-size: 18pt;
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
    header {
      height: 4.4rem;
    }
    .btn {
      font-size: 16pt;
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
    header {
      height: 4.2rem;
    }
    .btn {
      font-size: 12pt;
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
