import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <div class="grid_3">
          <div class="container">
            <div class="breadcrumb1">
              <ul>
                <a href="index.html"><i class="fa fa-home home_1"></i></a>
                <span class="divider">&nbsp;|&nbsp;</span>
                <li class="current-page">Contact</li>
              </ul>
            </div>
            <div class="grid_5">
              <p>Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient. montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.</p>
              <address class="addr row">
                <dl class="grid_4">
                  <dt>Address :</dt>
                  <dd>
                    8901 Nulla Pariatur, <br />
                      Ipsum, D05 87GR.
            </dd>
                </dl>
                <dl class="grid_4">
                  <dt>Telephones :</dt>
                  <dd>
                    +1 800 245 4578 <br />
                        +1 800 789 5478
            </dd>
                </dl>
                <dl class="grid_4">
                  <dt>E-mail :</dt>
                  <dd><a href="malito:mail@demolink.org">mail(at)Marital.com</a></dd>
                </dl>
              </address>
            </div>
          </div>
        </div>
        <div class="about_middle">
          <div class="container">
            <h2>Contact Form</h2>
            <form id="contact-form" class="contact-form">
              <fieldset>
                <input type="text" class="text" placeholder="" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" />
                <input type="text" class="text" placeholder="" value="Phone" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Phone';}" />
                <input type="text" class="text" placeholder="" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" />
                <textarea value="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message';}">Message</textarea>
                <input name="submit" type="submit" id="submit" value="Submit" />
              </fieldset>
            </form>
          </div>
        </div>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3150859.767904157!2d-96.62081048651531!3d39.536794757966845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1408111832978"> </iframe>
        </div>
      </div>
    );
  }
}

export default Contact;
