import Head from 'next/head';
const MainTemplate = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'Messenger'}</title>
				<meta name='description' content='' />
				<meta name='robots' content='index, follow' />
				<meta name='keywords' content='мессенджер, общение' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<div className='app'>
				<div className='container-fluid h-100 p-0'>
					<div className='row h-100 app__row'>{children}</div>
				</div>
			</div>
		</>
	);
};

export default MainTemplate;
