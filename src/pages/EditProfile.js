import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  updateUserProfile,
  followAuthor
} from "../redux-store/actions/user-profile-actions";
import Dropzone from "react-dropzone";
import camera_icon from "../assets/images/Icons/camera-icon.png";
import userIcon from "../assets/images/usericon.svg";
import theme from "../styles/theme";
import media from "../styles/mediaQueries";
import { mixins } from "../styles/shared";
import { decodeToken } from "../utilities/checkToken";

const StyledProfile = styled.div`
  display: flex;
  width: 100%;
  min-height: 40vh;
  justify-content: space-between;
  ${media.tablet`min-height: 55vh; flex-direction: column; justify-content: space-evenly; padding: 3rem 0;`};
`;

const StyledProfileImg = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  ${media.tablet`width: 100%; margin-bottom: 3rem;`};
  .imageContainer {
    margin: auto;
    width: 20vw;
    height: 20vw;
    max-width: 225px;
    max-height: 225px;
    ${media.phablet`width: 40vw; height: 40vw;`};
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
  justify-content: space-evenly;
  ${media.tablet`flex-direction: column; justify-content: space-evenly; width: 100%;`};

  .info {
    display: flex;
    justify-content: space-between;
    ${media.tablet`flex-direction: column-reverse; align-items: center;`};
    h2 {
      color: ${theme.colors.purple};
      font-size: ${theme.fontSizes.ttl};
      font-family: ${theme.fonts.Oswald};
    }

    input {
      width: 40%;
      border: 1px solid ${theme.colors.lightGrey};
      border-radius: 5px;
      padding: 0.8rem;
      font-size: 18px;
      font-family: ${theme.fonts.Muli};
      color: ${theme.colors.textGrey};
      ${media.phablet`width: 60%;`};
    }
    .buttons {
      width: 60%;
      display: flex;
      ${media.tablet`margin-bottom: 2rem; justify-content: center; width: 40%;`};
      button {
        margin-left: 2rem;
        ${media.tablet`margin-left: 0;`};
        &.cancel {
          ${mixins.secondaryButton};
          border-radius: 3px;
          width: 10rem;
        }
        &.save {
          color: white;
          ${mixins.bigButton};
          ${media.tablet`margin-right: 2rem;`};
        }
      }
    }
  }

  .bio {
    width: 95%;
    ${media.tablet`margin: auto; text-align: center;`};
    p {
      color: ${theme.colors.textGrey};
      font-size: ${theme.fontSizes.l};
      font-family: ${theme.fonts.Muli};
      ${media.tablet`margin: 2rem 0;`};
    }
    textarea {
      width: 91%;
      max-width: 91%;
      max-height: 18vh;

      border: 1px solid ${theme.colors.lightGrey};
      color: ${theme.colors.textGrey};
      border-radius: 5px;
      padding: 1rem;
      font-size: 18px;
      font-family: ${theme.fonts.Muli};
      ${media.tablet`width: 42%; max-width: 42%; margin: 2rem 0;`};
      ${media.phablet`width: 62%; max-width: 62%;`};
    }
  }

  .follow-info {
    display: flex;
    ${media.tablet`margin: 2rem auto;`};
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-right: 2rem;
      &.border-right {
        margin-right: 2rem;
        border-right: 1px solid ${theme.colors.purple};
      }

      h6 {
        color: ${theme.colors.purple};
        font-size: ${theme.fontSizes.ttl};
        font-family: ${theme.fonts.Muli};
        ${media.tablet`margin: 2rem 0;`};
      }
      p {
        color: ${theme.colors.lightGrey};
        font-size: ${theme.fontSizes.sm};
        font-family: ${theme.fonts.Oswald};
      }
    }
  }
`;

export function EditProfile(props) {
  const fullname = useRef();
  const bio = useRef();
  const { updateUserProfile, followAuthor, followSuccess } = props;
  const user = props.user.data;
  const loading = props.user.loading;
  const [files, setFiles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const { subject: currentUserId } = decodeToken();

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

  const handleFollow = e => {
    const button = e.target;
    const data = {
      follow: [user.id]
    }
    followAuthor(data).then(res => button.setAttribute("disabled", true));
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
              {!isEditing && user.fullname ? (
                <h2>{user.fullname.toUpperCase()}</h2>
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
              {props.personal ? (
                <div className="buttons">
                  {!isEditing ? (
                    <button
                      label="Edit Profile"
                      className="cancel"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <>
                      <button
                        label="Save"
                        className="save"
                        onClick={handleSave}
                      >
                        {!loading ? "Save" : "Loading"}
                      </button>
                      <button
                        label="Cancel"
                        className="cancel"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="buttons">
                  <button
                    label="Follow"
                    className="cancel"
                    onClick={handleFollow}
                    disabled={
                      followSuccess ||
                      (user.followers && user.followers.includes(currentUserId))
                    }
                  >
                    {followSuccess ||
                    (user.followers && user.followers.includes(currentUserId))
                      ? "Following"
                      : "Follow"}
                  </button>
                </div>
              )}
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
                <h6>{user.following && user.following.length}</h6>
                <p>FOLLOWING</p>
              </div>
              <div className="box border-right">
                <h6>{user.followers && user.followers.length}</h6>
                <p>FOLLOWERS</p>
              </div>
              <div className="box">
                <h6>
                  {props.user.articles &&
                    props.user.articles.filter(a => a.isPublished === true)
                      .length}
                </h6>
                <p>INSIGHTS</p>
              </div>
            </div>
          </StyledProfileDetails>
        </StyledProfile>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    followSuccess: state.userProfile.followAuthorSuccess
  };
};

export default connect(mapStateToProps, { updateUserProfile, followAuthor })(
  EditProfile
);