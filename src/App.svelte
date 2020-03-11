<script>
  import Login from './Login.svelte'

  export let signedIn = false;

  let ident = {
    id: "",
    name: "",
    given_name: "",
    family_name: "",
    img_url: "",
    email: "",
    token: "",
  };


  window.onSignIn = (user) => {
      // Useful data for your client-side scripts:
      const profile = user.getBasicProfile();
      // The ID token you need to pass to your backend:
      ident.id = profile.getId();
      ident.name = profile.getName();
      ident.given_name = profile.getGivenName();
      ident.family_name = profile.getFamilyName();
      ident.img_url = profile.getImageUrl();
      ident.email = profile.getEmail();
      ident.token = user.getAuthResponse().id_token;

      signedIn = true;
      document.getElementById("SignInWrapper").style.display = "none";
      console.log("onsign-in");
  }

  window.startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      let auth2 = gapi.auth2.init({
        client_id: '461979086851-bbjhehqb9qpn3boroii8l4klmcc718bd.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email',
      });
      let element = document.getElementById('customBtn');
      auth2.attachClickHandler(element, {},
        function(user) {
          onSignIn(user);
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        }
      );
    });
  };

  window.signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
    	ident.id = "";
  		ident.name = "";
  		ident.given_name = "";
  		ident.family_name = "";
  		ident.img_url = "";
  		ident.email = "";
  		ident.token = "";

      signedIn = false;
      document.getElementById("SignInWrapper").style.display = "block";
      console.log("onsign-out");
    });
  }
</script>

<svelte:head>
	<script src="https://apis.google.com/js/api:client.js"></script>
</svelte:head>

<main>
	{#if signedIn}
		<h1>Hello {ident.name}!</h1>
		<img src={ident.img_url} />
		<p>{ident.email}</p>
		<button onclick="signOut()">Sign Out</button>
  {:else}
    <Login />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
