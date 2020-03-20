<script>
  import { content } from './stores.js';

  import Menu from './Menu.svelte';
  import Search from './Search.svelte';
  import Login from './Login.svelte';
  import Manage from './Manage.svelte';

  let signedIn = false;
  let index = 0;

  const unsubscribe = content.subscribe(value => {
    index = value;
    console.log("index value changed to: ", index);
  });

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

  window.startApp = function() {};

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

<main>
  <!-- {#if signedIn && gapi.auth2.getAuthInstance().isSignedIn.get()} -->
	{#if signedIn}
		<Menu user={ident.name} pic={ident.img_url} />
    {#if index == 0}
      <Search />
    {:else if index > 0}
      <Manage open={true}/>
    {/if}
  {:else}
    <Login />
	{/if}
</main>

<style>
	main {
    align-content: center;
    text-align: center;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
