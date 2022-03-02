import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin: 10px;
  width: 300px;
  color: white;
  cursor: pointer;
`
const Desc = styled.div`
  position: absolute;
  top: 0;
  padding: 10px;
  box-sizing: border-box;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 100%);
  height: 100px;
  opacity: 0;
  transition: opacity 0.5s;

  ${Container}:hover & {
    opacity: 1;
  }
`
const Text = styled.div`
  position: absolute;
  bottom: 3px;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0) 100%);
`
const H2 = styled.h2`
  margin: 5px;
  margin-bottom: 0;
`
const H3 = styled.h3`
  margin: 5px;
  margin-top: 0;
  font-size: 0.8em;
  font-weight: 400;
`
const Img = styled.img`
  max-width: 300px;
  height: 100%;
  object-fit: cover;
`

function Post({ date, image, title }) {
  let { file, description } = image

  return (
    <Container>
      <Img alt={description} src={`https:${file.url}`} />
      <Desc>{description}</Desc>
      <Text>
        <H2>{title}</H2>
        <H3>{new Date(date).toLocaleDateString('fr-FR')}</H3>
      </Text>
    </Container>
  )
}

export default Post
