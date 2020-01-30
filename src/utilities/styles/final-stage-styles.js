import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const AnimeSection = styled.div`
  flex: 1;
`;

export const InteractionSection = styled.div`
  flex: 3;
  width: 70%
  background: #FFF;
  div {
    width: 85%;
    margin: auto;
    margin-top: 12rem;
    .intro {
      margin-left: 2rem;
      width: 490px;
      h3 {
        color: #272424;
        font-size: 38px;
        font-weight: bold;
        letter-spacing: 1px;
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
        background-color: #3652BF;
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
          font-size: 20px;
        }
        img {
          width: 80%;
          height: 80%;
          border-radius: 50%;
          border: 4px solid #dcdcdc;
          &:hover {
            cursor: pointer;
          }
          &.clicked {
            border: 10px solid #dcdcdc;
          }
        } 
      }
    }
    ul.ks-cboxtags {
      list-style: none;
      padding: 20px;
      width: 100%;
      margin-top: 3rem;
    }
    ul.ks-cboxtags li{
      display: inline;
    }
    ul.ks-cboxtags li label{
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.10);
        display: inline-block;
        background-color: #f1f6fd;
        border: 2px solid rgba(139, 139, 139, .3);
        color: #adadad;
        border-radius: 3px;
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
        padding: 8px 12px;
        cursor: pointer;
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
        border: 2px solid #2a81fb;
        background-color: #3652BF;
        color: #fff;
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
