import styled from 'styled-components';

export const Nav = styled.div`
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 10rem;
  background: white;
  padding-top: 3.0rem;
  width: 900px;

  .like {
    margin-top:5.0rem;
    margin-bottom: 3.0rem;
    margin-left: -2.0rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      width: 40px;
      margin-right: 1.0rem;
    }
    p {
      font-size: 15px;
      font-weight: bold;
      color: #3652BF;
    }
  }
`;

export const Body = styled.div`
  margin: auto;
  margin-top: 8rem;
  width: 88%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    padding: 1rem;
    line-height: 2.4rem;
    // letter-spacing: 1px;
  }

  .body-image {
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    figcaption {
      padding-top: 1rem;
      font-size: 1.3rem;
    }
  }
  img {
    margin: 0 auto;
    max-width: 500px;
  }
`;

export const StyledDetailsLeft = styled.div`
  width: 45%;
  padding: 0rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .back {
    a {
      img {
        width: 40px;
        margin-left: -50px;
      }
    }
  }

  .title {
    font-size: 34px;
    line-height: 44px;
  }

  .bottom {
    display: flex;
    p {
      padding-right: 5rem;
      color: #3652BF;
      font-style: italic;
      font-size: 13px;
      font-weight: bold;
    }
  }

  .tags {
    display: flex;
    p {
      padding: 0.8rem;
      font-size: 12px;
      font-weight: bold;
      font-style: italic;
      color: #3652BF;
    }
  }
`;

export const StyledDetailsRight = styled.div`
  width: 55%;
  padding-right: 2.3rem;
  img {
    width: 100%;
    max-width: 550px;
    max-height: 270px;
    min-height: 270px;
    border-radius:3px 0px 0px 3px;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;