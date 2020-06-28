import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <div class="grid_3">
          <div class="container">
            <div class="breadcrumb1">
              <ul>
                <a href="index.html"><i class="fa fa-home home_1"></i></a>
                <span class="divider">&nbsp;|&nbsp;</span>
                <li class="current-page">Regular Search</li>
              </ul>
            </div>
            {/* <!--<script type="text/javascript">
              $(function () {
                $('#btnRadio').click(function () {
                  var checkedradio = $('[name="gr"]:radio:checked').val();
                  $("#sel").html("Selected Value: " + checkedradio);
                });
    });
   </script>--> */}
            <div class="col-md-9 search_left">
              <form>
                <div class="form_but1">
                  <label class="col-sm-5 control-lable1" for="sex">Gender : </label>
                  <div class="col-sm-7 form_radios">
                    <input type="radio" class="radio_1" /> Male &nbsp;&nbsp;
		<input type="radio" class="radio_1" checked="checked" /> Female

		            {/* <hr />
                    <p id="sel"></p><br />
                    <input id="btnRadio" type="button" value="Get Selected Value" /> */}
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <div class="form_but1">
                  <label class="col-sm-5 control-lable1" for="sex">Marital Status : </label>
                  <div class="col-sm-7 form_radios">
                    <input type="checkbox" class="radio_1" /> Single &nbsp;&nbsp;
		<input type="checkbox" class="radio_1" checked="checked" /> Divorced &nbsp;&nbsp;
		<input type="checkbox" class="radio_1" value="Cheese" /> Widowed &nbsp;&nbsp;
		<input type="checkbox" class="radio_1" value="Cheese" /> Separated &nbsp;&nbsp;
		<input type="checkbox" class="radio_1" value="Cheese" /> Any
	</div>
                  <div class="clearfix"> </div>
                </div>
                <div class="form_but1">
                  <label class="col-sm-5 control-lable1" for="sex">Country : </label>
                  <div class="col-sm-7 form_radios">
                    <div class="select-block1">
                      <select>
                        <option value="">Country</option>
                        <option value="">Japan</option>
                        <option value="">Kenya</option>
                        <option value="">Dubai</option>
                        <option value="">Italy</option>
                        <option value="">Greece</option>
                        <option value="">Iceland</option>
                        <option value="">China</option>
                        <option value="">Doha</option>
                        <option value="">Irland</option>
                        <option value="">Srilanka</option>
                        <option value="">Russia</option>
                        <option value="">Hong Kong</option>
                        <option value="">Germany</option>
                        <option value="">Canada</option>
                        <option value="">Mexico</option>
                        <option value="">Nepal</option>
                        <option value="">Norway</option>
                        <option value="">Oman</option>
                        <option value="">Pakistan</option>
                        <option value="">Kuwait</option>
                        <option value="">Indonesia</option>
                        <option value="">Spain</option>
                        <option value="">Thailand</option>
                        <option value="">Saudi Arabia</option>
                        <option value="">Poland</option>
                      </select>
                    </div>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <div class="form_but1">
                  <label class="col-sm-5 control-lable1" for="sex">District / City : </label>
                  <div class="col-sm-7 form_radios">
                    <div class="select-block1">
                      <select>
                        <option value="">District / City</option>
                        <option value="">Japan</option>
                        <option value="">Kenya</option>
                        <option value="">Dubai</option>
                        <option value="">Italy</option>
                        <option value="">Greece</option>
                        <option value="">Iceland</option>
                        <option value="">China</option>
                        <option value="">Doha</option>
                        <option value="">Irland</option>
                        <option value="">Srilanka</option>
                        <option value="">Russia</option>
                        <option value="">Hong Kong</option>
                        <option value="">Germany</option>
                        <option value="">Canada</option>
                        <option value="">Mexico</option>
                        <option value="">Nepal</option>
                        <option value="">Norway</option>
                        <option value="">Oman</option>
                        <option value="">Pakistan</option>
                        <option value="">Kuwait</option>
                        <option value="">Indonesia</option>
                        <option value="">Spain</option>
                        <option value="">Thailand</option>
                        <option value="">Saudi Arabia</option>
                        <option value="">Poland</option>
                      </select>
                    </div>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <div class="form_but1">
                  <label class="col-sm-5 control-lable1" for="sex">State : </label>
                  <div class="col-sm-7 form_radios">
                    <div class="select-block1">
                      <select>
                        <option value="">State</option>
                        <option value="">Japan</option>
                        <option value="">Kenya</option>
                        <option value="">Dubai</option>
                        <option value="">Italy</option>
                        <option value="">Greece</option>
                        <option value="">Iceland</option>
                        <option value="">China</option>
                        <option value="">Doha</option>
                        <option value="">Irland</option>
                        <option value="">Srilanka</option>
                        <option value="">Russia</option>
                        <option value="">Hong Kong</option>
                        <option value="">Germany</option>
                        <option value="">Canada</option>
                        <option value="">Mexico</option>
                        <option value="">Nepal</option>
                        <option value="">Norway</option>
                        <option value="">Oman</option>
                        <option value="">Pakistan</option>
                        <option value="">Kuwait</option>
                        <option value="">Indonesia</option>
                        <option value="">Spain</option>
                        <option value="">Thailand</option>
                        <option value="">Saudi Arabia</option>
                        <option value="">Poland</option>
                      </select>
                    </div>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <div class="form_but1">
                  <label class="col-sm-5 control-lable1" for="sex">Religion : </label>
                  <div class="col-sm-7 form_radios">
                    <div class="select-block1">
                      <select>
                        <option value="">Hindu</option>
                        <option value="">Sikh</option>
                        <option value="">Jain-All</option>
                        <option value="">Jain-Digambar</option>
                        <option value="">Jain-Others</option>
                        <option value="">Muslim-All</option>
                        <option value="">Muslim-Shia</option>
                        <option value="">Muslim-Sunni</option>
                        <option value="">Muslim-Others</option>
                        <option value="">Christian-All</option>
                        <option value="">Christian-Catholic</option>
                        <option value="">Jewish</option>
                        <option value="">Inter-Religion</option>
                      </select>
                    </div>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <div class="form_but1">
                  <label class="col-sm-5 control-lable1" for="sex">Mother Tongue : </label>
                  <div class="col-sm-7 form_radios">
                    <div class="select-block1">
                      <select>
                        <option value="">English</option>
                        <option value="">French</option>
                        <option value="">Telugu</option>
                        <option value="">Bengali</option>
                        <option value="">Bihari</option>
                        <option value="">Hindi</option>
                        <option value="">Koshali</option>
                        <option value="">Khasi</option>
                        <option value="">Tamil</option>
                        <option value="">Urdu</option>
                        <option value="">Manipuri</option>
                      </select>
                    </div>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <div class="form_but1">
                  <label class="col-sm-5 control-lable1" for="sex">Show Profile : </label>
                  <div class="col-sm-7 form_radios">
                    <input type="checkbox" class="radio_1" /> with Photo &nbsp;&nbsp;
		<input type="checkbox" class="radio_1" checked="checked" /> with Horoscope
	</div>
                  <div class="clearfix"> </div>
                </div>
                <div class="form_but1">
                  <label class="col-sm-5 control-lable1" for="sex">Don't Show : </label>
                  <div class="col-sm-7 form_radios">
                    <input type="checkbox" class="radio_1" /> Ignored Profiles &nbsp;&nbsp;
		<input type="checkbox" class="radio_1" checked="checked" /> Profiles already Contacted
	</div>
                  <div class="clearfix"> </div>
                </div>
                <div class="form_but1">
                  <label class="col-sm-5 control-lable1" for="sex">Age : </label>
                  <div class="col-sm-7 form_radios">
                    <div class="col-sm-5 input-group1">
                      <input class="form-control has-dark-background" name="28" id="slider-name" placeholder="28" type="text" required="" />
                    </div>
                    <div class="col-sm-5 input-group1">
                      <input class="form-control has-dark-background" name="40" id="slider-name" placeholder="40" type="text" required="" />
                    </div>
                    <div class="clearfix"> </div>
                  </div>
                  <div class="clearfix"> </div>
                </div>
              </form>
              <div class="paid_people">
                <h1>Paid People</h1>
                <div class="row_1">
                  <div class="col-sm-6 paid_people-left">
                    <ul class="profile_item">
                      <a href="view_profile.html">
                        <li class="profile_item-img">
                          <img src="images/a5.jpg" class="img-responsive" alt="" />
                        </li>
                        <li class="profile_item-desc">
                          <h4>2458741</h4>
                          <p>29 Yrs, 5Ft 5in Christian</p>
                          <h5>View Full Profile</h5>
                        </li>
                        <div class="clearfix"> </div>
                      </a>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <ul class="profile_item">
                      <a href="view_profile.html">
                        <li class="profile_item-img">
                          <img src="images/a6.jpg" class="img-responsive" alt="" />
                        </li>
                        <li class="profile_item-desc">
                          <h4>2458741</h4>
                          <p>29 Yrs, 5Ft 5in Christian</p>
                          <h5>View Full Profile</h5>
                        </li>
                        <div class="clearfix"> </div>
                      </a>
                    </ul>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <div class="row_1">
                  <div class="col-sm-6 paid_people-left">
                    <ul class="profile_item">
                      <a href="view_profile.html">
                        <li class="profile_item-img">
                          <img src="images/a7.jpg" class="img-responsive" alt="" />
                        </li>
                        <li class="profile_item-desc">
                          <h4>2458741</h4>
                          <p>29 Yrs, 5Ft 5in Christian</p>
                          <h5>View Full Profile</h5>
                        </li>
                        <div class="clearfix"> </div>
                      </a>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <ul class="profile_item">
                      <a href="view_profile.html">
                        <li class="profile_item-img">
                          <img src="images/a8.jpg" class="img-responsive" alt="" />
                        </li>
                        <li class="profile_item-desc">
                          <h4>2458741</h4>
                          <p>29 Yrs, 5Ft 5in Christian</p>
                          <h5>View Full Profile</h5>
                        </li>
                        <div class="clearfix"> </div>
                      </a>
                    </ul>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                <div class="row_2">
                  <div class="col-sm-6 paid_people-left">
                    <ul class="profile_item">
                      <a href="view_profile.html">
                        <li class="profile_item-img">
                          <img src="images/a5.jpg" class="img-responsive" alt="" />
                        </li>
                        <li class="profile_item-desc">
                          <h4>2458741</h4>
                          <p>29 Yrs, 5Ft 5in Christian</p>
                          <h5>View Full Profile</h5>
                        </li>
                        <div class="clearfix"> </div>
                      </a>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <ul class="profile_item">
                      <a href="view_profile.html">
                        <li class="profile_item-img">
                          <img src="images/a4.jpg" class="img-responsive" alt="" />
                        </li>
                        <li class="profile_item-desc">
                          <h4>2458741</h4>
                          <p>29 Yrs, 5Ft 5in Christian</p>
                          <h5>View Full Profile</h5>
                        </li>
                        <div class="clearfix"> </div>
                      </a>
                    </ul>
                  </div>
                  <div class="clearfix"> </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 match_right">
              <div class="profile_search1">
                <form>
                  <input type="text" class="m_1" name="ne" size="30" required="" placeholder="Enter Profile ID :" />
                  <input type="submit" value="Go" />
                </form>
              </div>
              <section class="slider">
                <h3>Happy Marriage</h3>
                <div class="flexslider">
                  <ul class="slides">
                    {/* <li>
                      <img src="images/s2.jpg" alt="" />
                      <h4>Lorem & Ipsum</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable</p>
                    </li>
                    <li>
                      <img src="images/s1.jpg" alt="" />
                      <h4>Lorem & Ipsum</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable</p>
                    </li> */}
                    <li>
                      <img src="images/s3.jpg" alt="" />
                      <h4>Lorem & Ipsum</h4>
                      <p>It is a long established fact that a reader will be distracted by the readable</p>
                    </li>
                  </ul>
                </div>
              </section>
              <div class="view_profile view_profile2">
                <h3>View Similar Profiles</h3>
                <ul class="profile_item">
                  <a href="view_profile.html">
                    <li class="profile_item-img">
                      <img src="images/p5.jpg" class="img-responsive" alt="" />
                    </li>
                    <li class="profile_item-desc">
                      <h4>2458741</h4>
                      <p>29 Yrs, 5Ft 5in Christian</p>
                      <h5>View Full Profile</h5>
                    </li>
                    <div class="clearfix"> </div>
                  </a>
                </ul>
                <ul class="profile_item">
                  <a href="view_profile.html">
                    <li class="profile_item-img">
                      <img src="images/p6.jpg" class="img-responsive" alt="" />
                    </li>
                    <li class="profile_item-desc">
                      <h4>2458741</h4>
                      <p>29 Yrs, 5Ft 5in Christian</p>
                      <h5>View Full Profile</h5>
                    </li>
                    <div class="clearfix"> </div>
                  </a>
                </ul>
                <ul class="profile_item">
                  <a href="view_profile.html">
                    <li class="profile_item-img">
                      <img src="images/p7.jpg" class="img-responsive" alt="" />
                    </li>
                    <li class="profile_item-desc">
                      <h4>2458741</h4>
                      <p>29 Yrs, 5Ft 5in Christian</p>
                      <h5>View Full Profile</h5>
                    </li>
                    <div class="clearfix"> </div>
                  </a>
                </ul>
                <ul class="profile_item">
                  <a href="view_profile.html">
                    <li class="profile_item-img">
                      <img src="images/p8.jpg" class="img-responsive" alt="" />
                    </li>
                    <li class="profile_item-desc">
                      <h4>2458741</h4>
                      <p>29 Yrs, 5Ft 5in Christian</p>
                      <h5>View Full Profile</h5>
                    </li>
                    <div class="clearfix"> </div>
                  </a>
                </ul>
              </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3150859.767904157!2d-96.62081048651531!3d39.536794757966845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1408111832978"> </iframe>
        </div>
      </div>
    );
  }
}

export default Search;
