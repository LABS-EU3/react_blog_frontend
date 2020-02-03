import React, {useEffect} from 'react'
import { connect } from "react-redux";
import Authed from "../components/Navigation/Authed";
import {  decodeToken } from '../utilities/checkToken';
import { verify } from "../redux-store/actions/auths";

import TabsDisplay from '../components/Tabs/TabsDisplay';
import ProfileFirstSection from './profile/first_section/FirstSection';
import ProfileCard from './ProfileCard';


function Profile(props) {
  useEffect(() => {
    const { subject : userId } = decodeToken();
    const location = props.location.search; 
    if (location) {
      const verificationId = location.split('=');
      props.verify(verificationId[1], userId)
    }
  }, [props, props.location.search])

  if (props.success) {
    window.location.href = '/profile';
  }

  return (
    <div>
      <Authed />
      <ProfileCard/>
      {/* <ProfileFirstSection />  
      <TabsDisplay />           */}

    </div>
  )
}

const mapStateToProps = store => {
  return {
    loading: store.auth.loading,
    success: store.auth.verification_success
  }
}

export default connect(mapStateToProps, {verify})(Profile)