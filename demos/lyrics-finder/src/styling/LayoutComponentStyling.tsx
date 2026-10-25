import { NavLink } from 'react-router-dom';
// Styled Components
import styled from 'styled-components';


const Navbar = styled.nav`
    position: relative;
    top: 0;
    left: 0;
    height: 100px;
    width: auto;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    background-color: white;
    z-index: 1;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 100%
    );
`;


const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
`

const Li = styled.li`
    padding-top: 10px;
    padding-right: 5px;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
    color: black;
    background: transparent;
    display:block;
    
    &.active {
        background: white;
        color: black;
    }
`



export { Navbar, Ul, Li, StyledLink }
