<script>
  import Email from './Email.svelte'
</script>

<img src="agiledata-logo-full-purple.svg" alt="agile data logo" id="logo"/>
<div id="SignInWrapper" class="container">
  <Email icon="at" hint="email"/>
  <div id="customBtn" class="SignIn btn btn-outline-primary bg-primary"
                      on:click="{onSignIn}">
    <span class="text-info">Login</span>
  </div>
</div>

<style>
  #customBtn {
    margin-top: 2vh;
  }
  #customBtn:hover {
    cursor: pointer;
  }
  @media only screen and (orientation: landscape) {
    @media screen and (min-width: 740px) {
      #SignInWrapper {
        margin-top: 25vh;
        margin-bottom: 10vh;
        padding-left: 5vw;
        padding-right: 5vw;
        text-align: right;
        width: 90vw;
      }
      #logo {
        position: sticky;
        padding-top: 25vh;
        padding-left: 0;
        box-shadow: none;
        margin-right: 0;
        margin-left: 0;
        width: calc(30vw + 30vh);
      }
    }
    @media screen and (max-width: 740px) {
      #SignInWrapper {
        margin-top: 25vh;
        margin-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        text-align: right;
        width: 80vw;
      }
      #logo {
        padding-top: 20vh;
        padding-left: 0;
        box-shadow: none;
        margin-right: 0;
        margin-left: 0;
        width: calc(30vw + 30vh);
      }
    }
  }
  @media only screen and (orientation: portrait) {
    #SignInWrapper {
      margin-top: 40vh;
      margin-bottom: 30vh;
      padding-left: 2vw;
      padding-right: 2vw;
      text-align: right;
      width: 95vw;
    }
    #logo {
      padding-top: 2vh;
      padding-left: 2vh;
      box-shadow: none;
      margin-right: 0;
      margin-left: 0;
      width: 95vw;
    }
  }
</style>
