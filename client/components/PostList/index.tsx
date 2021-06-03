import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ClearIcon from '@material-ui/icons/Clear';
import styles from './index.module.sass';
import useModal from '../../hooks/useModal';
import PostItem from './PostItem';
import axios from 'axios';
import socket from '../../utils/socket';

const PostList = ({ serverPosts }) => {
	const { toggleModal } = useModal();
	const [postInput, setPostInput] = useState<string>('');
	const [fileInput, setFileInput] = useState<string[]>([]);
	const [files, setFiles] = useState<any>([]);
	const inputFileRef = useRef();
	const [posts, setPosts] = useState(serverPosts);

	const addPost = async () => {
		if (!postInput.trim() && !fileInput.length) {
			// toggleModal({ title: 'Новости', body: 'Новость не опубликована' });
			return false;
		}
		const formData: FormData = await new FormData();
		await formData.append('text', postInput);
		await formData.append('image', files[0]);
		const response = await axios.post('http://localhost:9000/api/posts', formData);
		await socket.emit('POST:SEND', { ...response.data });

		setPostInput('');
		setFileInput([]);
	};

	const onPostAdded = async () => {
		socket.on('POST:SENT', async (data) => {
			setPosts((state) => [{ ...data }, ...state]);
		});
	};

	const inputFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		setFileInput(Array.from(files).map((file) => URL.createObjectURL(file)));
		setFiles(files);
	};

	const removeInputFile = (file: string) => {
		setFileInput((state) => state.filter((f) => f !== file));
	};

	useEffect(() => {
		onPostAdded();
	}, []);

	return (
		<section className={`${styles.postList__section} col-md-5 offset-md-1`}>
			<div className='post-list'>
				<div className='post-list__add'>
					<h4 className='post-list__add-header'>Добавить новость</h4>
					<textarea className={styles.postList__addInput} value={postInput} onChange={(e) => setPostInput(e.target.value)}></textarea>
					<div className={styles.postList__addFooter}>
						<button className={styles.postList__addBtn} onClick={addPost}>
							Опубликовать
						</button>
						<AttachFileIcon onClick={() => inputFileRef?.current?.click()} />
						<input type='file' multiple ref={inputFileRef} style={{ display: 'none' }} onChange={inputFileHandler} />
						<div className={styles.postList__previewList}>
							{fileInput?.map((file) => (
								<div className={styles.postList__previewWrapper}>
									<img className={styles.postList__preview} src={file} />
									<ClearIcon className={styles.postList__previewClear} onClick={() => removeInputFile(file)} />
								</div>
							))}
						</div>
					</div>
				</div>
				<h2 className='post-list__header'>Новости</h2>
				{posts?.map((post) => (
					<PostItem post={post} />
				))}
			</div>
		</section>
	);
};

export default PostList;
