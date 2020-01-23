import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import { decodeToken } from "../utilities/checkToken";
import {
  getUserProfile,
  updateUserProfile,
  getTags
} from "../redux-store/actions/user-profile-actions";
import Dropzone from "react-dropzone";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Lato;
`;

const StyledProfileFollowCount = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #dfdfdf;
  .box {
    padding: 3rem;
    width: 50%;
    text-align: center;
    height: 100%;
    &.border-right {
      border-right: 1px solid #dfdfdf;
    }
  }
`;

const StyledProfileInterests = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
  h1 {
    font-size: 4rem;
  }
  .interest-row {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    p {
      font-size: 30px;
    }
    button {
      border-radius: 20px;
      width: 30px;
      height: 30px;
      text-align: center;
      padding: 0;
      margin-left: 2rem;
      font-size: 18px;
      color: #22387d;
      &:hover {
        cursor: pointer;
        background: #ededed;
        box-shadow: 0px 8px 8px rgba(111, 133, 253, 0.15);
      }
      &.clicked {
        border: 2px solid #6f85fd;
      }
    }
  }
  .updateInterestsBtns {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    button {
      width: 50%;
      height: 5vh;
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
`;

const StyledProfileInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;

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
        border: 1px solid #dfdfdf;
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
    align-items: center;
    .profileInfo {
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      p {
        font-size: 21px;
      }
      input,
      textarea {
        width: 80%;
        margin-top: 1.5rem;
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid #c6d0eb;
      }
      textarea {
        max-width: 80%;
        min-width: 80%;
        max-height: 30vh;
        min-height: 8vh;
      }
    }

    .profileButtons {
      width: 80%;
      display: flex;
      margin-top: 1.5rem;
      justify-content: center;

      &.editing {
        justify-content: space-between;
      }
      button {
        width: 50%;
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
  const {
    user,
    loading,
    getUserProfile,
    updateUserProfile,
    getTags,
    tags
  } = props;
  const [files, setFiles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [interestsToUpdate, setInterestsToUpdate] = useState([]);

  const handleSave = () => {
    if (files.length || user.fullname !== fullname.current.value) {
      const data = new FormData();
      if (files.length) {
        data.append("image", files[0]);
      }
      if (user.fullname !== fullname.current.value) {
        data.append("fullname", fullname.current.value);
      }
      updateUserProfile(userId, data).then(() => !loading && toggleEditing());
    }
    toggleEditing();
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleInterestClick = e => {
    setInterestsToUpdate(
      interestsToUpdate.concat({
        name: e.target.id,
        action: e.target.textContent === "-" ? "remove" : "add"
      })
    );
    e.target.classList.add("clicked");
  };

  useEffect(() => {
    getUserProfile(userId);
    getTags();
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
                    defaultValue={user.bio || "UI Designer at Fireart Studio"}
                  />
                </>
              )}
            </div>
            <div className={!isEditing ? "profileButtons" : "profileButtons editing"}>
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
                    handleClick={toggleEditing}
                  />
                </>
              )}
            </div>
          </div>
        </StyledProfileInfo>
      )}
      {user && (
        <StyledProfileFollowCount>
          <div className="box border-right">
            <p>Following</p>
            <h3>{user.following}</h3>
          </div>
          <div className="box">
            <p>Followers</p>
            <h3>{user.followers}</h3>
          </div>
        </StyledProfileFollowCount>
      )}
      {user && (
        <StyledProfileInterests>
          <h1>Interests</h1>
          {user.interests &&
            tags.map(tag => {
              let interested = user.interests.find(interest => {
                return interest.name === tag.name;
              });

              return (
                <div key={tag.id} className="interest-row">
                  <p className={interested ? "interested" : "uninterested"}>
                    {tag.name}
                  </p>
                  <button onClick={handleInterestClick} id={tag.name}>
                    {interested ? "-" : "+"}
                  </button>
                </div>
              );
            })}
          <div className="updateInterestsBtns">
            <Button
              label={!loading ? "Save" : "Loading"}
              className="save"
              handleClick={handleSave}
            />
            <Button
              label="Cancel"
              className="cancel"
              handleClick={toggleEditing}
            />
          </div>
        </StyledProfileInterests>
      )}
    </StyledProfile>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userProfile.data,
    loading: state.userProfile.loading,
    tags: state.userProfile.tags
  };
};

export default connect(mapStateToProps, {
  getUserProfile,
  updateUserProfile,
  getTags
})(EditProfile);
