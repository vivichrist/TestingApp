<script>
  import Search from './Search.svelte'

  export let user;
  export let pic;

</script>
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
    i {
      font-size: 24pt;
    }
    .btn {
      font-size: 14pt;
      padding-left: 3rem;
      padding-right: 3rem;
    }
    .ficon {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  @media screen and (max-width: 1200px) {
    .dropdown-item {
      font-size: 12pt;
    }
    i {
      font-size: 20pt;
    }
    .btn {
      font-size: 12pt;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .ficon {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
  @media screen and (max-width: 930px) {
    .dropdown-item {
      font-size: 11pt;
    }
    i {
      font-size: 16pt;
    }
    .btn {
      font-size: 11pt;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>

<header class="bg-primary">
<nav class="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
  <!-- Toggler/collapsibe Button -->
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
      <div role="button" class="btn btn-primary py-4 border-0" data-toggle="dropdown">
        Events
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
      <div role="button" class="btn btn-primary py-4 border-0" data-toggle="dropdown">
        Rules
      </div>
      <div class="dropdown-menu bg-light mt-3">
        <a class="dropdown-item text-dark" href="#">Add Rules</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item text-dark" href="#">All Rules</a>
        <a class="dropdown-item text-dark" href="#">Change Rules</a>
        <a class="dropdown-item text-dark" href="#">Validation Rules</a>
        <a class="dropdown-item text-dark" href="#">Consume Rules</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item text-dark" href="#">Lineage</a>
      </div>
    </li>
    <li class="nav-item btn-group">
      <div role="button" class="btn btn-primary py-4 border-0" data-toggle="dropdown">
        Consume
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
      <div role="button" class="btn btn-primary py-4 border-0" data-toggle="dropdown">
        Manage
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
  </ul>
  <ul class="navbar-nav ml-auto mr-3">
    <li class="nav-item">
      <div role="button" class="btn btn-primary btn-lg ficon">
        <i class="fas fa-plus"></i>
      </div>
    </li>
    <li class="nav-item">
      <div role="button" class="btn btn-primary btn-lg ficon">
        <i class="fas fa-cog"></i>
      </div>
    </li>
    <li class="nav-item">
      <div role="button" class="btn btn-primary btn-lg ficon">
        <img src=pic class="rounded" alt=user />
      </div>
    </li>
  </ul>
  </div>
</nav>
</header>

<Search />
