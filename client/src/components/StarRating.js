import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { MDBBtn } from 'mdb-react-ui-kit';
import '../style/starRating.css';
import { useNavigate } from 'react-router-dom';

export default function StarRating({ company, user }) {
	const [budget, setBudget] = useState(0);
	const [quality, setQuality] = useState(0);
	const [deadlines, setDeadlines] = useState(0);
	const [collaboration, setCollaboration] = useState(0); // initial rating value
	const navigate = useNavigate();
	console.log(company.company_id);
	console.log(user.user_id);

	// Catch Rating value
	const handleBudget = (rate) => {
		setBudget(rate);
		// other logic
	};
	const handleQuality = (rate) => {
		setQuality(rate);
		// other logic
	};
	const handleDeadlines = (rate) => {
		setDeadlines(rate);
		// other logic
	};
	const handleCollaboration = (rate) => {
		setCollaboration(rate);
		// other logic
	};

	const onSubmitRatingForm = async (e) => {
		e.preventDefault();

		try {
			const newRating = {
				budget: budget,
				quality: quality,
				deadlines: deadlines,
				collaboration: collaboration,
				company_id: company?.company_id,
				user_id: user?.user_id,
			};
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newRating),
			};
			await fetch('http://localhost:5000/rating', requestOptions).then(
				(res) => {
					// console.log(newRating);
					navigate('/done');
				}
			);
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<main>
			<header>
				<h3>Rate your experience</h3>
			</header>
			<form onSubmit={onSubmitRatingForm}>
				<div className='App'>
					<div>
						<h1>Share your opinion about {company.name} on TRC! </h1>
						<h5>Give a rating and help others make the right choice</h5>
					</div>
				</div>
				<div className='App'>
					<div>
						<h2>Budget</h2>
						<p>How satisfied are you with XXX in terms of budget?</p>
					</div>
					<Rating
						onClick={handleBudget}
						allowHalfIcon={true}
						ratingValue={budget} /* Available Props */
					/>
				</div>

				<div className='App'>
					<div>
						<h2>Quality</h2>
						<p>How satisfied are you with the quality of the work delivered?</p>
					</div>
					<Rating
						onClick={handleQuality}
						allowHalfIcon={true}
						ratingValue={quality} /* Available Props */
					/>
				</div>
				<div className='App'>
					<div>
						<h2>Deadlines</h2>
						<p>
							Were the results delivered on time? Did you experience a delay?
						</p>
					</div>
					<Rating
						onClick={handleDeadlines}
						allowHalfIcon={true}
						ratingValue={deadlines} /* Available Props */
					/>
				</div>
				<div className='App'>
					<div>
						<h2>Collaboration</h2>
						<p>
							How effective was the collaboration in terms of communication,
							support, motivation?
						</p>
					</div>
					<Rating
						onClick={handleCollaboration}
						allowHalfIcon={true}
						ratingValue={collaboration} /* Available Props */
					/>
				</div>
				<div className='App'>
					<MDBBtn className='mb-4 btn-grad'>submit</MDBBtn>
				</div>
			</form>
		</main>
	);
}
