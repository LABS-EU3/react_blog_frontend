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
  width: 100%
  background-color: #FFF;

  /* made changes on line 21, 23 and 27 */
  .final-container{
    width: 85%;  
    /* display:flex;
    flex-wrap: wrap; */
    margin: auto;
    margin-left:2rem;
    /* margin-top: 20px; */

    .intro {
      margin-left: 2rem;
      /* width: 100%; */
      width:490px
      h3 {
        color: #272424;
        font-size: 30px;
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
        height: fit-content;
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

