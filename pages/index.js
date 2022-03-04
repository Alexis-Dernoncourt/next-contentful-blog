import Head from 'next/head'
import {getAllPosts} from "../lib/api"
import Post from '../components/Post'
import styled from 'styled-components'
import { mobile, tablet, Width1150px } from '../styles/responsive'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
  flex: 1;
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
const LinkContainer = styled.div`
  margin-right: 50rem;
  align-self: flex-end;
  ${mobile({margin: '0 auto'})};
  ${Width1150px({margin: '50px auto 0'})};
`
const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    text-decoration: underline;
  }
`

const Home = ({ posts }) => {
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
        <LinkContainer>
          <Link href='/posts' passHref>
            <StyledLink>
              Voir tous les articles
              <MdKeyboardArrowRight />
            </StyledLink>
          </Link>
        </LinkContainer>
      </Main>
    </>
  )
}

export default Home


export async function getStaticProps({preview = false}){
  let posts = (await getAllPosts(preview, "limit:4"))  ?? [];

  return {
    props: { preview, posts }
  }
  
}
