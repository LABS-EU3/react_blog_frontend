import styled from "styled-components";

export const PrimaryFooterWrapper = styled.footer`
  min-height: 302px;
  background: #1d243b;
  flex-shrink: 0;
  padding: 4rem;
  padding-left: 1rem;

  footer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 15px;
        font-weight: 500;
        display: flex;
        align-items: center;
        text-align: center;
        color: #646f79;
      }

      p {
        font-size: 14px;
        line-height: 24px;
        /* identical to box height */
        display: flex;
        align-items: center;
        color: #ffffff;
        margin-top: 2rem;
        font-weight: 500;
      }

      img {
        width: 30px;
        height: 50px;
      }
    }
  }
`;

export const SecondaryFooterWrapper = styled.footer`
  background: #323c5c;
  min-height: 130px;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    width: 310px;
    justify-content: space-between;
  }

  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 31px;
    display: flex;
    align-items: center;
    color: #eef2f4;
  }

  img {
    height: 40px;
  }
`;
