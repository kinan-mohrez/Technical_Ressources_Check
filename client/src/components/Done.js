import React from 'react';
import party from '../images/party_popper.png';
import '../style/done.css';
import { MDBBtn, MDBRadio, MDBTextArea } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function Done({ user }) {
	const navigate = useNavigate();
	const goToHomegPage = (event) => {
		event.preventDefault();
		navigate('/home');
	};
	return (
		<main>
			<header>
				<h2>Done</h2>
			</header>
			<div className='App'>
				<div className='image'>
					<img src={party} alt='party_popper'></img>
				</div>
			</div>
			<div className='App'>
				<h1>Thank you!</h1>
				<p>
					You successfully submitted your review and helped others to build
					great business stories.
				</p>
			</div>
			<div className='App'>
				<p>Would you recommend TRC?</p>
			</div>
			<div className='App'>
				<MDBRadio
					name='inlineRadio'
					id='inlineRadio1'
					value='YES'
					label='YES'
					inline
				/>
				<MDBRadio
					name='inlineRadio'
					id='inlineRadio2'
					value='NO'
					label='NO'
					inline
				/>
			</div>
			<div className='App'>
				<p>Share your private feedback with us</p>
				<MDBTextArea label='' id='textAreaExample' rows={6} cols={12} />
			</div>
			<div className='App'>
				<MDBBtn className='mb-4 btn-grad' onClick={goToHomegPage}>
					submit
				</MDBBtn>
			</div>
		</main>
	);
}
