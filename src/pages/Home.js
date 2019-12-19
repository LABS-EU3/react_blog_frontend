import React from 'react'
import Default from '../components/Navigation/Default';
import Authed from '../components/Navigation/Authed';

export default function Home() {
  return (
    <div>
      <Default />
      <Authed />
    </div>
  )
}
