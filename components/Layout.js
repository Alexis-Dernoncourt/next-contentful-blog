import Header from './Header'
import Footer from './Footer'
import GlobalStyles from '../styles/globals';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Head = styled.div`
  position: sticky;
  top: 0;
  height: 9rem;
  z-index: 10;
  /* background: #00467F;  /* fallback for old browsers */
  /* background: -webkit-linear-gradient(to right, #A5CC82, #00467F);  Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(to right, #A5CC82, #00467F); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: #141E30;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`
const Main = styled.div`
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background-color: #fff;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyles />
      <Head>
        <Header />
      </Head>
      <Main>
        {children}
      </Main>
      <Foot>
        <Footer />
      </Foot>
    </Container>
  );
};

export default Layout;
