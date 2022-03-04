import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { fetchEntries } from '../../utils/contentfulPosts'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  text-align: center;
`
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1.5rem 3rem;
  //background-color: #eee;
  width: 100%;
  height: max-content;
  border-radius: 4px;
`
const TextContent = styled.div`
  margin: 30px 0;
`
const DateContent = styled.small`
  margin: 1rem 0 3rem 0;
`

const PostByTitle = ({ post }) => {
  const { title, content, date, image } = post.fields
  return (
    <Container>
      <Title>{title}</Title>
      <DateContent>{'Le ' + new Date(date).toLocaleDateString('fr-FR') + ' à ' + new Date(date).toLocaleTimeString('fr-FR').substring(0, 5)}</DateContent>
      <Image
        src={'https:' + image.fields.file.url}
        width={image.fields.file.details.image.width}
        height={image.fields.file.details.image.height}
      />
      <TextContent>
        <ReactMarkdown>{content}</ReactMarkdown>
      </TextContent>
    </Container>
  )
}

export default PostByTitle

export const getStaticProps = async ({ params }) => {
  const res = await fetchEntries({ content_type: 'blogPost', 'fields.slug': params.slug})
  return {
    props: {
      post: res[0]
    },
  }
}

export const getStaticPaths = async () => {
    const res = await fetchEntries({ content_type: 'blogPost'})
    const paths = res.map(p => {
      return {
        params: { slug: p.fields.slug }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
