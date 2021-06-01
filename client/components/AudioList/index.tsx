import { Tab, Tabs } from '@material-ui/core';
import { useState } from 'react';
import styles from './index.module.sass';

const AudioList = () => {
	const [tab, setTab] = useState('all');
	const [audios, setAudios] = useState();
	const tabHandler = (e, value) => setTab(value);

	return (
		<section className='audioList__section col-md-6'>
			<div className='col-md-12'>
				<div className='audioList__header'>
					<Tabs value={tab} onChange={tabHandler} indicatorColor='primary'>
						<Tab label='Вся музыка' value='all' />
						<Tab label='Моя музыка' value='my' />
						<Tab label='Артисты' value='artist' />
					</Tabs>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-md-3'>
							<div className={styles.audio__card}>
								<div className={styles.audio__bg} style={{ background: 'url(http://localhost:9000/image/0daf63d5-deb8-4b99-959d-83242e9d0611.jpg)' }}></div>
								<div className='audio__play'></div>
								<div className='audio__add'></div>
								<div className='audio__share'></div>
								<div className='audio__artist'>Михаил Шуфутинский</div>
								<div className='audio__name'>3-е сентября</div>
							</div>
						</div>
						<div className='col-md-3'>
							<div className={styles.audio__card}>
								<div className={styles.audio__bg} style={{ background: 'url(http://localhost:9000/image/0daf63d5-deb8-4b99-959d-83242e9d0611.jpg)' }}></div>
								<div className='audio__play'></div>
								<div className='audio__add'></div>
								<div className='audio__share'></div>
								<div className='audio__artist'>Михаил Шуфутинский</div>
								<div className='audio__name'>3-е сентября</div>
							</div>
						</div>
						<div className='col-md-3'>
							<div className={styles.audio__card}>
								<div className={styles.audio__bg} style={{ background: 'url(http://localhost:9000/image/0daf63d5-deb8-4b99-959d-83242e9d0611.jpg)' }}></div>
								<div className='audio__play'></div>
								<div className='audio__add'></div>
								<div className='audio__share'></div>
								<div className='audio__artist'>Михаил Шуфутинский</div>
								<div className='audio__name'>3-е сентября</div>
							</div>
						</div>
						<div className='col-md-3'>
							<div className={styles.audio__card}>
								<div className={styles.audio__bg} style={{ background: 'url(http://localhost:9000/image/0daf63d5-deb8-4b99-959d-83242e9d0611.jpg)' }}></div>
								<div className='audio__play'></div>
								<div className='audio__add'></div>
								<div className='audio__share'></div>
								<div className='audio__artist'>Михаил Шуфутинский</div>
								<div className='audio__name'>3-е сентября</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AudioList;
