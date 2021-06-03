import { Tab, Tabs } from '@material-ui/core';
import { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUser } from '../../types/user';
import AudioItem from './AudioItem';
import styles from './index.module.sass';

const AudioList = ({ serverAudios }) => {
	const userData: IUser = useTypedSelector(({ user }) => user);
	const [tab, setTab] = useState('all');
	const [audios, setAudios] = useState(serverAudios);
	const [myAudios, setMyAudios] = useState(userData.audios);

	const tabHandler = (e, value) => {
		setTab(value);
	};

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
						{tab === 'all'
							? audios?.map((audio) => (
									<div className='col-md-3' style={{ marginTop: 90 }}>
										<AudioItem audio={audio} />
									</div>
							  ))
							: tab === 'my'
							? myAudios?.map((audio) => (
									<div className='col-md-3' style={{ marginTop: 90 }}>
										<AudioItem audio={audio} />
									</div>
							  ))
							: ''}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AudioList;
