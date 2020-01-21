import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import AuthedNavigation from "../components/Navigation/Authed";
import styled from "styled-components";
import david from "../assets/images/david.jpg";
import Button from "../components/Button";
import { decodeToken } from "../utilities/checkToken";
import {
  getUserProfile,
  updateUserProfile
} from "../redux-store/actions/user-profile-actions";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Lato;
`;

const StyledCard = styled.div`
  width: 80%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  padding: 3rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const StyledProfileInfo = styled.div`
  display: flex;
  padding: 3rem;
  justify-content: space-between;

  .profileImage,
  .profileInfo {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profileImage {
    img {
      border-radius: 50%;
      max-width: 60%;
    }
  }
  .profileInfo {
    input,
    textarea {
      width: 60%;
      max-width: 80%;
      min-width: 80%;
      max-height: 200px;
      margin: 1.5rem 0;
      border: 1px solid #c6d0eb;
      padding: 1rem 2rem;
      border-radius: 5px;
    }
    input {
      font-size: 24px;
    }
    textarea {
      font-size: 18px;
    }
    .profileButtons {
      width: 80%;
      margin-top: 1.5rem;
      button {
        width: 30%;
        &.save {
          margin-right: 2rem;
        }
        &.cancel {
          background: white;
          color: #22387d;
          border: 1px solid #22387d;
          &:hover {
            background: #ededed;
          }
        }
      }
    }
  }
`;

export function EditProfile(props) {
  const fullname = useRef();
  const bio = useRef();
  const { subject: userId } = decodeToken();
  const { user, getUserProfile, updateUserProfile } = props;

  const handleSave = () => {
    const data = {
      fullname: fullname.current.value
    };
    updateUserProfile(userId, data);
  };

  const handleCancel = () => {
    fullname.current.value = user.fullname || null;
    bio.current.value = user.bio || null;
  };

  useEffect(() => {
    getUserProfile(userId);
  }, []);

  return (
    <div>
      <AuthedNavigation />
      <StyledProfile>
        <StyledCard>
          <h3>Edit Profile</h3>
          {user && (
            <StyledProfileInfo>
              <div className="profileImage">
                <img src={user.avatarUrl || david} alt="User profile" />
              </div>
              <div className="profileInfo">
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name"
                  ref={fullname}
                  defaultValue={user.fullname || null}
                />
                <textarea
                  type="text"
                  id="bio"
                  name="bio"
                  placeholder="Enter a short bio..."
                  ref={bio}
                  defaultValue={user.bio || null}
                />
                <div className="profileButtons">
                  <Button
                    label="Save"
                    className="save"
                    handleClick={handleSave}
                  />
                  <Button
                    label="Cancel"
                    className="cancel"
                    handleClick={handleCancel}
                  />
                </div>
              </div>
            </StyledProfileInfo>
          )}
        </StyledCard>
        <StyledCard>
          <h3>Update Interests</h3>
        </StyledCard>
      </StyledProfile>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userProfile.data
  };
};

export default connect(mapStateToProps, { getUserProfile, updateUserProfile })(
  EditProfile
);
