import styled from 'styled-components'

const StyledHeroFilter = styled.div`
position: absolute;
top: 0;
left: 0;
background: url(${props => props.img}) center/cover no-repeat;
filter: blur(2px);
width: 100%;
height: 100%;
`

export default StyledHeroFilter