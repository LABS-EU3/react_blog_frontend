import styled from 'styled-components';

export const StyledNotificationIcon = styled.div`
        font-size: 20px;
        color: #707070;
        margin-left: 3rem;
        cursor: pointer;
        position: relative;

        &:after {
            // width: 0;
            // height: 0;
            // position: absolute;
            // right: 15px;
            // top: 50%;
            // margin-top: -3px;
            // border-width: 6px 6px 0 6px;
            // border-style: solid;
            // border-color: #8aa8bd transparent;
        }


`;

export const StyledNotificationDropdownContent = styled.div`
    position: absolute!important;
    top: 140%!important;
    // left: 0!important;
    // right: 0!important;
    margin-top: 0!important;
    min-width: 280px!important;

    padding: 0;

    li.card {
        list-style-type: none;
        padding: 0!important;
        border: none!important;
        border-bottom: 1px solid #c4c4c4;
        margin: 1rem 0 0 0!important;

        .body {
            font-size: 16px;
            color: #0e0e0e;
            margin: 0;
            display: flex!important;

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
                font-size: 14px;
                color: #090909;
                font-weight: bold;

                span {
                    font-weight: normal;
                    color: #636363;
                    font-size: 14px;
                }
            }
            p:last-child {
                font-size: 12px;
                color: #636363;
                text-align: left!important;

            }
        }
    }
`;