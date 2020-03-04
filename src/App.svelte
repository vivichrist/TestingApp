<script>
	export let identity;
</script>

<main>
	{#if identity.signedIn}
		<h1>Hello {identity.name}!</h1>
		<img src='{identity.img_url}' />
		<p>{identity.email}</p>
		<p>{identity.token} for {identity.id}</p>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
			to learn how to build Svelte apps.
		</p>
	{:else}
		<div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
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