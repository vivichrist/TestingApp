<style>
  #customBtn:hover {
    cursor: pointer;
  }
  #SignInWrapper {
    text-align: right;
    width: 22em;
  }
  #logo {
    box-shadow: none;
    margin-right: 30%;
    margin-left: 5%;
    width: 66.66%;
  }
</style>

<img src="agiledata-logo-full-purple.svg" alt="agile data logo" id="logo"/>
<div id="SignInWrapper" class="container">
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text bg-info">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Enter email" id="email">
  </div>
  <div id="customBtn" class="SignIn btn btn-outline-primary bg-primary">
    <span class="text-info">Login</span>
  </div>
</div>
