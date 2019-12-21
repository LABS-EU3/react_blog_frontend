import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 1 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  
  .laptop_man {
    max-width: 20%;
    max-height: 25vh;
  }
`;

export const StyledAuth = styled.form`
  margin-top: 0;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: #636363;
  // padding: 2rem;
  h1 {
    font-weight: 500;
    font-size: 34px;
    line-height: 77px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #205284;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.03em;
    width: 350px;
    color: #646f79;
  }

  .privacy {
    width: 430px;
    margin-top: 2rem;
    text-align: center;
  }

  a {
    color: #e16868;
    text-decoration: none;
    font-size: 13px;
  }

  .button {
    margin-top: 2.0rem;
    padding: 1.5rem;
    width: 100%;
    margin-top:2.0rem;
    
    font-size: 14px;
    line-height: 20px;
  }

  .inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      background: #ffffff;
      border: 1.5px solid #e4e2e2;
      box-sizing: border-box;
      border-radius: 3px;
      padding: 0.5rem;
      padding-left: 1.0rem;
      margin-top: 1.3rem;

      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 30px;

      color: #636363;

      ::placeholder {
        color: #a09e9e;
        font-weight: 500;
      }

      &:focus {
        border: 1.5px solid #6f85fd;
      }
    }
  }
`;

export const StyledRegistrationSuccessModal = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Lato", sans-serif;
  color: #646f79;
  .regstr-modal-top {
    position: absolute;
    text-align: center;
    height: 70%;
    padding: 0 10%;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h1 {
      font-size: 2rem;
      color: #205284;
      font-weight: 500;
    }
    p {
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      color: #646F79;
    }
    img {
      width: 28%;
      height: 30%;
    }
  }

  .regstr-modal-border {
    width: 100%;
    height: 30%;
    background-color: #6f85fd;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .button {
    background: #323C5C;
    margin-left: 2.0rem;
    margin-top: 1.4rem;
  }
  a {
    width: 30%;
    height: 50%;
  }
`;
