import React from 'react';

const Login = () => {
	return (
		<div className='login'>
			<div className='container'>
				<div className='row'>
					<div className='col-xxl-6 offset-xxl-6'>
						<form>
							<label for='exampleInputEmail1' className='form-label'>
								Введите id пользователя:
							</label>
							<input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
