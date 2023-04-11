import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import store from "@/store/configureStore";
import { GlobalStyles } from "@/styles/GlobalStyles";

function myApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default myApp;
