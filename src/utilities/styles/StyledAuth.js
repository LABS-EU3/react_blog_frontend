import styled from "styled-components";
import media from "../../styles/mediaQueries";

export const StyledAuthWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const LeftSection = styled.div`
  width: 50%;
  max-width: 50%;
  flex: 0 0 50%;
  height: 100vh;
  display: flex;
  background: #f8d96d;

  ${media.phablet`
    display: none;
  ;`}

  img {
    max-width: 70%;
    max-height: 70%;
    margin: auto;
  }
`;
export const RightSection = styled.div`
  ${media.phablet`
    width: 100%;
    max-width: 100%;
    flex: 0 0 100%;
  ;`}
  width: 50%;
  max-width: 50%;
  flex: 0 0 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 1rem;
    margin-left: 3.5rem;
  }

  a {
    color: #986C9B;
    cursor: pointer;

    &:hover {
      color: #986C9B;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
export const RightSectionLogo = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  height: 70px;
  padding: 1rem;
  margin-top: 2rem;

  img {
    width: fit-content;
    height: 50%;
  }
`;

export const RightSectionForm = styled.form`
  width: 80%;
  max-width: 100%;
  height: auto;
  padding: 1rem 3rem;
  margin-top: 10rem;

  ${media.phablet`
    margin-top: 5rem;
    ;`}

  ${media.phablet`
    width: 100%;
  ;`}

  .title-as-an-img {
    width: 90px;
    margin: auto;
    height: 80px;
    text-align: center;
  }
  .float-right-btn {
    float: right;
    background: #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;

    ${media.phablet`
        margin-top: 2rem;
    ;`}

    font-weight: 500;
    width: 120px;
    padding: 1.2rem;
  }
  .form-input-wrapper {
    margin-top: 4rem;

    .form-group {
      margin-bottom: 3rem;
      ${media.phablet`
        margin-bottom: 1.3rem;
      ;`}

      input {
        background: rgba(248, 217, 109, 0.1);
        border: 1px solid #f0d4d4;
        border-radius: 2px;
        width: 100%;
        padding: 1.3rem;
        padding-left: 3rem;

        ${media.phablet`
            border: none;
        ;`}

        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;

        color: rgba(0, 0, 0, 0.45);
      }
    }
  }
`;
