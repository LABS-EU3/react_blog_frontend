import styled from 'styled-components';

export const StyledUserBio = styled.div`
    // border: 1px solid red;
    display: flex;
    // width: 40%
    padding: 1rem 2rem;
    justify-content: space-between;
    align-items: center;

    .avatar-div {
        width: 30%;

        img {
            width: 70%;
            height: 70%;
            border-radius: 50%;
        }
    }

    .other-info {
        // border: 1px solid;
        width: 70%;

        h6 {
            font-size: 26px;
            color: #36464f;
        }
        .bio-info {
            margin: 0.6rem 0;
            
            p {
                font-size: 16px;
            }
        }

        .follow-info {
            margin: 0.6rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: fit-content;

            p {
                font-size: 14px;
                margin: 0 0.7rem 0 0;
            }
        }
    }
`;