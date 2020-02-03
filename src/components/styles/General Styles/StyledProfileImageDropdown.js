import styled from 'styled-components';

export const StyledProfileImageDropdown = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        border-radius: 50%;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 900;
        margin-top: 20px;
        width: calc(100% - 100px);
        right: 0.5rem;
        overflow: hidden;
        box-sizing: border-box;
        // max-width: 280px;
        text-align: center;

        &.show {
            display: block;
        }

        &#dropdown-profile-content {
            margin-top: 7px!important;
        }

        ul {
            margin: 0;
            padding: 10px;


            li {
                list-style: none;
            }

            .dropdown-user-bio {
                // margin-bottom: 1rem;
                width: 100%;
                line-height: 1.4;
                white-space: nowrap;
                font-size: 18px;
                padding: 20px;
                
                p:last-child {
                    font-size: 1.2rem;
 
                }
            }

            .list-item-separator {
                height: 2px;
                border-bottom-color: rgba(0, 0, 0, 0.84);
            }
    
            .dropdown-links {
                a, button {
                    display: block;
                    text-decoration: none;
                    color: #636363;
                    padding: 7px 25px;
                    border-color: rgba(0, 0, 0, 0.6) !important;
                    color: rgba(0, 0, 0, 0.6) !important;
                    text-align: left;
                    width: 100%;
                    line-height: 1.4;
                    white-space: nowrap;
                    font-size: 1.6rem;
                }
                button {
                    border: none;
                    background: transparent;
                    outline: none;
                    cursor: pointer;
                }
            }
        }
        

    }



`;
