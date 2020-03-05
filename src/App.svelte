<script>
export let identity;

window.onSignIn = (googleUser) => {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    // The ID token you need to pass to your backend:
    identity.id = profile.getId();
    identity.name = profile.getName();
    identity.given_name = profile.getGivenName();
    identity.family_name = profile.getFamilyName();
    identity.img_url = profile.getImageUrl();
    identity.email = profile.getEmail();
    identity.token = googleUser.getAuthResponse().id_token;

    identity.signedIn = true;

}

window.signOut = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        identity.signedIn = false;
    });
}
</script>

<svelte:head>
	<script src="https://apis.google.com/js/platform.js" async defer></script>
</svelte:head>

<main>
<!--	{#if identity.signedIn}-->
<!--		<h1>Hello {identity.name}!</h1>-->
<!--		<img src='{identity.img_url}' />-->
<!--		<p>{identity.email}</p>-->
<!--		<p>{identity.token} for {identity.id}</p>-->
<!--	{:else}-->
		<div class="g-signin2" data-longtitle="true" data-onsuccess="onSignIn" data-theme="dark" />
<!--	{/if}-->
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