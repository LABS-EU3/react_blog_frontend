import React from 'react'
import {PrimaryFooterWrapper} from './footer.style';
import featherlogo from '../../assets/images/feather-logo.png';

export default function PrimaryFooter() {
  return (
    <PrimaryFooterWrapper>
      <footer>
        <div>
          <img src={featherlogo} alt="logo" />
        </div>
        <div>
          <h3>Insight</h3>
          <p>Home</p>
          <p>Product</p>
          <p>Pricing</p>
          <p>Premium</p>
        </div>
        <div>
          <h3>Abous Us</h3>
          <p>Company</p>
          <p>Leadership</p>
          <p>Customers</p>
          <p>Careers</p>
        </div>
        <div>
          <h3>Solutions</h3>
          <p>Open source Editor</p>
          <p>Emoji React</p>
          <p>Voice to Text</p>
        </div>
        <div>
          <h3>Resources</h3>
          <p>Insight Guide</p>
          <p>Forum</p>
          <p>Support</p>
          <p>Events</p>
        </div>
      </footer>
    </PrimaryFooterWrapper>
  )
}
