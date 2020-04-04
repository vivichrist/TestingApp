<script>
  import Email from './Email.svelte';

  let images = [
    "/img/beach-island.webp",
    "/img/beach-sunset.webp"
  ];

  const rndImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };
</script>

<div class="d-flex flex-column vw-100 align-items-center justify-content-between bgc" style="background-image: url({rndImage()});">
  <div id="SignInWrapper" class="d-block align-center flex-grow-1">
    <!-- <Email icon="at" hint="email"/> -->
    <div class="d-block lc">
      <img src="agiledata-logo-icon-white.svg" alt="agile data logo" id="logo"/>
    </div>
    <div id="customBtn" class="SignIn btn btn-outline-primary"
                        on:click="{onSignIn}" role="button">
      <span class="text-info align-center">Login</span>
    </div>
  </div>
  <footer>
    <span type="button" class="text-white mr-5">Terms of Use</span>
    <span type="button" class="text-white ml-5">Privacy</span>
  </footer>
</div>

<style>
  #logo {
    height: 80px;
    box-shadow: none;
  }
  .lc {
    margin-top: 35vh;
  }
  footer {
    border-top: 3px solid white;
    padding: .5rem 1rem 0 1rem;
    margin-bottom: 2rem;
  }
  footer>span {
    font-size: 16pt;
    border-width: 2px;
  }
  .bgc {
    height: 100vh;
    background-position: center;
    background-size: 100vw;
  }
  #customBtn {
    background-color: #755A9955;
    background-blend-mode: color-burn;
    margin-top: 2vh;
    width: 15rem;
  }
  #customBtn:hover {
    cursor: pointer;
  }
  /* @media only screen and (orientation: landscape) {
    @media screen and (min-width: 740px) {
    }
    @media screen and (max-width: 740px) {
    }
  }
  @media only screen and (orientation: portrait) {
  } */
</style>
