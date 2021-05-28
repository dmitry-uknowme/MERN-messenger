import React, { useRef, useState } from 'react';
import Image from 'next/image';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ReplyIcon from '@material-ui/icons/Reply';
import ClearIcon from '@material-ui/icons/Clear';
import styles from './index.module.sass';
import useModal from '../../hooks/useModal';

const PostList = () => {
	const { toggleModal } = useModal();
	const [postInput, setPostInput] = useState<string>('');
	const [fileInput, setFileInput] = useState<string[]>([]);
	const inputFileRef = useRef();
	const [posts, setPosts] = useState([
		{
			text: 'Всем привет! Как же хорошо на море!',
			images: ['http://s1.fotokto.ru/photo/full/115/1151957.jpg'],
		},
	]);

	const addPost = () => {
		if (!postInput.trim() && !fileInput.length) {
			toggleModal({ title: 'Новости', body: 'Новость не опубликована' });
			return false;
		}
		setPosts((state) => [{ text: postInput, images: fileInput }, ...state]);
		setPostInput('');
		setFileInput([]);
	};

	const inputFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		setFileInput(Array.from(files).map((file) => URL.createObjectURL(file)));
	};

	const removeInputFile = (file: string) => {
		setFileInput((state) => state.filter((f) => f !== file));
	};

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
				{posts.map(({ text, images }) => (
					<div className={styles.postList__item}>
						<div className='post-list__item-header'>
							<AccountCircleIcon className={styles.postList__itemProfile} /> Дима Богатырев
						</div>
						<div className='post-list__item-body'>
							{images?.map((img) => (
								<img className={styles.postList__itemImg} src={img} />
							))}
							{text}
						</div>
						<hr />
						<div className={styles.postList__itemFooter}>
							<div className='post-list__item-like'>
								<FavoriteBorderIcon />
								<span>1</span>
							</div>
							<div className='post-list__item-comment'>
								<ChatBubbleOutlineIcon />
								<span>1</span>
							</div>
							<ReplyIcon className='post-list__item-reply' />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default PostList;
