import styled from "styled-components";

export const StyledProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background-color: white;
  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 15vw;
    &.info {
      height: 50vh;
    }
  }
`;

export const StyledInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  .content,
  .image {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .content {
    width: 60%;
    justify-content: space-evenly;
    .bio {
      font-size: 22px;
    }
    .interests {
      display: flex;
      flex-wrap: wrap;
      p {
        border-radius: 3px;
        padding: 0.7rem;
        color: #6f85fd;
        font-weight: 600;
        font-size: 14px;
        border: 1px solid #6f85fd;
        margin-right: 1rem;
      }
    }
    .follows {
      display: flex;
      p {
        span {
          font-weight: bold;
        }
        font-size: 16px;
        margin-right: 1rem;
      }
    }
  }
  .image {
    width: 40%;
    img {
      width: 20vw;
      height: 20vw;
      border-radius: 50%;
      margin: auto;
    }
  }
`;

export const StyledStories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;