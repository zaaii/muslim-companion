import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';

import { firebaseConfig } from '../configs/firebaseConfig';

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
