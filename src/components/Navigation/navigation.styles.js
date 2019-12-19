import styled from 'styled-components';

export const NavWrapper = styled.nav`
  // position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 0.5rem;
`;

export const Logo = styled.div`
  margin-left: 4.0rem;
  width: 90px;

  img {
    width: 100%;
  }
`;

export const AuthButtons = styled.div`
  margin-right: 4.0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;

  li {
    color: #A2ADCC;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;

    &:hover {
      color: #6F85FD;
    }
  }
`;

// --------------------------- Authed

export const Control = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 4.0rem;
  width: 200px;

  .notification {
    img {
      height: 30px;
      cursor: pointer;
    }
  }

  .avatar {
    img {
      height: 30px;
      cursor: pointer;
    }
  }

`;

export const StandLogo = styled.div`
  margin-left: 4.0rem;
  width: 90px;
  height: 40px;
  display: flex;
  align-items: center;

  img {
    height: 30px;
  }
`