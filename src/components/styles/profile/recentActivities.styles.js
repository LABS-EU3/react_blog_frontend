import styled from 'styled-components';

export const StyledRecentActivity = styled.div`



    .card {
        height: auto;
        border: none;
        padding: 1.5rem;
    }

    .card .title {
        margin-bottom: 0.5rem;
    }
    .card .title p {
        font-size: 20px;
        color: #333;
    }

    .card .body {
        font-size: 16px;
        color: #0e0e0e;
        margin: 2rem 0;
        display: flex;

        .img-wrapper {
            height: 40px;
            width: 40px;
            margin-right: 1.2rem;

            img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .activity-wrapper {
            p:first-child {
                font-size: 16px;
                color: #090909;
                font-weight: bold;

                span {
                    font-weight: normal;
                    color: #636363;
                    font-size: 14px;
                }
            }
            p:last-child {
                font-size: 14px;
                color: #636363;

            }
        }
    }





`;
