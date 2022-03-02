import Theme from '../styles/theme';
import Layout from "../components/Layout";

// import store from '../redux/store'
// import { Provider } from 'react-redux'

function App({ Component, pageProps }) {
  return (
    //<Provider store={store}>
    <>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
    //</Provider>
  );
}

export default App;
