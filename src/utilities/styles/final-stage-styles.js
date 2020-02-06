import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const AnimeSection = styled.div`
  flex: 1;
  background: #f8d96d;

  img {
    width: 650px;
    margin-top: 7rem;
  }
`;

export const InteractionSection = styled.div`
  flex: 2;
  width: 70%
  background: #FFF;
  div {
    width: 85%;
    margin: auto;
    margin-top: 16rem;
    .intro {
      margin-left: 2rem;
      width: 700px;
      h3 {
        color: #272424;
        font-size: 28px;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 50px;
        margin-bottom: 1rem;
      }
      small {
        font-size: 13px;
        color: grey;
      }
    }
    .footer {
      display: flex;
      justify-content: flex-end;
      padding: 20px;
      margin-top: 10rem;
      &.followSection {
        margin-top: 0;
        position: fixed;
        bottom: 0;
        right: 0;
        margin-bottom: 20px;
        margin-right: 80px;
      }
      button {
        font-family: Lato;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        color: white;
        background-color: #111;
        border: none;
        border-radius: 3px;
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
        padding: 1rem 2rem;
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-left: 1rem;
      }
    }
    .users {
      padding: 20px;
      width: 100%;
      margin-top: 4rem;
      display: flex;
      flex-wrap: wrap;
      height: 60%;
      align-items: center;
      .userCard {
        width: 20%;
        height: 50%;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 4vh;
        p {
          font-size: 14px;
        }
        img {
          width: 80%;
          height: 80%;
          border-radius: 99em;
          box-shadow: 0px 10px 20px #fff;
          &:hover {
            cursor: pointer;
          }
          &.clicked {
            border: 1px solid #986C9B;
          }
        } 
      }
    }
    ul.ks-cboxtags {
      list-style: none;
      width: 100%;
      margin-top: 3rem;
      margin-left: 1rem;
    }
    ul.ks-cboxtags li{
      display: inline;
    }
    ul.ks-cboxtags li label{
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.10);
        display: inline-block;
        background: rgba(248, 217, 109, 0.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        color: #111;
        white-space: nowrap;
        margin: 10px 3px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        transition: all .2s;
    }
    
    ul.ks-cboxtags li label {
        padding: 3px 12px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 500;
    }
    
    ul.ks-cboxtags li label::before {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 12px;
        padding: 2px 6px 2px 2px;
        content: "\f067";
        transition: transform .3s ease-in-out;
    }
    
    ul.ks-cboxtags li input[type="checkbox"]:checked + label::before {
        content: "\f00c";
        transform: rotate(-360deg);
        transition: transform .3s ease-in-out;
    }
    
    ul.ks-cboxtags li input[type="checkbox"]:checked + label {
        background: rgba(248, 217, 109, 0.1);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        color: #111;
        transition: all .2s;
    }
    
    ul.ks-cboxtags li input[type="checkbox"] {
      display: absolute;
    }
    ul.ks-cboxtags li input[type="checkbox"] {
      position: absolute;
      opacity: 0;
    }
    ul.ks-cboxtags li input[type="checkbox"]:focus + label {
      border: 2px solid #f1f6fd;
    }
  }
`;
