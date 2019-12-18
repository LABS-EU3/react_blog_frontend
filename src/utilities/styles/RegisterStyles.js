import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 25%;
  }
`;
export const StyledNav = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0;
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
  height: 3vh;
  padding: 2vh;
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  // height:30px;
`;

export const StyledAuth = styled.form`
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  font-family: "Lato", sans-serif;
  padding: 2rem 0;
  h1 {
    font-size: 2rem;
    color: #636363;
    margin-bottom: 1rem;
  }
  input {
    width: 60%;
    height: 4vh;
    border-radius: 5px;
    border: 1px solid #c4c4c4;
    color: #c4c4c4;
    padding-left: 1rem;
    margin-top: 1rem;
  }
  .primary {
    background-color: #6f85fd;
    width: 60%;
    height: 6.3vh;
    border-radius: 5px;
    border: none;
    font-size: 1.5vh;
    color: white;
    font-weight: 100;
    margin-top: 1rem;
    cursor: pointer;
  }
  label {
    display: inline-block;
  }
  span a {
    color: red;
  }
  hr {
    width: 63%;
    border: 0.5px solid #cfcfcf;
    margin-bottom: 1rem;
  }
  color: #636363;
  .tos {
    display: flex;
    margin-top: 1rem;
    align-items: center;
    width: 40%;
    input {
      width: 10%;
      margin: 0;
    }
    a {
      color: red;
    }
  }
`;
