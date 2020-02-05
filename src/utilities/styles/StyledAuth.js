import styled from 'styled-components';

export const StyledAuthWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

export const LeftSection = styled.div`
    width: 50%;
    max-width: 50%;
    flex: 0 0 50%;
    height: 100vh;
    display: flex;
    background: #F8D96D;


    img {
        max-width: 70%;
        max-height: 70%;
        margin: auto;
    }
`;
export const RightSection = styled.div`
    width: 50%;
    max-width: 50%;
    flex: 0 0 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    img {
        width: 100%;
        height: 100%;
    }
`;
export const RightSectionLogo = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    height: 70px;
    padding: 1rem;

    img {
        width: fit-content;
        height: 50%;

    }
`;

export const RightSectionForm = styled.form`
    width: 70%;
    max-width: 100%;
    height: auto;
    padding: 1rem 3rem;
    margin: 4rem 0;

    .title-as-an-img {
        width: fit-content;
        margin: auto;
        height: 80px;
        text-align: center;

        img {
            width: 100%;
            height: 100%;
        }

    }
    .float-right-btn {
        float: right;
    }
    .form-input-wrapper {
        margin-top: 4rem;

        .form-group {
            margin-bottom: 4rem;

            input {
                background: rgba(248, 217, 109, 0.1); 
                border: 1px solid #F0D4D4;
                color: rgba(0, 0, 0, 0.45);
                font-size: 16px;
                // border-radius: 5px;
                display: block;
                width: 100%;
                height: calc(1.5em + 0.75rem + 2px);
                padding: 1rem 0.75rem;
                font-weight: 400;
                line-height: 1.5;
                background-clip: padding-box;
                border-radius: 0.25rem;
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            }
        }
    }
`;

