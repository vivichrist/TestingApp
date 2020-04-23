<script>
  import { content, pageseg } from './stores.js';

  import Menu from './Menu.svelte';
  import Search from './Search.svelte';
  import Login from './Login.svelte';
  import SideBar from './SideBar.svelte';
  import Rules from './Rules.svelte';
  import ComingSoon from './ComingSoon.svelte';
  import Catalog from './Catalog.svelte';
  import CatalogDetails from './CatalogDetails.svelte';

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

  window.dataLayer = window.dataLayer || [];

  const gtag = () => {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-KJ5J48K166');

</script>

<svelte:head>
	<script src="https://apis.google.com/js/api:client.js"></script>
  <meta name="google-signin-scope" content="profile email openid"/>
  <meta name="google-signin-client_id" content="461979086851-bbjhehqb9qpn3boroii8l4klmcc718bd.apps.googleusercontent.com"/>

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-KJ5J48K166"></script>
</svelte:head>

<!-- {#if signedIn && gapi.auth2.getAuthInstance().isSignedIn.get()} -->
{#if signedIn}
  <Menu user={ident.name} pic={ident.img_url} />
  <div class="d-flex flex-row align-items-center justify-content-center flex-wrap"
        on:wheel={window.hidePopups}
        on:click={window.hidePopups}>
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
      <Catalog />
    {:else if $content == 3}
      <CatalogDetails data={$pageseg} />
    {:else}
      <ComingSoon />
    {/if}
  </div>
{:else}
  <div class="d-flex flex-row align-items-between justify-content-center flex-wrap">
    <Login />
  </div>
{/if}

<style>
	div.align-items-center {
    position: absolute;
    top: 4.5rem;
    padding: 0;
    margin: 0;
    width: 100%;
	}
</style>
