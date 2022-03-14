import Head from 'next/head'
import {getAllPosts, getAllSectionInfos} from "../lib/api"
import Post from '../components/Post'
import styled from 'styled-components'
import { mobile, tablet, Width1150px } from '../styles/responsive'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
  width: 100vw;
  height: calc(100vh - 13rem);
  ${tablet({height: 'max-content'})};
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 5rem;
  width: 100vw;
  height: calc(100vh - 13rem);
  ${tablet({height: 'max-content'})};
`
const DivInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6787A1; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right,#FFD5BC,#6787A1); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right,#FFD5BC,#6787A1); /* W3C, IE 10+/ Edge, Firefox 16+, */
  width: 100%;
  margin: 0 0 3rem;
  padding: 2rem 0;
  ${tablet({padding: '1rem'})};
`
const Title = styled.h2`
  margin: 2rem 0;
  color: #19273c;
  ${mobile({fontSize: '3rem'})};
`
const Content=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: #6d6969 .1rem 0 .3rem;
  ${mobile({textAlign: 'center'})};
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
  ${Width1150px({margin: '5rem auto 0'})};
`
const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    text-decoration: underline;
  }
`

const Home = ({ posts, sectionInfos }) => {
  const sectionInfo = sectionInfos[0];

  return (
    <>
    <Head>
      <title>Next + Contentful Starter</title>
    </Head>
    <Section>
      <DivInfoContainer>
        <Title>{sectionInfo.title}</Title>
        <Content>
          {documentToReactComponents(sectionInfo.textContent.json)}
        </Content>
      </DivInfoContainer>
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
    </Section>
    </>
  )
}

export default Home


export const getStaticProps = async () => {
  let preview = false
  const posts = (await getAllPosts(preview, "limit:4"))  ?? [];
  const sectionInfos = (await getAllSectionInfos(preview))  ?? [];

  return {
    props: {
      preview,
      posts,
      sectionInfos
    },
    revalidate: 1
  };
};
