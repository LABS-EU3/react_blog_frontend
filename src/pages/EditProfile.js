import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../components/Buttons/Button";
import { decodeToken } from "../utilities/checkToken";
import {
  getUserProfile,
  updateUserProfile,
  updateUserInterests,
  getTags
} from "../redux-store/actions/user-profile-actions";
import Dropzone from "react-dropzone";
import camera_icon from "../assets/images/Icons/camera-icon.png";
import userIcon from "../assets/images/usericon.svg";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Lato;
  height: 100%;
`;
const StyledProfileFollowCount = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #DFDFDF;
  /* min-height: 10%; */
  .box {
    padding: 3rem;
    width: 50%;
    text-align: center;
    height: 100%;
    &.border-right {
      border-right: 1px solid #DFDFDF;
    }
  }
`;
const StyledProfileInterests = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #DFDFDF;
  /* min-height: 60%; */
  h1 {
    font-size: 4rem;
  }
  .interest-row {
    width: 60%;
    height: 40%;
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
      color: #22387D;
      &:hover {
        cursor: pointer;
        background: #EDEDED;
        box-shadow: 0px 8px 8px rgba(111, 133, 253, 0.15);
      }
      &.clicked {
        border: 2px solid #6F85FD;
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
        color: #22387D;
        border: 1px solid #22387D;
        &:hover {
          background: #EDEDED;
        }
      }
    }
  }
`;
const StyledProfileInfo = styled.div`
  width: 100%;
  /* min-height: 40%; */
  display: flex;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #DFDFDF;
  .profileImage {
    width: 15vw;
    height: 15vw;
    margin-bottom: 3rem;
    .imageContainer {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        border: 1px solid #DFDFDF;
      }
      &.dropzone {
        .dropImg {
          border-radius: 50%;
          border: 1px solid #DFDFDF;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          .overlay {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            .camera-icon,
            p {
              display: none;
            }
            &:hover {
              cursor: pointer;
              background-color: rgba(202, 202, 202, 0.7);
              .camera-icon,
              p {
                display: block;
                margin-top: 0;
              }
              .camera-icon {
                border: none;
                width: 30%;
                height: 30%;
              }
              p {
                font-size: 14px;
                width: 80%;
              }
            }
          }
        }
      }
    }
  }
  .profileDetails {
    width: 100%;
    height: 50%;
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
        border: 1px solid #C6D0EB;
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
          color: #22387D;
          border: 1px solid #22387D;
          &:hover {
            background: #EDEDED;
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
    updateUserInterests,
    getTags,
    tags
  } = props;
  const [files, setFiles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [addInterests, setAddInterests] = useState([]);
  const [removeInterests, setRemoveInterests] = useState([]);

  const handleSave = () => {
    if (files.length || user.fullname !== fullname.current.value) {
      const data = new FormData();
      if (files.length) {
        data.append("image", files[0]);
      }
      if (user.fullname !== fullname.current.value) {
        data.append("fullname", fullname.current.value);
      }
      updateUserProfile(userId, data);
    }
    setIsEditing(false);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleInterestClick = e => {
    if (e.target.name === "add") {
      setAddInterests(addInterests.concat(e.target.id));
    } else {
      setRemoveInterests(removeInterests.concat(e.target.id));
    }
    e.target.classList.add("clicked");
    e.target.setAttribute("disabled", "");
  };

  const handleInterestCancel = () => {
    setAddInterests([]);
    setRemoveInterests([]);
    document.querySelectorAll(".clicked").forEach(button => {
      button.removeAttribute("disabled");
      button.classList.remove("clicked");
    });
  };

  const handleInterestSave = e => {
    let data = {};
    if (addInterests) {
      data.add = addInterests;
    }
    if (removeInterests.length) {
      data.remove = removeInterests;
    }
    updateUserInterests(data).then(() => {
      document.querySelectorAll(".clicked").forEach(button => {
        button.removeAttribute("disabled");
        button.classList.remove("clicked");
      });
      setRemoveInterests([]);
      setAddInterests([]);
    });
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
                <img src={user.avatarUrl || userIcon} alt="" />
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
                    <div
                      className="dropImg"
                      style={{
                        "backgroundImage": `url(${
                          !files.length ? (user.avatarUrl || userIcon ) : files[0].preview
                        })`
                      }}
                    >
                      <div className="overlay">
                        <img
                          src={camera_icon}
                          className="camera-icon"
                          alt="camera"
                        />
                        <p>Click to add or drag and drop files here.</p>
                      </div>
                    </div>
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
            <div
              className={
                !isEditing ? "profileButtons" : "profileButtons editing"
              }
            >
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
            <h3 className="following">{user.following}</h3>
          </div>
          <div className="box">
            <p>Followers</p>
            <h3 className="followers">{user.followers}</h3>
          </div>
        </StyledProfileFollowCount>
      )}
      {user && (
        <StyledProfileInterests>
          <h1>Interests</h1>
          {user.interests &&
            tags &&
            tags.map(tag => {
              let interested = user.interests.find(interest => {
                return interest.name === tag.name;
              });

              return (
                <div key={tag.id} className="interest-row">
                  <p className={interested ? "interested" : "uninterested"}>
                    {tag.name}
                  </p>
                  <button
                    onClick={handleInterestClick}
                    id={tag.name}
                    name={interested ? "remove" : "add"}
                  >
                    {interested ? "-" : "+"}
                  </button>
                </div>
              );
            })}
          <div className="updateInterestsBtns">
            <Button
              label={!loading ? "Save" : "Loading"}
              className="save"
              handleClick={handleInterestSave}
            />
            <Button
              label="Cancel"
              className="cancel"
              handleClick={handleInterestCancel}
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
  updateUserInterests,
  getTags
})(EditProfile);
