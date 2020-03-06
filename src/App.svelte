<script>
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

  window.onSignIn = (googleUser) => {
      // Useful data for your client-side scripts:
      const profile = googleUser.getBasicProfile();
      // The ID token you need to pass to your backend:
      ident.id = profile.getId();
      ident.name = profile.getName();
      ident.given_name = profile.getGivenName();
      ident.family_name = profile.getFamilyName();
      ident.img_url = profile.getImageUrl();
      ident.email = profile.getEmail();
      ident.token = googleUser.getAuthResponse().id_token;

      signedIn = true;
      document.getElementById("signinButton").style.display = "none";
      console.log("onsign-in");
  }

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
      document.getElementById("signinButton").style.display = "block";
      console.log("onsign-out");
    });
  }
</script>

<svelte:head>
	<script src="https://apis.google.com/js/platform.js" async defer></script>
</svelte:head>

<main>
	{#if signedIn}
		<h1>Hello {ident.name}!</h1>
		<img src={ident.img_url} />
		<p>{ident.email}</p>
		<p>{ident.token} for {ident.id}</p>
		<button onclick="signOut">Sign Out</button>
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
