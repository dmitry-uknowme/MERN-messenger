import React, { useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { AppProps } from "next/app";
import { wrapper } from "../store";
import { useRouter } from "next/router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/app.sass";
import ModalProvider from "../components/Modal/ModalProvider";

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  //   const [session, loading] = useSession();
  //   const router = useRouter();
  //   const isOnline = useTypedSelector((state) => state.user.isOnline);
  // useEffect(() => {
  // 	if (!isOnline) router.push('/login');
  // }, [isOnline]);
  // useEffect(() => {
  // 	if (!session) router.push('/login');
  // }, [session]);
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Hydrate state={pageProps.dehydratedState}> */}
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
      {/* </Hydrate> */}
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(WrappedApp);
