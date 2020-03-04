import App from './App.svelte';

const onSignIn = (googleUser) => {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    // The ID token you need to pass to your backend:
    identity = {
        signedIn: true,
        id: profile.getId(),
        name: profile.getName(),
        given_name: profile.getGivenName(),
        family_name: profile.getFamilyName(),
        img_url: profile.getImageUrl(),
        email: profile.getEmail(),
        token: googleUser.getAuthResponse().id_token,
    };
}

const signOut = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
    identity.setState( {signedIn: false} );
}

const app = new App({
	target: document.body,
	props: {
		identity,
	}
});

export default app;