import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store';
import { useRouter } from 'next/router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();
	const isOnline = useTypedSelector((state) => state.user.isOnline);
	useEffect(() => {
		if (!isOnline) router.push('/login');
	}, []);
	return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
