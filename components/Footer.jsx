import styled from 'styled-components'

const Foot =styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  padding: .7rem 0;
  width: 100%;
  background-color: #f3f3f3;
`
const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .5rem 0;
`
const SmallText = styled.small`
  font-size: 1.2rem;
  margin: .5rem 0;
`


const Footer = () => {
  return (
    <>
      <Foot>
        <DivContainer>
          Made with NextJS + Contentful
        </DivContainer>
        <SmallText> 2022 © Alexis Dernoncourt</SmallText>
      </Foot>
    </>
  )
}

export default Footer
