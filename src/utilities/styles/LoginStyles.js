import styled from "styled-components";

export const Container = styled.div`
  background: #fefefe;
`;

export const Header2 = styled.h2`
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 65px;
  text-align: center;
  color: #636363;
  margin-top: 2.0rem;
  margin-bottom: 1.0rem;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .button {
      padding: 1.3rem;
      width: 80%;
      margin-top:2.0rem;
      
      font-size: 14px;
      line-height: 20px;
    }
`;

export const Input = styled.input`
  width: 80%;
  background: #ffffff;
  border: 1.5px solid #e4e2e2;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 0.7rem;
  margin-top: 2rem;

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
`;

export const P = styled.p`
  text-align: center;
  line-height: 40px;
  color: #e16868;
  font-weight: bold;
  font-size: 14px;
`;

export const P2 = styled.p`
  text-align: center;
  line-height: 40px;
  width: 70%;
  margin: auto;
  margin-top: 2.0rem;
  border-top: 0.5px solid #cfcfcf;
  font-weight: 300;
  font-size: 14px;

  a {
    color: #e16868;
    font-weight: 500;
    font-size: 14px;

    &:focus {
      color: #6f85fd;
    }
  }
`;
