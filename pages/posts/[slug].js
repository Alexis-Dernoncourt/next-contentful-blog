import React from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { getAllPosts, getPostAndMorePosts } from "../../lib/api";
import { tablet, mobile, Width1460px } from '../../styles/responsive';
import Post from '../../components/Post';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  ${tablet({width: '90vw'})};
  ${mobile({width: '100vw'})};
`
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1.5rem 3rem;
  width: 100%;
  height: max-content;
  text-align: center;
  border-radius: .4rem;
  ${tablet({padding: '1.5rem 2rem'})};
  ${mobile({padding: '1.5rem 1rem', fontSize: '3.2rem'})};
`
const TextContent = styled.div`
  margin: 3rem 0;
  text-align: justify;
  ${mobile({padding: '1.5rem 1rem', fontSize: '1.4rem'})};
`
const DateContent = styled.small`
  margin: 3rem 0 1rem 0;
  width: 100%;
  text-align: center;
  color: #5e5e5e;
  ${Width1460px({textAlign: 'right'})};
  ${mobile({padding: '0 1rem'})};
`
const RelatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
  border-top: 1px solid #bbb;
`
const RelatedPostsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const RelatedPostsTitle = styled.p`
  font-size: 1.8rem;
`
const LoadingText = styled.h4`
  text-align: center;
  margin: 4rem auto;
`

const PostByTitle = ({ post, relatedPosts }) => {
  if (!post && !relatedPosts) {
    return <LoadingText>Loading...</LoadingText>
  } else {
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


        { relatedPosts && (
          <RelatedContainer>
            <RelatedPostsTitle>
            Articles récents
            </RelatedPostsTitle>

            <RelatedPostsContainer>
              {relatedPosts && relatedPosts.map(post => (
                <Post key={post.date} date={post.date} image={post.image} title={post.title} slug={post.slug} related={true}/>
                ))}
            </RelatedPostsContainer>
          </RelatedContainer>
        )}
      </Container>
    )
  }
}

export default PostByTitle


export const getStaticProps = async ({ params }) => {
  let preview = false
  const { post, relatedPosts } = await getPostAndMorePosts(preview, params.slug) ?? [];

  if (!post) {
    return {
      redirect: {
        destination: '/not-found',
        permanent: false
      }
    }
  }

  return {
    props: {
      post,
      relatedPosts
    },
    revalidate: 1
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts(false);

  let paths = posts.map((post) => ({
      params: {
          slug: post.slug
      }
  })
  );

  return {
      paths,
      fallback: true
  }
}
