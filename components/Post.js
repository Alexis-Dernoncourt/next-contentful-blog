import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  display: flex;
  width: 300px;
  height: 250px;
  border-radius: 4px;
  box-shadow: 0 0 24px #eee;
  transition: all .2s ease-in-out;
  &:hover{
    box-shadow: 0 0 24px #bbb;
    transform: scale(1.01) rotate(1.5deg);
  }
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem 1.5rem;
  min-height: 6.2rem;
`
const H2 = styled.h2`
  font-size: 2rem;
`
const DateInfo = styled.small`
  font-weight: 400;
  align-self: flex-end;
`
const Img = styled.img`
  max-width: 300px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`

const Post = ({ date, image, title, slug }) => {
  let { url, description } = image

  return (
    <Link href={`/posts/${slug}`}>
        <Container>
          <Img alt={description} src={url} />
          <Text>
            <H2>{title}</H2>
            <DateInfo>{new Date(date).toLocaleDateString('fr-FR')}</DateInfo>
          </Text>
        </Container>
    </Link>
  )
}

export default Post
