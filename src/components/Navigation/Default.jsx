import React from 'react'
import Button from '../Button';
import {
  NavWrapper,
  Logo,
  AuthButtons
} from './navigation.styles';
import insight from '../../assets/images/Insight.svg'

export default function Default() {
  return (
    <NavWrapper>
      <Logo>
        <img alt="logo" src={insight} />
      </Logo>
      <AuthButtons>
        <ul><li>Log In</li></ul>
        <Button label="Try for free" />
      </AuthButtons>
    </NavWrapper>
  )
}
