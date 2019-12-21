import styled from "styled-components";

export const Main = styled.div`
  height: 100%;
  margin: auto;
  font-family: "Lato", sans-serif;

  .rgstr-link {
    width: 30%;
    height: 6vh;
    button {
      width: 100%;
      height: 100%;
      font-size: 20px;
      &.try-btn {
        width: 50%;
      }
    }
  }
`;

export const MidContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 80vh;
  width: 100%;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  // margin-left: 1.2rem;
  padding: 1.5rem;

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 43px;
    letter-spacing: 0.04em;
    color: #205284;
    margin-bottom: 2rem;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.02em;
    width: 470px;
    color: #646f79;
    margin-bottom: 2.5rem;
  }

  form {
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;

      input {
        background: #c6d0eb;
        box-shadow: 0px 10px 10px rgba(198, 208, 235, 0.15);
        border-radius: 3px;
        border: none;
        padding: 1.5rem;
        width: 80%;
        flex: 1;

        font-size: 13px;
        font-weight: 500;

        ::placeholder {
          font-weight: bold;
          font-size: 13px;
          line-height: 12px;
          letter-spacing: 0.02em;
          color: #646f79;
        }
      }

      .button {
        width: 150px;
        margin-left: 1rem;
        font-weight: 600;
        font-size: 13px;
        line-height: 24px;
        text-align: center;

        color: #ffffff;
      }
    }
  }
`;

export const LpImage = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    min-width: 85%;
    max-height: 60vh;
  }
  // padding-right: 3%;
`;

export const Features = styled.div`
  background-color: #f1f6fd;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  width: 100%;
  padding: 2.3rem;

  .feat {
    width: 25%;

    h3 {
      font-weight: normal;
      font-size: 23px;
      line-height: 43px;
      display: flex;
      align-items: center;
      color: #205284;
    }

    p {
      font-size: 14px;
      font-weight: 500;
      color: #646f79;
      padding-bottom: 30px;
      display: flex;
      align-items: center;
    }
  }
`;

export const Demo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1.0rem;
  p {
    color: #205284;
    font-size: 32px;
    width: 40%;
    font-weight: 500;
    margin-left: 5rem;
  }
  img {
    width: 35%;
    padding: 2%;
  }
`;

export const Space = styled.div`
  background-color: #f1f6fd;
  height: 226px;
`;

export const Pitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 4vh;
  text-align: center;
  h3 {
    font-size: 30px;
    color: #205284;
    margin-bottom: 2.3rem;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 29px;
    text-align: center;
    
    color: #646F79;
    margin-bottom: 2.5rem;
  }
`;
