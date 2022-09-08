import React, { useEffect, useState } from 'react';
import '../style/company_details.css';
import '../style/companies.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Rating } from 'react-simple-star-rating';
import { useNavigate } from 'react-router-dom';

export default function Companies({ company_details, setCompany }) {
	const [rating, setrating] = useState(['']);
	// console.log(company_details);
	const navigate = useNavigate();

	useEffect(() => {
		const getRate = async () => {
			const company_rate = {
				company_id: company_details.company_id,
			};
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(company_rate),
			};
			await fetch('http://localhost:5000/companyrate', requestOptions)
				.then((response) => response.json())
				.then((res) => {
					setrating(res.ratingCompany);
					// console.log(res);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		getRate();
	}, [company_details.company_id]);

	const goToCompanygPage = (event) => {
		event.preventDefault();
		console.log(company_details);
		setCompany(company_details);
		navigate('/company');
	};

	return (
		<div className='container'>
			<div className='td'>
				<div className='td'>
					<div className='image_company'>
						<img src='../../public/logo512.png' alt='company_image' />
					</div>
				</div>
				<div className='td'>
					<h3 className='hoverPointer' onClick={goToCompanygPage}>
						{company_details.name}
					</h3>
					<a href={company_details.website}>
						<Button variant='primary'>website</Button>
					</a>

					<Rating
						allowHalfIcon={true}
						ratingValue={rating.budget}
						readonly={true}
						size={20} /* Available Props */
					/>
				</div>
				<div className='td'>
					<div className='Vertical_Line'></div>
				</div>
				<div className='td'>
					<i className='material-icons'>flag</i>
					<i>{company_details.founded_year}</i>
					<i className='material-icons'>people</i>
					<i>{company_details.num_employees}</i>
					<i className='material-icons'>dvr</i>
					<i>{company_details.test_project === true ? 'yes' : 'NO'}</i>

					<i className='material-icons'>message</i>
					<i>{company_details.respond_time}h</i>
				</div>
			</div>
		</div>
	);
}
