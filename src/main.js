import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		identity: {signedIn: false},
	}
});

export default app;