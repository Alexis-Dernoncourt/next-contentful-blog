import styled from 'styled-components'

const Foot =styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 5px;
`


const Footer = () => {
  return (
    <>
      <Foot>
        Made with
        <Logo src="/netliheart.svg" alt="Netlify Logo" />
        for you
      </Foot>
    </>
  )
}

export default Footer
