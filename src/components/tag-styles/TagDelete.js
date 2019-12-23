import styled from 'styled-components'

const TagDelete = styled.span.attrs(props => ({
    'data-test': `tag-delete-${props.index}`,
}))`
    color: #69626D;
    font-size: 1em;
    &:hover {
        color: #69626D;
    }
`

export default TagDelete;