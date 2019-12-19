import React, {useState} from 'react'
import Default from '../components/Navigation/Default';
import Modal from '../components/Modal';
import Login from './Login';

export default function Home(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Default handleOpen={setOpen} {...props} />
      {open && (
        <Modal height="425px" width="380px" handleOpen={setOpen}><Login /></Modal>
      )}
    </div>
  )
}
