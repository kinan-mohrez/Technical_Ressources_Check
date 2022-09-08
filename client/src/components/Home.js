import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
import '../style/home.css';
import cube from '../images/cube_a.png';
import Companies from './Companies';
import ShowMore from 'react-show-more-list';
import { useNavigate } from 'react-router-dom';

export default function Home({ company, user, setCompany, setUser }) {
	const [companyDetails, setCompanyDetails] = useState(['']);
	const navigate = useNavigate();

	const [visible, setVisible] = useState(8);
	const loadMore = () => {
		setVisible(visible + 4);
	};
	useEffect(() => {
		const getcompany = async () => {
			await fetch('http://localhost:5000/home')
				.then((response) => response.json())
				.then((res) => {
					setCompanyDetails(res.rows);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		getcompany();
	}, []);

	const navigate_to_login = async (e) => {
		// navigate('/login');
		if (e.target.innerText === 'LOGIN') {
			console.log(e.target.innerText);
			navigate('/login');
		}
		if (e.target.innerText === 'LOGOUT') {
			setUser(null);
			console.log(e.target.innerText);
			navigate('/login');
		}
	};
	return (
		<main>
			<header>
				<div className='tb'>
					<div className='td' id='logo'>
						<a href='#'>LOGO</a>
					</div>
					<div className='td' id='search-form'>
						<form method='get' action='#'>
							<input type='text' placeholder='Search ...' />
							<button type='submit '>
								<i className='material-icons'>search</i>
							</button>
						</form>
					</div>
					<div className='td' id='f-name-l'>
						<MDBBtn className='mb-4 w-100 btn-grad' onClick={navigate_to_login}>
							{user?.loggedIn ? 'logout' : 'login'}
						</MDBBtn>
					</div>
					{user?.loggedIn && (
						<div className='td' id='f-name-l'>
							<span>{user.user_name}</span>
						</div>
					)}

					{user?.loggedIn && (
						<div className='td' id='i-links'>
							<div className='tb'>
								<div className='td'>
									<a href='#' id='p-link'>
										<img
											src='https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg'
											alt='profile_image'
										/>
									</a>
								</div>
							</div>
						</div>
					)}
				</div>
			</header>
			<div id='main-content'>
				<div className='tb'>
					<div className='td' id='l-col'>
						<div className='l-cnt'>
							<div className='cnt-label'>
								<h1>Tech resources that inspire</h1>
								<p>
									Search by category or regions and make your decision with the
									help of TRC. Choose your partner based on real customer
									reviews.
								</p>
							</div>
						</div>
					</div>

					<div className='td' id='l-col'>
						<img id='cubeImage' src={cube} alt='cube' />
					</div>
				</div>
				<div className='td' id='search'>
					<form method='get' action='#'>
						<input
							type='text'
							placeholder='Search for skills, company, region or category...'
						/>
						<button type='submit '>
							<i className='material-icons'>search</i>
						</button>
					</form>

					<div className='td' id='m-col'>
						Popular: Crypto Bots E-Commerce Cloud UX/UI Mobile App Blockchain
						No/Lowcode
					</div>
				</div>
				<div className='coloumn'>
					{companyDetails.slice(0, visible).map((com, index) => (
						<Companies
							key={index}
							company_details={com}
							company={company}
							user={user}
							setCompany={setCompany}
						/>
					))}
					{visible < companyDetails.length && (
						<button onClick={loadMore}>
							<i className='material-icons'>arrow_drop_down</i>
						</button>
					)}
				</div>
			</div>
		</main>
	);
}
