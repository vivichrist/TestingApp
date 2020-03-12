<style>
  #customBtn {
    white-space: nowrap;
  }
  #customBtn:hover {
    cursor: pointer;
  }
  #SignInWrapper {
    text-align: right;
    width: 22em;
  }
</style>

<div id="SignInWrapper" class="container">
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text text-secondary bg-primary">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Enter email" id="email">
  </div>
  <div id="customBtn" class="SignIn btn btn-outline-secondary bg-primary">
    <span class="buttonText">Login</span>
  </div>
</div>
