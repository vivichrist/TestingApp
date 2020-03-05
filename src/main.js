import App from './App.svelte';

const onSignIn = (googleUser) => {
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

const signOut = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        identity.signedIn = false;
    });
}

const app = new App({
	target: document.body,
	props: {
		identity: {signedIn: false},
	}
});

export default app;