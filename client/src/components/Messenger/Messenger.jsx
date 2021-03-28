import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Messenger.css';

const Messenger = () => {
	const history = useHistory();

	useEffect(() => {
		history.push('/login');
	}, []);

	return (
		<div className='messenger'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 offset-md-2'>
						<div className='col-md-12'>
							<Link className='messenger__card-link' to='chat/1'>
								<div className='card messenger__card'>
									<div className='card-body messenger__card-body'>
										<h5 className='card-title messenger__card-user'>
											Андрей Чистяков <span className='messenger__card-user_status'>онлайн</span>
										</h5>
										{/* <p className='card-text messenger__card-message'>АУЕ! Дарова ебаный рот, я присоединился к этой социальной сети</p> */}
										<p className='card-text messenger__card-message'>димасик можешь распечатать</p>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messenger;
