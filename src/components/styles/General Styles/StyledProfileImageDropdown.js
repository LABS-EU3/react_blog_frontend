import styled from "styled-components";

export const StyledProfileImageDropdown = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 50%;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 900;
    top: 3rem;
    right: 0.5rem;
    overflow: hidden;
    text-align: center;

    &.show {
      display: block;
      width: 150px;
    }

    &#dropdown-profile-content {
      margin-top: 7px !important;
    }

    ul {
      margin: 0;
      padding: 5px;

      li {
        list-style: none;
      }

      .dropdown-user-bio {
        width: 100%;
        line-height: 1.4;
        white-space: nowrap;
        font-size: 18px;
        padding: 10px;

        p {
          font-size: 15px;
          font-weight: 500;
        }

        border-bottom: 1px solid #986c9b;
      }

      .list-item-separator {
        height: 2px;
        border-bottom-color: rgba(0, 0, 0, 0.84);
      }

      .dropdown-links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-item: center;
        margin-left: 1.3rem;
        a,
        button {
          display: block;
          text-decoration: none;
          color: #636363;
          line-height: 1.4;
          white-space: nowrap;
          font-size: 13px;
          margin-top: 2rem;
        }
        button {
          margin-right: 1rem;
          border: none;
          background: transparent;
          outline: none;
          cursor: pointer;
          margin-bottom: 1rem;
        }
      }
    }
  }
`;
