import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../store';
import { useRouter } from 'next/router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/app.sass';
import ModalProvider from '../components/Modal/ModalProvider';

const WrappedApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();
	const isOnline = useTypedSelector((state) => state.user.isOnline);
	useEffect(() => {
		if (!isOnline) router.push('/login');
	}, [isOnline]);
	return (
		<ModalProvider>
			<Component {...pageProps} />
		</ModalProvider>
	);
};

export default wrapper.withRedux(WrappedApp);
