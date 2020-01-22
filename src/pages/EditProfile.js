import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import { decodeToken } from "../utilities/checkToken";
import {
  getUserProfile,
  updateUserProfile
} from "../redux-store/actions/user-profile-actions";
import Dropzone from "react-dropzone";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Lato;
`;

const StyledProfileInterests = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid grey;
`;

const StyledProfileInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid grey;

  .profileImage {
    width: 50%;
    margin-bottom: 3rem;
    .imageContainer {
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        border-radius: 50%;
        width: 35vw;
        height: 35vw;
        border: 1px solid grey;
      }

      &.dropzone {
        &:hover {
          cursor: pointer;
          img {
            opacity: 0.3;
          }
        }
      }
    }
  }

  .profileDetails {
    width: 100%;
    display: flex;
    flex-direction: column;

    .profileInfo {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        font-size: 21px;
      }
    }

    .profileButtons {
      width: 100%;
      display: flex;
      justify-content: center;
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
  const { user, loading, getUserProfile, updateUserProfile } = props;
  const [files, setFiles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    const data = new FormData();
    if (files.length) {
      data.append("image", files[0]);
    }
    data.append("fullname", fullname.current.value);
    updateUserProfile(userId, data).then(() => toggleEditing());
  };

  const handleCancel = () => {
    fullname.current.value = user.fullname || null;
    bio.current.value = user.bio || null;
  };
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    getUserProfile(userId);
  }, []);

  return (
    <StyledProfile>
      {user && (
        <StyledProfileInfo>
          <div className="profileImage">
            {!isEditing ? (
              <div className="imageContainer">
                <img src={user.avatarUrl} alt="User profile" />
              </div>
            ) : (
              <Dropzone
                onDrop={acceptedFiles => {
                  setFiles(
                    acceptedFiles.map(file =>
                      Object.assign(file, {
                        preview: URL.createObjectURL(file)
                      })
                    )
                  );
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()} className="imageContainer dropzone">
                    <input {...getInputProps()} />
                    <img
                      src={!files.length ? user.avatarUrl : files[0].preview}
                      alt="User profile"
                    />
                  </div>
                )}
              </Dropzone>
            )}
          </div>
          <div className="profileDetails">
            <div className={!isEditing ? "profileInfo" : "profileInfo editing"}>
              {!isEditing ? (
                <>
                  <h3>{user.fullname}</h3>
                  <p>UI Designer at Fireart Studio</p>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
            <div className="profileButtons">
              {!isEditing ? (
                <Button
                  label="Edit Profile"
                  className="cancel"
                  handleClick={toggleEditing}
                />
              ) : (
                <>
                  <Button
                    label={!loading ? "Save" : "Loading"}
                    className="save"
                    handleClick={handleSave}
                  />
                  <Button
                    label="Cancel"
                    className="cancel"
                    handleClick={handleCancel}
                  />
                </>
              )}
            </div>
          </div>
        </StyledProfileInfo>
      )}
      {user && (
        <StyledProfileInterests>
          <h3>Interests Section</h3>
        </StyledProfileInterests>
      )}
    </StyledProfile>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userProfile.data,
    loading: state.userProfile.loading
  };
};

export default connect(mapStateToProps, { getUserProfile, updateUserProfile })(
  EditProfile
);
