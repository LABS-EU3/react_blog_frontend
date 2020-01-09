import styled from 'styled-components';

export const StyledRow = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 15px;
    margin-left: 15px;
    border: 2px solid purple;
`;
export const StyledContainer = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    &.mt-3 {
        margin-top: 2.5rem;
    }

`

export const StyledColumn = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

`
export const StyledColumn4 = styled.div`
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;

`;

export const StyledColumn5 = styled.div`
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;

`;
export const StyledColumn6 = styled.div`
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    border: 3px solid orange

`;