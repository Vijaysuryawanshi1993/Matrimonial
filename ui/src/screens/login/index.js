import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <div class="grid_3">
          <div class="container">
            <div class="breadcrumb1">
              <ul>
                <a href="index.html"><i class="fa fa-home home_1"></i></a>
                <span class="divider">&nbsp;|&nbsp;</span>
                <li class="current-page">Login</li>
              </ul>
            </div>
            <div class="services">
              <div class="col-sm-6 login_left">
                <form>
                  <div class="form-item form-type-textfield form-item-name">
                    <label for="edit-name">Username <span class="form-required" title="This field is required.">*</span></label>
                    <input type="text" id="edit-name" name="name" size="60" maxlength="60" class="form-text required" />
                  </div>
                  <div class="form-item form-type-password form-item-pass">
                    <label for="edit-pass">Password <span class="form-required" title="This field is required.">*</span></label>
                    <input type="password" id="edit-pass" name="pass" size="60" maxlength="128" class="form-text required" />
                  </div>
                  <div class="form-actions">
                    <input type="submit" id="edit-submit" name="op" value="Log in" class="btn_1 submit" />
                  </div>
                </form>
              </div>
              <div class="col-sm-6">
                <ul class="sharing">
                  <li><a href="#" class="facebook" title="Facebook"><i class="fa fa-boxed fa-fw fa-facebook"></i> Share on Facebook</a></li>
                  <li><a href="#" class="twitter" title="Twitter"><i class="fa fa-boxed fa-fw fa-twitter"></i> Tweet</a></li>
                  <li><a href="#" class="google" title="Google"><i class="fa fa-boxed fa-fw fa-google-plus"></i> Share on Google+</a></li>
                  <li><a href="#" class="linkedin" title="Linkedin"><i class="fa fa-boxed fa-fw fa-linkedin"></i> Share on LinkedIn</a></li>
                  <li><a href="#" class="mail" title="Email"><i class="fa fa-boxed fa-fw fa-envelope-o"></i> E-mail</a></li>
                </ul>
              </div>
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3150859.767904157!2d-96.62081048651531!3d39.536794757966845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1408111832978"> </iframe>
        </div>
      </div>
    );
  }
}

export default Login;
