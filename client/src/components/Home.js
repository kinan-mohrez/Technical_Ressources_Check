import React from 'react';
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

export default function Home() {
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
					<MDBBtn className='mb-4 w-100 btn-grad'>
						logout
						<i className='material-icons'>logout</i>
					</MDBBtn>
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
			</div>
		</main>
	);
}
