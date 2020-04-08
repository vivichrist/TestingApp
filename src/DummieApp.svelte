<script>
  import { content } from './stores.js';

  import Menu from './Menu.svelte';
  import Search from './Search.svelte';
  import Login from './Login.svelte';
  import SideBar from './SideBar.svelte';
  import Rules from './Rules.svelte';
  import Catalog from './Catalog.svelte';
    import CatalogMulti from './CatalogMulti.svelte';
  import ComingSoon from './ComingSoon.svelte';

  let signedIn = false;

  let ident = {
    id: "",
    name: "",
    given_name: "",
    family_name: "",
    img_url: "",
    email: "",
    token: "",
  };

  window.onSignIn = () => {

      ident.id = "ABC1234";
      ident.name = "Me, the Me";
      ident.given_name = "ME";
      ident.family_name = "me";
      ident.img_url = "img/user.png";
      ident.email = "example@example.com";
      ident.token = "1234ABCD";

      signedIn = true;
      console.log("onsign-in");
  }

  window.startApp = function() {content.set(2)};

  window.signOut = () => {
  	ident.id = "";
		ident.name = "";
		ident.given_name = "";
		ident.family_name = "";
		ident.img_url = "";
		ident.email = "";
		ident.token = "";

    signedIn = false;
    console.log("onsign-out");
  }
</script>

<svelte:head>
	<script src="https://apis.google.com/js/api:client.js"></script>
  <meta name="google-signin-scope" content="profile email openid"/>
  <meta name="google-signin-client_id" content="461979086851-bbjhehqb9qpn3boroii8l4klmcc718bd.apps.googleusercontent.com"/>
</svelte:head>

<!-- {#if signedIn && gapi.auth2.getAuthInstance().isSignedIn.get()} -->
{#if signedIn}
  <Menu user={ident.name} pic={ident.img_url} />
  <main class="d-flex flex-row align-items-center justify-content-center flex-wrap">
    <!-- Management interface -->
    <!-- {#if $manage}
      <SideBar />
    {/if} -->
    <!-- numbered content -->
    {#if $content == 0}
      <Search />
    {:else if $content == 1}
      <Rules />
    {:else if $content == 2}
      <Catalog name="History Tables" type="history" />
      <Catalog name="Consume Views" type="consume" />
      <CatalogMulti name="TPCH Topic" type="TPCH" />
    {:else}
      <ComingSoon />
    {/if}
  </main>
{:else}
  <div class="d-flex flex-row align-items-between justify-content-center flex-wrap">
    <Login />
  </div>
{/if}

<style>
	main {
    display: flex;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    height: calc(100vh - 4.5rem);
	}
</style>
