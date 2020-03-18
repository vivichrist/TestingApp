<script>
  import Email from './Email.svelte'
</script>

<style>
  #customBtn:hover {
    cursor: pointer;
  }
  @media only screen and (orientation: landscape) {
    #SignInWrapper {
      margin-top: 10%;
      margin-bottom: 10%;
      padding-left: 10%;
      padding-right: 10%;
      text-align: right;
      width: 80%;
    }
  }
  @media only screen and (orientation: portrait) {
    #SignInWrapper {
      margin-top: 40%;
      margin-bottom: 40%;
      padding-left: 10%;
      padding-right: 10%;
      text-align: right;
      width: 80%;
    }
  }
  #logo {
    padding-top: 10%;
    padding-left: 10%;
    box-shadow: none;
    margin-right: 30%;
    margin-left: 5%;
    width: 66.66%;
  }
</style>

<img src="agiledata-logo-full-purple.svg" alt="agile data logo" id="logo"/>
<div id="SignInWrapper" class="container">
  <Email icon="at" hint="email"/>
  <div id="customBtn" class="SignIn btn btn-outline-primary bg-primary">
    <span class="text-info">Login</span>
  </div>
</div>
