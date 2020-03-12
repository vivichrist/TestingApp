<style>
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
      <span class="input-group-text bg-info">@</span>
    </div>
    <input type="text" class="form-control" placeholder="Enter email" id="email">
  </div>
  <div id="customBtn" class="SignIn btn btn-outline-info bg-info">
    <span class="text-info">Login</span>
  </div>
</div>
