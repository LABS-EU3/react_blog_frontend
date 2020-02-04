import styled from "styled-components";

export const StyledProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background-color: white;
  .section {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 15vw;
    &.shorter {
      height: 50vh;
    }
  }
  .stories {
    h3{ 
      width: 100%;
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
  align-items: center;
  .article {
    width: 100%;
    margin: 2rem 0;
    margin-right: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.13);
    &:hover {
      cursor: pointer;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.20);
    }
    &.dynamic {
      width: 30%;
    }

    img {
      width: 100%;
      height: 30vh;
      border-radius: 3px 3px 0px 0px;
      margin-bottom: -10rem;
      z-index: 1;
    }

    .main-article-content {
      background: #f7f9fb;
      border-radius: 5px;
      width: 100%;
      padding: 2rem;
      padding-top: 3rem;

      h3 {
        margin: 8rem 0 2rem 0;
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 35px;
      }
      p {
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 23px;
        color: #b7bbc0;
        margin-bottom: 5rem;
      }
      .main-article-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          font-style: italic;
          margin-bottom: 0;
        }
        .article-link {
          display: flex;
          height: 2vh;
          align-items: center;
          img {
            height: 20px;
            width: 14px;
            margin: 0 0 0 0.8rem;
          }
          a {
            color: #3652BF;
            font-size: 13px;
            font-weight: 500;
          }
        }
      }
    }
  }

`;