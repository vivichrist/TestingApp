<style>
  #customBtn {
    background: #A600A6;
    display: inline-block;
    color: #444;
    width: 140px;
    border: thin solid #888;
    box-shadow: 1px 1px 1px grey;
    white-space: nowrap;
  }
  #customBtn:hover {
    cursor: pointer;
  }
  #SignInWrapper {
    padding: auto;
    text-align: right;
    border: thin solid #888;
  }
  span.buttonText {
    display: inline-block;
    vertical-align: middle;
    padding-left: 42px;
    padding-right: 42px;
    font-size: 14px;
    font-weight: bold;
  }
  label {
    background: #A600A6;
    display: inline-block;
    border: thin solid #888;
  }
</style>

<div id="SignInWrapper">
  <label for="email">@</label>
  <input type="email" class="form-control" placeholder="Enter email" id="email">
  <div id="customBtn" class="SignIn">
    <span class="buttonText">Login</span>
  </div>
</div>
