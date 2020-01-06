import React from 'react'
import { SecondaryFooterWrapper } from './footer.style';
import apple from '../../assets/images/apple.svg';
import google from '../../assets/images/google.svg';

export default function SecondaryFooter() {
  return (
    <SecondaryFooterWrapper>
      <div>
        <p>Terms & Privacy</p>
      </div>
      <div>
        <img alt="apple" src={apple} />
        <img alt="google" src={google} />
      </div>
    </SecondaryFooterWrapper>
  )
}
