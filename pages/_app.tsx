import '../styles/global.css';
import '../src/components/API/API.css';
import '../src/components/Cards/Cards.css';
import '../src/components/ErrorButton/ErrorButton.css';
import '../src/components/Loader/Loader.css';
import '../src/components/Modal/Modal.css';
import '../src/components/Pagination/Pagination.css';
import '../src/components/RightItem/RightItem.css';
import '../src/components/Search/Search.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
