import styled from "styled-components";

export const NavWrapper = styled.nav`
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  width: 100%;
  padding-top: 2rem;
  justify-content: space-between;
  background-color: white;
`;

export const FixedContainer = styled.div`
  position: fixed;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  width: 100%;
  background-color: white;
`;

export const Logo = styled.div`
  margin-left: 10rem;
  width: 90px;

  img {
    width: 100%;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    color: #a2adcc;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;

    &:hover {
      color: #6f85fd;
    }
  }
`;

// --------------------------- Authed

export const Control = styled.div`
  display: flex;
  flex-basis: auto;
  div,
  .write-button {
    padding-right: 1.5rem;
  }
  .avatar {
    line-height: 0;
    display: inline-block;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transition: linear 0.25s;
    white-space: nowrap;
    margin-top: 2px;
    padding-right: 0rem;
    img {
      border-radius: 50%;
      width: 32px;
      height: 32px;
    }
  }
`;

export const StandLogo = styled.div`
  width: 90px;
  height: 40px;
  display: flex;
  align-items: center;

  img {
    height: 30px;
  }
`;
