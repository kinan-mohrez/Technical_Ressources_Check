import React from 'react';
import party from '../images/party_popper.png';
import '../style/done.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Thank({ company }) {
	const navigate = useNavigate();

	const goToprofilegPage = (event) => {
		event.preventDefault();
		navigate('/company');
	};

	return (
		<main>
			<header>
				<h2>Thank You !</h2>
			</header>
			<div className='App'>
				<div className='image'>
					<img src={party} alt='party_popper'></img>
				</div>
			</div>
			<div className='App'>
				<h1>Thank you!</h1>
				<p>
					You successfully submitted your company. We will tell you when you are
					online after reviewing your application.
				</p>
				<p>
					Share this <a href=''>link</a> to invite your customers to review your
					company.
				</p>
				<div className='App'>
					<MDBBtn className='mb-4 btn-grad' onClick={goToprofilegPage}>
						view profile
					</MDBBtn>
				</div>
			</div>
		</main>
	);
}
