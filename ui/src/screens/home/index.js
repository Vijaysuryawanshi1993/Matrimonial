import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Home extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="container">
            <div className="banner_info">
              <h3>Millions of verified Members</h3>
              <Link to="/register" className="hvr-shutter-out-horizontal">Create your Profile</Link>
            </div>
          </div>
          <div className="profile_search">
            <div className="container wrap_1">
              <form action="">
                <div className="search_top">
                  <div className="inline-block">
                    <label className="gender_1">I am looking for :</label>
                    <div className="age_box1"
                    // style="max-width: 100%; display: inline-block;"
                    >
                      <select>
                        <option value="">* Select Gender</option>
                        <option value="Male">Bride</option>
                        <option value="Female">Groom</option>
                      </select>
                    </div>
                  </div>
                  <div className="inline-block">
                    <label className="gender_1">Located In :</label>
                    <div className="age_box1"
                    // style="max-width: 100%; display: inline-block;"
                    >
                      <select>
                        <option value="">* Select State</option>
                        <option value="Washington">Washington</option>
                        <option value="Texas">Texas</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Colorado">Colorado</option>
                      </select>
                    </div>
                  </div>
                  <div className="inline-block">
                    <label className="gender_1">Interested In :</label>
                    <div className="age_box1"
                    // style="max-width: 100%; display: inline-block;"
                    >
                      <select><option value="">* Select Interest</option>
                        <option value="Sports &amp; Adventure">Sports &amp; Adventure</option>
                        <option value="Movies &amp; Entertainment">Movies &amp; Entertainment</option>
                        <option value="Arts &amp; Science">Arts &amp; Science</option>
                        <option value="Technology">Technology</option>
                        <option value="Fashion">Fashion</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="inline-block">
                  <div className="age_box2"
                  // style="max-width: 220px;"
                  >
                    <label className="gender_1">Age :</label>
                    <input className="transparent" placeholder="From:"
                      // style="width: 34%;" 
                      type="text" value="" />&nbsp;-&nbsp;<input className="transparent" placeholder="To:"
                        // style="width: 34%;" 
                        type="text" value="" />
                  </div>
                </div>
                <div className="inline-block">
                  <label className="gender_1">Status :</label>
                  <div className="age_box1"
                  // style={"max-width: 100%; display: inline-block;"}
                  >
                    <select>
                      <option value="">* Select Status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="In a Relationship">In a Relationship</option>
                      <option value="It's Complicated">It's Complicated</option>
                    </select>
                  </div>
                </div>
                <div className="submit inline-block">
                  <input id="submit-btn" className="hvr-wobble-vertical" type="submit" value="Find Matches" />
                </div>
              </form>
            </div>
          </div>
        </div>


        <div className="grid_2">
          <div className="container">
            <h2>Success Stories</h2>
            <div className="heart-divider">
              <span className="grey-line"></span>
              <i className="fa fa-heart pink-heart"></i>
              <i className="fa fa-heart grey-heart"></i>
              <span className="grey-line"></span>
            </div>
            <div className="row_1">
              <div className="col-md-8 suceess_story">
                <ul>
                  <li>
                    <div className="suceess_story-date">
                      <span className="entry-1">Dec 20, 2015</span>
                    </div>
                    <div className="suceess_story-content-container">
                      <figure className="suceess_story-content-featured-image">
                        <img width="75" height="75" src="images/7.jpg" className="img-responsive" alt="" />
                      </figure>
                      <div className="suceess_story-content-info">
                        <h4><a href="#">Lorem & Ipsum</a></h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,.<a href="#">More...</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="suceess_story-date">
                      <span className="entry-1">Dec 20, 2015</span>
                    </div>
                    <div className="suceess_story-content-container">
                      <figure className="suceess_story-content-featured-image">
                        <img width="75" height="75" src="images/8.jpg" className="img-responsive" alt="" />
                      </figure>
                      <div className="suceess_story-content-info">
                        <h4><a href="#">Lorem & Ipsum</a></h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,.<a href="#">More...</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="suceess_story-date">
                      <span className="entry-1">Dec 20, 2015</span>
                    </div>
                    <div className="suceess_story-content-container">
                      <figure className="suceess_story-content-featured-image">
                        <img width="75" height="75" src="images/9.jpg" className="img-responsive" alt="" />
                      </figure>
                      <div className="suceess_story-content-info">
                        <h4><a href="#">Lorem & Ipsum</a></h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,.<a href="#">More...</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="suceess_story-date">
                      <span className="entry-1">Dec 20, 2015</span>
                    </div>
                    <div className="suceess_story-content-container">
                      <figure className="suceess_story-content-featured-image">
                        <img width="75" height="75" src="images/10.jpg" className="img-responsive" alt="" />
                      </figure>
                      <div className="suceess_story-content-info">
                        <h4><a href="#">Lorem & Ipsum</a></h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,.<a href="#">More...</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="suceess_story-date">
                      <span className="entry-1">Dec 20, 2015</span>
                    </div>
                    <div className="suceess_story-content-container">
                      <figure className="suceess_story-content-featured-image">
                        <img width="75" height="75" src="images/11.jpg" className="img-responsive" alt="" />
                      </figure>
                      <div className="suceess_story-content-info">
                        <h4><a href="#">Lorem & Ipsum</a></h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,.<a href="#">More...</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="suceess_story-date">
                      <span className="entry-1">Dec 20, 2015</span>
                    </div>
                    <div className="suceess_story-content-container">
                      <figure className="suceess_story-content-featured-image">
                        <img width="75" height="75" src="images/12.jpg" className="img-responsive" alt="" />
                      </figure>
                      <div className="suceess_story-content-info">
                        <h4><a href="#">Lorem & Ipsum</a></h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,.<a href="#">More...</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="suceess_story-date">
                      <span className="entry-1">Dec 20, 2015</span>
                    </div>
                    <div className="suceess_story-content-container">
                      <figure className="suceess_story-content-featured-image">
                        <img width="75" height="75" src="images/13.jpg" className="img-responsive" alt="" />
                      </figure>
                      <div className="suceess_story-content-info">
                        <h4><a href="#">Lorem & Ipsum</a></h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,.<a href="#">More...</a></p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 row_1-right">
                <h3>News & Events</h3>
                <div className="box_1">
                  <figure className="thumbnail1"><img width="170" height="155" src="images/14.jpg" className="img-responsive" alt="" /></figure>
                  <div className="extra-wrap">
                    <div className="post-meta">
                      <span className="day">
                        <time dateTime="2014-05-25T10:15:43+00:00">25</time>
                      </span>
                      <span className="month">
                        <time dateTime="2014-05-25T10:11:51+00:00">May</time>
                      </span>
                    </div>
                    <h4 className="post-title"><a href="#">There are many variations of passages</a></h4>
                    <div className="clearfix"> </div>
                    <div className="post-content">The standard chunk of Lorem Ipsum used since the 1500s..</div>
                    <a href="#" className="vertical">Read More</a>
                  </div>
                </div>
                <div className="box_1">
                  <figure className="thumbnail1"><img width="170" height="155" src="images/15.jpg" className="img-responsive" alt="" /></figure>
                  <div className="extra-wrap">
                    <div className="post-meta">
                      <span className="day">
                        <time dateTime="2014-05-25T10:15:43+00:00">25</time>
                      </span>
                      <span className="month">
                        <time dateTime="2014-05-25T10:11:51+00:00">May</time>
                      </span>
                    </div>
                    <h4 className="post-title"><a href="#">There are many variations of passages</a></h4>
                    <div className="clearfix"> </div>
                    <div className="post-content">The standard chunk of Lorem Ipsum used since the 1500s..</div>
                    <a href="#" className="vertical">Read More</a>
                  </div>
                </div>
                <div className="box_2">
                  <figure className="thumbnail1"><img width="170" height="155" src="images/1.jpg" className="img-responsive" alt="" /></figure>
                  <div className="extra-wrap">
                    <div className="post-meta">
                      <span className="day">
                        <time dateTime="2014-05-25T10:15:43+00:00">25</time>
                      </span>
                      <span className="month">
                        <time dateTime="2014-05-25T10:11:51+00:00">May</time>
                      </span>
                    </div>
                    <h4 className="post-title"><a href="#">There are many variations of passages</a></h4>
                    <div className="clearfix"> </div>
                    <div className="post-content">The standard chunk of Lorem Ipsum used since the 1500s..</div>
                    <a href="#" className="vertical">Read More</a>
                  </div>
                </div>
                <div className="religion">
                  <div className="religion_1-title">Religion :</div>
                  <a href="#" target="_blank" className="religion_1" title="Hindu Matrimonial"
                  // style="padding-left:0px !important;"
                  >Hindu</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Muslim Matrimonial">Muslim</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Christian Matrimonial">Christian</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Sikh Matrimonial">Sikh</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Inter Religion Matrimonial">Inter Religion</a>
                </div>
                <div className="religion">
                  <div className="religion_1-title">Country :</div>
                  <a href="#" target="_blank" className="religion_1" title="Hindu Matrimonial"
                  // style="padding-left:0px !important;"
                  >India</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Muslim Matrimonial">Australia</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Christian Matrimonial">Russia</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Sikh Matrimonial">India</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Inter Religion Matrimonial">Kuwait</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Inter Religion Matrimonial">Uk</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Inter Religion Matrimonial">View All</a>
                </div>
                <div className="religion">
                  <div className="religion_1-title">Caste :</div>
                  <a href="#" target="_blank" className="religion_1" title="Hindu Matrimonial"
                  // style="padding-left:0px !important;"
                  >Brahmin</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Muslim Matrimonial">Kapu</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Christian Matrimonial">Kamma</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Sikh Matrimonial">Padmasali</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Inter Religion Matrimonial">Reddy</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Inter Religion Matrimonial">View All</a>
                </div>
                <div className="religion">
                  <div className="religion_1-title">Regional :</div>
                  <a href="#" target="_blank" className="religion_1" title="Hindu Matrimonial"
                  // style="padding-left:0px !important;"
                  >Urdu</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Muslim Matrimonial">Hindi</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Christian Matrimonial">Telugu</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Sikh Matrimonial">Marwadi</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Inter Religion Matrimonial">Oriya</a>
                  <span>|</span><a href="#" target="_blank" className="religion_1" title="Inter Religion Matrimonial">View All</a>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        
        <div className="bg">
          <div className="container">
            <h3>Guest Messages</h3>
            <div className="heart-divider">
              <span className="grey-line"></span>
              <i className="fa fa-heart pink-heart"></i>
              <i className="fa fa-heart grey-heart"></i>
              <span className="grey-line"></span>
            </div>
            <div className="col-sm-6">
              <div className="bg_left">
                <h4>But I must explain</h4>
                <h5>Friend of Bride</h5>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <ul className="team-socials">
                  <li><a href="#"><span className="icon-social "><i className="fa fa-facebook"></i></span></a></li>
                  <li><a href="#"><span className="icon-social "><i className="fa fa-twitter"></i></span></a></li>
                  <li><a href="#"><span className="icon-social"><i className="fa fa-google-plus"></i></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="bg_left">
                <h4>But I must explain</h4>
                <h5>Friend of Groom</h5>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <ul className="team-socials">
                  <li><a href="#"><span className="icon-social "><i className="fa fa-facebook"></i></span></a></li>
                  <li><a href="#"><span className="icon-social "><i className="fa fa-twitter"></i></span></a></li>
                  <li><a href="#"><span className="icon-social"><i className="fa fa-google-plus"></i></span></a></li>
                </ul>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
