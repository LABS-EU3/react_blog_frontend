import styled from 'styled-components';

export const MainDiv = styled.div`

.main-article {
    width: 30%;
    margin: 2rem 0;
    margin-right: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.13);
    &:hover {
      cursor: pointer;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    }
    &.dynamic {
      width: 30%;
    }
    img {
      width: 100%;
      height: 25vh;
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
            color: #3652bf;
            font-size: 13px;
            font-weight: 500;
          }
        }
      }
    }
  }
  `;