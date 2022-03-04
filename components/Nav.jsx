import styled from 'styled-components'
import Link from 'next/link'
import { mobile, tablet, Width1150px, Width1460px } from '../styles/responsive'

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40rem;
    margin-right: 20rem;
    ${Width1460px({marginRight: '5rem', width: '30rem'})};
    ${mobile({marginRight: '2rem', width: '20rem'})};
`
const NavItemsContainer = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
`

const NavItemLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #e5e9ee;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 2.2rem;
    transition: color .2s ease;
    ${Width1460px({fontSize: '1.7rem', fontWeigth: '600'})};
    ${mobile({fontSize: '1.4rem', fontWeigth: '400'})};
`
const NavItem = styled.li`
    width: 10rem;
    height: 6rem;
    & ${NavItemLink} :hover{
        color: #A5AEB8;
    }
`


const Nav = () => {
  return (
    <NavContainer>
        <NavItemsContainer>
            <NavItem>
                <Link href='/' passHref>
                    <NavItemLink>Home</NavItemLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link href='/posts' passHref>
                    <NavItemLink>Articles</NavItemLink>
                </Link>
            </NavItem>
        </NavItemsContainer>
    </NavContainer>
  )
}

export default Nav