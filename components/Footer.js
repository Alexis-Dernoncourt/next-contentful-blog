import styled from 'styled-components'

const Foot =styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.img`
  height: 1em;
  margin: 5px;
`


export default function Footer() {
  return (
    <>
      <Foot>
        Made with{' '}
        <Logo src="/netliheart.svg" alt="Netlify Logo" /> for
        you
      </Foot>
    </>
  )
}
