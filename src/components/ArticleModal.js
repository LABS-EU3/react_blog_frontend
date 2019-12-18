// // Modal.js
// import React from "react";
// import { createPortal } from "react-dom";
// import styled from "styled-components";

// const modalRoot = document.getElementById("article-modal");

// class ArticleModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.element = document.createElement("div");
//   }
//   componentDidMount() {
//     modalRoot.appendChild(this.element);
//   }
//   componentWillUnmount() {
//     modalRoot.removeChild(this.element);
//   }
//   render() {
//     return createPortal(this.props.children, this.element);
//   }
// }

// export default class Home extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showModal: false
//     };
//   }

//   toggleModal = () => {
//     this.setState({
//       showModal: !this.state.showModal
//     });
//   };

//   render() {
//     const { showModal } = this.state;

//     return (
//       <React.Fragment>
//         <button className="modal-toggle-button" onClick={this.toggleModal}>
//           {!showModal ? "Open Modal" : "Close Modal"}
//         </button>
//         {showModal ? (
//           <ArticleModal>
//             <StyledModal>
//               <h1>Heading</h1>
//               <p>Lorem ipsum </p>
//               <button className="modal-close" onClick={this.toggleModal}>
//                 X
//               </button>
//             </StyledModal>
//           </ArticleModal>
//         ) : null}
//       </React.Fragment>
//     );
//   }
// }

// const StyledModal = styled.div`
//   background: #fff;
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   margin: auto;
//   width: 35%;
//   height: 300px;
//   box-shadow: 0 5px 10px 2px rgba(195, 192, 192, 0.5);
//   padding: 20px;
//   text-align: center;

//   button {
//     background: #5759a9;
//     border-color: #5759a9;
//     color: white;
//     border-radius: 4px;
//     padding: 0.45rem 0.8rem;
//     text-rendering: optimizeLegibility;
//     cursor: pointer;
//     font-size: 0.8em;
//     font-family: "Lato";
//     &:hover,
//     &:focus,
//     &:visited {
//       outline: none;
//       transition: all 0.2s ease-in-out;
//       background: #3d3e77;
//       &:after {
//         background: #5759a9;
//         width: calc(100% - 40px);
//       }
//     }
//   }
// `;
