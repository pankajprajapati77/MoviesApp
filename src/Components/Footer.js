import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div className='footer'>
        <div class="footer-contact-about">
            <ul class="footer-ul-list">
               <li class="about">About Us</li>
                <li class="about">Contact</li>
                <li class="about">Terms of Service</li>
                <li class="about">Privacy Policy</li>
                <li class="about">Community Guidelines</li>
            </ul>
        </div>
        <div class="footer-icons">
            <ul class="footer-ul-iconslist">
                <li><i class="fa-brands fa-twitter"></i></li>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-linkedin"></i></li>
            </ul>
        </div>
        <p class="copyright">© Copyright, 2022, All rights reserved. </p>
      </div>
    )
  }
}
