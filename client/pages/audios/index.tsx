import axios from 'axios';
import { GetServerSideProps } from 'next';
import AudioList from '../../components/AudioList';
import MainTemplate from '../../templates/MainTemplate';

const ChatsPage = ({ audios }) => {
	return (
		<MainTemplate title='Музыка'>
			<AudioList serverAudios={audios} />
		</MainTemplate>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await axios.get('http://localhost:9000/api/audios');
	return { props: { audios: data } };
};

export default ChatsPage;
