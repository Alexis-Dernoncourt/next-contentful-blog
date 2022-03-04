import Nav from './Nav'
import styled from 'styled-components'
import { mobile, tablet, Width1150px, Width1460px } from '../styles/responsive'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`
const MainTitle = styled.h1`
  margin-left: 4rem;
  color: #e5e9ee;
  ${Width1150px({fontSize: '1.5rem', maxWidth: '20rem'})};
  ${mobile({fontSize: '1.4rem', maxWidth: '10rem', marginLeft: '2rem'})};
`

const Header = () => {
  return (
    <Container>
      <MainTitle>Next + Contentful Starter Blog</MainTitle>
      <Nav />
    </Container>
  )
}

export default Header
