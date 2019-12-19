import React, {useState} from 'react'
import Default from '../components/Navigation/Default';
import Authed from '../components/Navigation/Authed';
import Modal from '../components/Modal';
import Login from './Login';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Default handleOpen={setOpen}/>
      <Authed />

      {open && (
        <Modal handleOpen={setOpen}><Login /></Modal>
      )}
    </div>
  )
}
