import React from 'react';
import party from '../images/party_popper.png';
import '../style/done.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Thank({ company, setCompany }) {
	const navigate = useNavigate();
	// console.log(company);

	const goToprofilegPage = (event) => {
		event.preventDefault();
		const getInfo = async () => {
			const company_information = {
				company_id: company.company_id,
			};
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(company_information),
			};
			await fetch('http://localhost:5000/viewProfile', requestOptions)
				.then((response) => response.json())
				.then(async (res) => {
					// console.log(res.rows[0]);
					setCompany(res.rows[0]);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		getInfo();
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
