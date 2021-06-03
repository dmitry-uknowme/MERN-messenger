import styles from './index.module.sass';

const AudioItem = ({ audio, height }) => {
	const { _id, artist, title, image } = audio;

	return (
		<div className={styles.audio__card} key={_id} style={{ height }}>
			<div className={styles.audio__bg} style={{ background: `url(http://localhost:9000/${image})` }}></div>
			<div className='audio__play'></div>
			<div className='audio__add'></div>
			<div className='audio__share'></div>
			<div className='audio__artist'>{artist}</div>
			<div className='audio__name'>{title}</div>
		</div>
	);
};

export default AudioItem;
