import Head from 'next/head'
import {getAllPosts} from "../../lib/api"
import Post from '../../components/Post'
import styled from 'styled-components'
import { mobile, tablet, Width1150px } from '../../styles/responsive'

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 1.5rem;
  width: 100vw;
  height: calc(100vh - 13rem);
  ${tablet({height: 'max-content'})};
`
const Posts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

const PostsList = ({ posts }) => {
  return (
    <>
    <Head>
      <title>Next + Contentful Starter</title>
    </Head>
      <Main>
        { posts.length > 0 ? (
            <Posts>
              {posts.map((p) => (
                <Post key={p.date} date={p.date} image={p.image} title={p.title} slug={p.slug} />

              ))}
            </Posts>
          ) : (
            <p style={{ textAlign: 'center' }}>Il n'y a pas encore d'articles!</p>
          )
        }
      </Main>
    </>
  )
}

export default PostsList


export const getStaticProps = async (ctx) => {
  let preview = false
  const posts = (await getAllPosts(preview, "limit:12"))  ?? [];

  return {
    props: {
      preview,
      posts
    },
    revalidate: 1
  };
};
