import styled from 'styled-components';

export const StyledFeed = styled.div`
  width: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
`;

export const StyledTrending = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .trending-header button {
    font-family: Lato;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    color: white;
    background-color: #2fc2df;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 10px 10px rgba(47, 194, 223, 0.15);
    padding: 1rem 2rem;
    margin-bottom: 2rem;
  }
  .trending-content {
    width: 100%;
    display: flex;
    min-height: 55vh;
    .trending-content-jumbo {
      width: 47%;
      border-radius: 3px;
      display: flex;
      align-items: flex-end;
      background-size: cover;
      a {
        background: rgba(118, 116, 116, 0.62);
        color: white;
        padding: 1.6rem;
        width: 100%;
        font-weight: 400;
        font-size: 20px;
        line-height: 43px;
        border-radius: 3px;
      }
    }
    .trending-content-regular {
      width: 55%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .content-box {
        margin-left: 2rem;
        width: 47%;
        height: 40%;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: flex-end;
        border-radius: 3px;
        
        a {
          background: rgba(118, 116, 116, 0.62);
          color: white;
          padding: 1.3rem;
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          border-radius: 3px;
          width: 100%;
          display: flex;
          align-items: flex-end;
        }
      }
    }
  }
`;

export const StyledMainFeed = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  .main-insights {
    width: 80%;
    border-top: 1px solid #b7bbc0;
    padding-top: 2.5rem;

    &.dynamic {
      width: 100%;
    }

    .main-header {
      display: flex;
      margin-top: 1.5rem;
      h4 {
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #333333;
        margin-right: 1rem;
      }
    }
    .main-content {
      width: 90%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex: 3;
      .main-article {
        width: 32%;
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
          height: 25vh;
          border-radius: 3px 3px 0px 0px;
          margin-bottom: -10rem;
          z-index: 1;
        }

        .main-article-content {
          background: #f7f9fb;
          border-radius: 5px;
          width: 100%;
          z-index: -1;
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
                color: #2fc2df;
                font-size: 13px;
                font-weight: 500;
              }
            }
          }
        }
      }
      .read-more {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 2rem 0;
        margin-top: 4.0rem;
        button {
          box-shadow: 0px 1px 3px rgba(0,0,0,0.30);
          width: 20%;
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 13px;
          color: #2fc2df;
          border: none;
          padding: 1rem 0;
          cursor: pointer;
        }
      }
    }
  }
`;

export const StyledLoggedInFeed = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 5.5rem;
  &.hide {
    display: none;
  }

  .reactions,
  .fav-author-feed {
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1.5rem;
    margin-bottom: 4rem;
    margin-top: 2.0rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.10);

    h4 {
      color: #2fc2df;
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      text-align: center;
      margin-bottom: 1.5rem;
      margin-top: 2.0rem;
      width: 60%;
    }

    .reaction-box,
    .fav-author-article {
      background-color: #f7f9fb;
      padding: 1.5rem;
      width: 90%;
      height: 70%;
      margin-bottom: 1.4rem;
      border-radius: 3px;
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);

      &:hover {
        cursor: pointer;
      }

      h5 {
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
      }

      h6 {
        font-family: Lato;
        font-style: italic;
        font-weight: normal;
        font-size: 20px;
        line-height: 31px;
        color: #b7bbc0;
        margin: 1.5rem 0 0 0;
      }
      p {
        font-family: Lato;
        font-style: italic;
        font-weight: 500;
        font-size: 14px;
        color: #b7bbc0;
        margin-right: 10px;
      }

      .fav-author-article-footer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 1.5rem;
        .tags {
          display: flex;
          flex-wrap: wrap;
        }

        .details {
          display: flex;

          a {
            color: #2fc2df;
            margin-right: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;