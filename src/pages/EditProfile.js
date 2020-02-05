import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../components/Buttons/Button";
import { updateUserProfile } from "../redux-store/actions/user-profile-actions";
import Dropzone from "react-dropzone";
import camera_icon from "../assets/images/Icons/camera-icon.png";
import userIcon from "../assets/images/usericon.svg";

const StyledProfile = styled.div`
  display: flex;
  width: 100%;
  min-height: 40vh;
  justify-content: space-between;
`;

const StyledProfileImg = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  .imageContainer {
    margin: auto;
    width: 20vw;
    height: 20vw;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      border: 10px solid #fef9e1;
    }
    &.dropzone {
      .dropImg {
        border-radius: 50%;
        border: 10px solid #fef9e1;
        width: 99%;
        height: 99%;
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
`;

const StyledProfileDetails = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .info {
    display: flex;
    justify-content: space-between;
  }
  .follow-info {
    display: flex;
    justify-content: space-evenly;
  }
`;

export function EditProfile(props) {
  const fullname = useRef();
  const bio = useRef();
  const { updateUserProfile } = props;

  const user = props.user.data;
  const loading = props.user.loading;
  const [files, setFiles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (
      files.length ||
      user.fullname !== fullname.current.value ||
      user.bio !== bio.current.value
    ) {
      const data = new FormData();
      if (files.length) {
        data.append("image", files[0]);
      }
      if (user.fullname !== fullname.current.value) {
        data.append("fullname", fullname.current.value);
      }
      if (user.bio !== bio.current.value) {
        data.append("bio", bio.current.value);
      }
      updateUserProfile(user.id, data);
    }
    if (!loading) {
      setIsEditing(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      {user && (
        <StyledProfile>
          <StyledProfileImg>
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
                        backgroundImage: `url(${
                          !files.length
                            ? user.avatarUrl || userIcon
                            : files[0].preview
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
          </StyledProfileImg>
          <StyledProfileDetails>
            <div className="info">
              {!isEditing ? (
                <h2>{user.fullname}</h2>
              ) : (
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name"
                  ref={fullname}
                  defaultValue={user.fullname || null}
                />
              )}
              <div className="buttons">
                {!isEditing ? (
                  <Button
                    label="Edit Profile"
                    className="cancel"
                    handleClick={() => setIsEditing(!isEditing)}
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
                      handleClick={() => setIsEditing(!isEditing)}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="bio">
              {!isEditing ? (
                <p>{user.bio}</p>
              ) : (
                <textarea
                  type="text"
                  id="bio"
                  name="bio"
                  placeholder="Enter a short bio..."
                  ref={bio}
                  defaultValue={user.bio || null}
                />
              )}
            </div>
            <div className="follow-info">
              <div className="box border-right">
                <h3 className="following">
                  {user.following && user.following.length}
                </h3>
                <p>Following</p>
              </div>
              <div className="box">
                <h3 className="followers">
                  {user.followers && user.followers.length}
                </h3>
                <p>Followers</p>
              </div>
            </div>
          </StyledProfileDetails>
        </StyledProfile>
      )}
    </>
  );
}

export default connect(state => state, { updateUserProfile })(EditProfile);
