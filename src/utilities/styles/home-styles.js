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
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  width: 100%;
`;

export const About = styled.div`
  width: 45%;
  color: #205284;
  padding-left: 5%;
  h3 {
    font-size: 40px;
  }

  p {
    margin-top: 40px;
    font-size: 20px;
  }

  form div {
    margin-top: 60px;
    display: flex;
  }

  .email {
    height: 6vh;
    background-color: #c6d0eb;
    width: 60%;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    margin-right: 1rem;
    padding-left: 15px;
  }
`;

export const LpImage = styled.div`
  max-width: 55%;
  display: flex;
  justify-content: flex-end;
  img {
    min-width: 95%;
    max-height: 60vh;
  }
  padding-right: 5%;
`;

export const Features = styled.div`
  background-color: #f1f6fd;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  width: 100%;
  padding: 2.5% 4%;
  h3 {
    color: #205284;
    padding: 20px 0;
    font-size: 36px;
  }
  .feat {
    width: 30%;
    // padding: 2rem;
  }

  p {
    font-size: 22px;
    color: #646f79;
    padding-bottom: 30px;
  }
`;

export const Demo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 2% 4%;
  p {
    color: #205284;
    font-size: 64px;
    width: 40%;
  }
  img {
    width: 50%;
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
    font-size: 48px;
    color: #205284;
    margin-bottom: 2rem;
  }
  p {
    font-size: 24px;
    color: #646f79;
    margin-bottom: 2rem;
  }
`;
