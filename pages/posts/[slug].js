import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { getAllPosts, getPostAndMorePosts } from "../../lib/api";
import { tablet, mobile } from '../../styles/responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  text-align: center;
  ${tablet({width: '90vw'})};
`
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1.5rem 3rem;
  width: 100%;
  height: max-content;
  border-radius: .4rem;
  ${tablet({padding: '1.5rem 2rem'})};
  ${mobile({padding: '1.5rem 1rem', fontSize: '3.2rem'})};
`
const TextContent = styled.div`
  margin: 3rem 0;
`
const DateContent = styled.small`
  margin: 1rem 0 3rem 0;
`

const PostByTitle = ({ post }) => {
  const { title, content, date, image } = post
  return (
    <Container>
      <Title>{title}</Title>
      <DateContent>{'Le ' + new Date(date).toLocaleDateString('fr-FR') + ' à ' + new Date(date).toLocaleTimeString('fr-FR').substring(0, 5)}</DateContent>
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcuONKJAAGtwKIyB9ZqAAAAABJRU5ErkJggg=="
      />
      <TextContent>
        <ReactMarkdown>{content}</ReactMarkdown>
      </TextContent>
    </Container>
  )
}

export default PostByTitle


// Fetch for a single post
export async function getStaticProps({ params }) {
  let { post, relatedPosts } = await getPostAndMorePosts(false, params.slug);
  console.log(post);
  return {
      props: {
        post,
        relatedPosts
      }
  }
}

// Fetch the other posts done at build time
export async function getStaticPaths() {
  const posts = await getAllPosts(false);

  let paths = posts.map((post) => {
      return {
        params: { slug: post.slug },
      }
    });
  return {
      paths,
      fallback: false
  }
}
