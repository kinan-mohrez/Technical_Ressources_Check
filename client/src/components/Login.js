import React from 'react';
import '../style/login.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
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
	MDBCardBody,
	MDBCard,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';

export default function Login({ setCompany, setUser }) {
	const [justifyActive, setJustifyActive] = useState('tab1');
	const [errBackend, setError] = useState(['']);
	const [errorCompany, setErrorCompany] = useState(['']);
	const [errorUser, setErrorUser] = useState(['']);
	const navigate = useNavigate();
	setCompany(null);
	setUser(null);

	const onSubmitUserForm = async (e) => {
		e.preventDefault();

		try {
			const newUser = {
				first_name: e.target.first_name.value,
				last_name: e.target.last_name.value,
				user_name: e.target.user_name.value,
				email: e.target.email.value,
				password: e.target.password.value,
				confirm_passsword: e.target.confirm_passsword.value,
			};
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newUser),
			};
			await fetch('http://localhost:5000/user', requestOptions)
				.then((response) => response.json())
				.then((res) => {
					if (res.register) {
						setJustifyActive('tab1');
					} else {
						setErrorUser(res.errors[0].message);
					}
				});
		} catch (err) {
			console.error(err.message);
		}
	};

	const onSubmitCompanyForm = async (e) => {
		e.preventDefault();

		try {
			const newCompany = {
				name: e.target.name.value,
				email: e.target.email.value,
				password: e.target.password.value,
				confirm_passsword: e.target.confirm_passsword.value,
			};
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newCompany),
			};
			await fetch('http://localhost:5000/company', requestOptions)
				.then((response) => response.json())
				.then((res) => {
					if (res.register) {
						setJustifyActive('tab1');
					} else {
						setErrorCompany(res.errors[0].message);
					}
				});
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
			await fetch('http://localhost:5000/login', requestOptions)
				.then((response) => response.json())
				.then((res) => {
					console.log(res);

					if (res.company_login?.loggedIn === true) {
						setCompany(res.company_login);
						navigate('/information');
					} else if (res.user_login?.loggedIn === true) {
						setUser(res.user_login);
						navigate('/home');
					} else {
						setError(res.errors[0].message);
					}
				});
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
		<MDBContainer fluid className='p-4  overflow-hidden'>
			<MDBRow>
				<MDBCol
					md='5'
					className='text-center text-md-start d-flex flex-column justify-content-center'
				>
					<h1
						className='my-5 display-3 fw-bold ls-tight px-3'
						style={{ color: '#1B2559' }}
					>
						Build great business stories
					</h1>

					<p className='px-3' style={{ color: '#1B2559' }}>
						Every day on TRC, ambitious companies meet talented agencies to
						write successful business stories.
					</p>
				</MDBCol>
				<MDBCol md='2' className='position-relative'></MDBCol>

				<MDBCol md='4' className='position-relative'>
					<MDBCard className='my-5 bg-glass rounded-5 '>
						<MDBCardBody className='p-5 '>
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
										Company
									</MDBTabsLink>
								</MDBTabsItem>
							</MDBTabs>

							<MDBTabsContent>
								<MDBTabsPane show={justifyActive === 'tab1'}>
									<form onSubmit={onSubmitLoginForm}>
										<MDBInput
											wrapperClass='mb-0'
											label='Email address'
											name='email'
											id='form7Example1'
											type='email'
										/>

										<MDBInput
											wrapperClass='mb-0'
											label='Password'
											name='password'
											type='password'
										/>
										{errBackend.length > 2 && (
											<p className='danger'>
												<strong>error: {errBackend}</strong>
											</p>
										)}
										<MDBRow>
											<MDBCol col='5'>
												<MDBBtn
													tag='a'
													color='#1266f1'
													className='m-2'
													style={{ color: '#1266f1' }}
												>
													<MDBIcon fab icon='google' size='lg' />
												</MDBBtn>
											</MDBCol>
											<MDBCol col='1'>
												<p className='text-center mt-2'>or</p>
											</MDBCol>

											<MDBCol col='4'>
												<MDBInput
													wrapperClass='mb-4'
													className='m-2'
													placeholder='E-mail'
													name='emailsignin'
													type='text'
												/>
											</MDBCol>
										</MDBRow>
										<MDBBtn className='mb-4 w-100 btn-grad'>login</MDBBtn>
									</form>
									<p className='text-center'>
										<a href='#!'>Forgot password?</a>
									</p>
								</MDBTabsPane>

								<MDBTabsPane show={justifyActive === 'tab2'}>
									<form onSubmit={onSubmitUserForm}>
										<MDBRow>
											<MDBCol col='6'>
												<MDBInput
													wrapperClass='mb-0'
													label='First name'
													name='first_name'
													type='text'
													required
												/>
											</MDBCol>

											<MDBCol col='6'>
												<MDBInput
													wrapperClass='mb-0'
													label='Last name'
													name='last_name'
													type='text'
													required
												/>
											</MDBCol>
										</MDBRow>

										<MDBInput
											wrapperClass='mb-0'
											label='Username'
											name='user_name'
											type='text'
										/>
										<MDBInput
											wrapperClass='mb-0'
											label='Email'
											name='email'
											type='email'
										/>
										<MDBRow>
											<MDBCol col='6'>
												<MDBInput
													wrapperClass='mb-0'
													label='Password'
													name='password'
													type='password'
												/>
											</MDBCol>

											<MDBCol col='6'>
												<MDBInput
													wrapperClass='mb-0'
													label='Confirm Password'
													name='confirm_passsword'
													type='password'
												/>
											</MDBCol>
											{errorUser.length > 2 && (
												<p className='danger'>
													<strong>Error: {errorUser}</strong>
												</p>
											)}
										</MDBRow>
										<MDBBtn className='mb-4 w-100 btn-grad'>Sign up</MDBBtn>
									</form>
								</MDBTabsPane>

								<MDBTabsPane show={justifyActive === 'tab3'}>
									<form onSubmit={onSubmitCompanyForm}>
										<MDBInput
											wrapperClass='mb-0'
											label='Company Name'
											name='name'
											type='text'
											required
										/>
										<MDBInput
											wrapperClass='mb-0'
											label='Email address'
											name='email'
											type='email'
											required
										/>
										<MDBRow>
											<MDBCol col='6'>
												<MDBInput
													wrapperClass='mb-0'
													label='Password'
													name='password'
													type='password'
													required
												/>
											</MDBCol>

											<MDBCol col='6'>
												<MDBInput
													wrapperClass='mb-0'
													label='Confirm Password'
													name='confirm_passsword'
													type='password'
													required
												/>
											</MDBCol>
											{errorCompany.length > 2 && (
												<p className='danger'>
													<strong>error: {errorCompany}</strong>
												</p>
											)}
										</MDBRow>

										<MDBBtn className='mb-4 w-100 btn-grad'>Sign up</MDBBtn>
									</form>
								</MDBTabsPane>
							</MDBTabsContent>
						</MDBCardBody>
					</MDBCard>

					<div className='shadow'></div>

					<br />
					<br />
					<p className='px-3' style={{ color: '#1B2559' }}>
						By submitting this form I confirm that I have read the privacy
						policy and agree to the processing of my personal data by Buffle for
						the stated purposes. In case of consent, I can revoke my consent to
						this processing at any time.
					</p>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}
