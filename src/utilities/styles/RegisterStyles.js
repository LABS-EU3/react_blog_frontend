import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    width: 25%;
  }
`;
export const StyledNav = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 2rem;
  .nav-left {
    width: 50%;
    padding-left: 2rem;
    font-family: "HK Grotesk Bold";
    color: #212c4f;
    font-weight: 800;
    font-size: 2rem;
    margin-left: 30px;
  }
  .nav-right {
    width: 50%;
  }
`;

export const StyledFooter = styled.div`
  background-color: #323c5c;
  width: 100%;
  padding: 4vh 0;
  display: flex;
  font-family: "Lato", sans-serif;
  .footer-group {
    width: 50%;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    img {
      border-radius: 10px;
      border: 2px solid #323c5c;
      margin-left: 2rem;
    }
    a {
      color: white;
      text-decoration: none;
      font-size: 0.5rem;
    }
  }
`;

export const PrimaryBtn = styled.div`
  background-color: #6f85fd;
  width: 80%;
  height: 6.3vh;
  border-radius: 5px;
  border: none;
  font-size: 2vh;
  color: white;
  font-weight: 100;
  margin: 1rem 0;
  cursor: pointer;
  padding: 1vh 0 1vh 2vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SecondaryBtn = styled.div`
  background-color: #323c5c;
  width: 100%;
  height: 90%;
  border-radius: 5px;
  border: none;
  font-size: 2vh;
  color: white;
  font-weight: 100;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAuth = styled.form`
  min-height: 300px;
  // border: 1px solid;
  display: flex;
  flex-direction: column;
  margin: 2vh auto;
  align-items: center;
  justify-content: space-between;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #636363;
  padding: 2rem;
  h1 {
    font-size: 2rem;
    color: #205284;
    margin-bottom: 1rem;
  }
  p {
    width: 70%;
    margin-bottom: 10px;
  }
  input {
    width: 80%;
    height: 4vh;
    border-radius: 5px;
    border: 1px solid #c4c4c4;
    padding: 1vh 0 1vh 2vh;
    margin-top: 1rem;
  }
  label {
    display: inline-block;
  }
  a {
    color: #e16868;
    text-decoration: none;
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
  a {
    width: 30%;
    height: 50%;
  }
`;
