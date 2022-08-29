import React from 'react';
import '../style/login.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from 'react';
import {
	MDBContainer,
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
	MDBTabsContent,
	MDBTabsPane,
	MDBBtn,
	MDBIcon,
	MDBInput,
	MDBCheckbox,
	MDBRow,
	MDBCol,
} from 'mdb-react-ui-kit';

export default function Content() {
	const [justifyActive, setJustifyActive] = useState('tab1');

	const onSubmitUserForm = async (e) => {
		e.preventDefault();

		try {
			const newUser = {
				first_name: e.target.first_name.value,
				last_name: e.target.last_name.value,
				user_name: e.target.user_name.value,
				email: e.target.email.value,
				password: e.target.password.value,
			};
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newUser),
			};
			const response = await fetch(
				'http://localhost:3000/user',
				requestOptions
			);
			console.log(response);
		} catch (err) {
			console.error(err.message);
		}
	};

	const onSubmitCompanyForm = async (e) => {
		e.preventDefault();

		try {
			const newCompany = {
				first_name: e.target.first_name.value,
				last_name: e.target.last_name.value,
				user_name: e.target.user_name.value,
				email: e.target.email.value,
				password: e.target.password.value,
			};
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newCompany),
			};
			const response = await fetch(
				'http://localhost:3000/company',
				requestOptions
			);
			console.log(response);
		} catch (err) {
			console.error(err.message);
		}
	};

	const onSubmitLoginForm = async (e) => {
		e.preventDefault();

		try {
			const newLogin = {
				email: e.target.email.value,
				password: e.target.password.value,
			};
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newLogin),
			};
			const response = await fetch(
				'http://localhost:3000/login',
				requestOptions
			);
			console.log(response);
		} catch (err) {
			console.error(err.message);
		}
	};

	const handleJustifyClick = (value) => {
		if (value === justifyActive) {
			return;
		}

		setJustifyActive(value);
	};
	return (
		<MDBContainer className='p-3 my-5 d-flex flex-column w-50 background-radial-gradient'>
			<MDBTabs
				pills
				justify
				className='mb-3 d-flex flex-row justify-content-between'
			>
				<MDBTabsItem>
					<MDBTabsLink
						onClick={() => handleJustifyClick('tab1')}
						active={justifyActive === 'tab1'}
					>
						Login
					</MDBTabsLink>
				</MDBTabsItem>
				<MDBTabsItem>
					<MDBTabsLink
						onClick={() => handleJustifyClick('tab2')}
						active={justifyActive === 'tab2'}
					>
						Register
					</MDBTabsLink>
				</MDBTabsItem>
				<MDBTabsItem>
					<MDBTabsLink
						onClick={() => handleJustifyClick('tab3')}
						active={justifyActive === 'tab3'}
					>
						Register as Company
					</MDBTabsLink>
				</MDBTabsItem>
			</MDBTabs>

			<MDBTabsContent>
				<form onSubmit={onSubmitLoginForm}>
					<MDBTabsPane show={justifyActive === 'tab1'}>
						<div className='text-center mb-3'>
							<p>Sign in with:</p>

							<div
								className='d-flex justify-content-between mx-auto'
								style={{ width: '40%' }}
							>
								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='facebook-f' size='lg' />
								</MDBBtn>

								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='twitter' size='lg' />
								</MDBBtn>

								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='google' size='lg' />
								</MDBBtn>

								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='github' size='lg' />
								</MDBBtn>
							</div>

							<p className='text-center mt-3'>or:</p>
						</div>

						<MDBInput
							wrapperClass='mb-4'
							label='Email address'
							name='email'
							id='form1'
							type='email'
							required
						/>

						<MDBInput
							wrapperClass='mb-4'
							label='Password'
							name='password'
							id='form2'
							type='password'
							required
						/>

						<div className='d-flex justify-content-between mx-4 mb-4'>
							<MDBCheckbox
								name='flexCheck'
								value=''
								id='flexCheckDefault'
								label='Remember me'
							/>
							<a href='!#'>Forgot password?</a>
						</div>

						<MDBBtn className='mb-4 w-100'>Sign in</MDBBtn>
						<p className='text-center'>
							Not a member? <a href='#!'>Register</a>
						</p>
					</MDBTabsPane>
				</form>

				<form onSubmit={onSubmitUserForm}>
					<MDBTabsPane show={justifyActive === 'tab2'}>
						<div className='text-center mb-3'>
							<p>Sign in with:</p>

							<div
								className='d-flex justify-content-between mx-auto'
								style={{ width: '40%' }}
							>
								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='facebook-f' size='lg' />
								</MDBBtn>

								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='twitter' size='lg' />
								</MDBBtn>

								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='google' size='lg' />
								</MDBBtn>

								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='github' size='lg' />
								</MDBBtn>
							</div>

							<p className='text-center mt-3'>or:</p>
						</div>

						<MDBRow>
							<MDBCol col='6'>
								<MDBInput
									wrapperClass='mb-4'
									label='First name'
									name='first_name'
									id='form1'
									type='text'
									required
								/>
							</MDBCol>

							<MDBCol col='6'>
								<MDBInput
									wrapperClass='mb-4'
									label='Last name'
									name='last_name'
									id='form1'
									type='text'
									required
								/>
							</MDBCol>
						</MDBRow>

						<MDBInput
							wrapperClass='mb-4'
							label='Username'
							name='user_name'
							id='form1'
							type='text'
						/>
						<MDBInput
							wrapperClass='mb-4'
							label='Email'
							name='email'
							id='form1'
							type='email'
						/>
						<MDBRow>
							<MDBCol col='6'>
								<MDBInput
									wrapperClass='mb-4'
									label='Password'
									name='password'
									id='form1'
									type='password'
								/>
							</MDBCol>

							<MDBCol col='6'>
								<MDBInput
									wrapperClass='mb-4'
									label='Confirm Password'
									name='confirm_passsword'
									id='form1'
									type='password'
								/>
							</MDBCol>
						</MDBRow>
						<MDBInput
							wrapperClass='mb-4'
							label='image'
							name='image'
							id='form1'
							type='file'
						/>

						<div className='d-flex justify-content-center mb-4'>
							<MDBCheckbox
								name='flexCheck'
								id='flexCheckDefault'
								label='I have read and agree to the terms'
							/>
						</div>

						<MDBBtn className='mb-4 w-100'>Sign up</MDBBtn>
					</MDBTabsPane>
				</form>
				<form onSubmit={onSubmitCompanyForm}>
					<MDBTabsPane show={justifyActive === 'tab3'}>
						<div className='text-center mb-3'>
							<p>Sign in with:</p>

							<div
								className='d-flex justify-content-between mx-auto'
								style={{ width: '40%' }}
							>
								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='facebook-f' size='lg' />
								</MDBBtn>

								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='twitter' size='lg' />
								</MDBBtn>

								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='google' size='lg' />
								</MDBBtn>

								<MDBBtn
									tag='a'
									color='#1266f1'
									className='m-1'
									style={{ color: '#1266f1' }}
								>
									<MDBIcon fab icon='github' size='lg' />
								</MDBBtn>
							</div>

							<p className='text-center mt-3'>or:</p>
						</div>

						<MDBInput
							wrapperClass='mb-4'
							label='Email address'
							name='email'
							id='form1'
							type='email'
						/>
						<MDBInput
							wrapperClass='mb-4'
							label='Password'
							id='form2'
							type='password'
						/>

						<div className='d-flex justify-content-between mx-4 mb-4'>
							<MDBCheckbox
								name='flexCheck'
								value=''
								id='flexCheckDefault'
								label='Remember me'
							/>
							<a href='!#'>Forgot password?</a>
						</div>

						<MDBBtn className='mb-4 w-100'>Sign in</MDBBtn>
						<p className='text-center'>
							Not a member? <a href='#!'>Register</a>
						</p>
					</MDBTabsPane>
				</form>
			</MDBTabsContent>
		</MDBContainer>
	);
}
