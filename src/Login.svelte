<script>
  import Email from './Email.svelte';

  let images = [
    "/img/beach-island.png",
    "/img/beach-sunset.png"
  ];

  const rndImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };
</script>

<div class="container-fluid bgc" style="background-image: url({rndImage()});">
  <div class="mx-auto">
    <img src="agiledata-logo-full-purple.svg" alt="agile data logo" id="logo"/>
  </div>
  <div id="SignInWrapper" class="mx-auto">
    <Email icon="at" hint="email"/>
    <div id="customBtn" class="SignIn btn btn-outline-primary bg-primary"
                        on:click="{onSignIn}">
      <span class="text-info">Login</span>
    </div>
  </div>
</div>

<style>
  .bgc {
    height: 100vh;
    background-position: center;
    background-size: 100vw;
  }
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
        padding-left: 15vw;
        padding-right: 15vw;
        text-align: right;
        width: 90vw;
      }
      #logo {
        padding-top: 25vh;
        padding-left: 10%;
        box-shadow: none;
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
        padding-left: 5%;
        box-shadow: none;
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
      padding-left: 2%;
      box-shadow: none;
      width: 95vw;
    }
  }
</style>
