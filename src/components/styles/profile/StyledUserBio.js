import styled from 'styled-components';

export const StyledUserBio = styled.div`
    // border: 1px solid red;
    display: flex;
    // width: 40%
    padding: 1rem 2rem;
    justify-content: space-between;
    align-items: center;

    .avatar-div {
        width: 35%;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

    .other-info {
        // border: 1px solid;
        width: 60%;

        h6 {
            font-size: 26px;
            color: #36464f;
        }
        .bio-info {
            margin: 2rem 0;
            // margin-top: 2rem;
            
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