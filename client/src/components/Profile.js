import React, { useEffect, useState } from 'react';
import '../style/profile.css';
import 'material-icons/iconfont/material-icons.css';
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';
import waves from '../images/waves.jpg';
import profileImage from '../images/sample-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Rating } from 'react-simple-star-rating';
import { useNavigate } from 'react-router-dom';

export default function Profile({ company, setCompany, user }) {
	const [ratingCompany, setRatingCompany] = useState(0);
	const [companyID, setcompanyID] = useState(localStorage.getItem('companyID'));
	// console.log(company);
	const navigate = useNavigate();

	useEffect(() => {
		if (company.company_id) {
			const getRate = async () => {
				const company_rate = {
					company_id: company.company_id || companyID,
				};
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(company_rate),
				};
				await fetch('http://localhost:5000/companyrate', requestOptions)
					.then((response) => response.json())
					.then((res) => {
						setRatingCompany(res.ratingCompany);
						localStorage.setItem(
							'companyID',
							JSON.stringify(company.company_id)
						);
						setcompanyID(localStorage.getItem('companyID'));
					})

					.catch((error) => {
						console.log(error);
					});
			};
			getRate();
		}
	}, [company?.company_id, company, companyID]);
	// console.log(ratingCompany);

	const goToRatingPage = (event) => {
		event.preventDefault();
		navigate('/rating');
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
						<span>{company.name}</span>
					</div>
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
				</div>
			</header>

			<div id='profile-upper'>
				<div id='profile-banner-image'>
					<img src={waves} alt='profile' />
				</div>
				<div id='profile-d'>
					<div id='profile-pic'>
						<img src={profileImage} alt='profile_image' />
					</div>
					<div id='u-name'>{company.name}</div>

					<div id='edit-profile'>
						<i className='material-icons'>camera_alt</i>
					</div>
				</div>
				<div id='black-grd' />
			</div>
			<div id='main-content'>
				<div className='tb'>
					<div className='td' id='l-col'>
						<div className='l-cnt'>
							<div className='cnt-label'>
								<span>
									<h2>{company.name}</h2>
								</span>
								<div className='lb-action'>
									<i className='material-icons'>edit</i>
								</div>
							</div>
							<div id='i-box'>
								<div id='u-loc'>
									<i className='material-icons'>location_on</i>
									<a href='#'>{company.city}</a> ,{' '}
									<a href='#'>{company.country}</a>
								</div>
							</div>
						</div>
					</div>
					<div className='td' id='m-col'>
						<div className='m-mrg' id='p-tabs'>
							<div className='tb'>
								<div className='td'>
									<div className='tb' id='p-tabs-m'>
										<div className='td active'>
											<i className='material-icons'>explore</i>
											<span>About</span>
										</div>
										<div className='td '>
											<i className='material-icons'>S</i>
											<span>Services</span>
										</div>

										<div className='td'>
											<i className='material-icons'>star</i>
											<span>Evaluation</span>
										</div>
										<div className='td'>
											<i className='material-icons'>image</i>
											<span>Portfolio</span>
										</div>
										<div className='td'>
											<i className='material-icons'>message</i>
											<span>Contact</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='l-cnt'>
						<div className='cnt-label'>
							<span>
								<h2>
									{ratingCompany?.allRating}
									<sub>/10</sub>
								</h2>
							</span>
						</div>
						<div id='i-box'>
							{
								<Rating
									allowHalfIcon={true}
									ratingValue={ratingCompany?.budget}
									readonly={true} /* Available Props */
								/>
							}
							<span>Budget</span>
						</div>
						<div id='i-box'>
							{
								<Rating
									allowHalfIcon={true}
									ratingValue={ratingCompany?.quality}
									readonly={true} /* Available Props */
								/>
							}
							<span>Quality</span>
						</div>
						<div id='i-box'>
							{
								<Rating
									allowHalfIcon={true}
									ratingValue={ratingCompany?.deadlines}
									readonly={true} /* Available Props */
								/>
							}
							<span>Deadlines</span>
						</div>
						<div id='i-box'>
							{
								<Rating
									allowHalfIcon={true}
									ratingValue={ratingCompany?.collaboration}
									readonly={true} /* Available Props */
								/>
							}
							<span>Collaboration</span>
						</div>
						<p>
							<u>{ratingCompany?.ratingNum} ratings</u>
						</p>
						<MDBBtn className='mb-4 btn-grad'>contact</MDBBtn>
					</div>
				</div>
				<div className='catagories'>
					<div>
						<i className='material-icons'>people</i>
						<strong>{company.num_employees}</strong> Persons in Team
					</div>
					<div>
						<i className='material-icons'>flag</i>established{' '}
						<strong>{company.founded_year}</strong>
					</div>
					<div>
						<i className='material-icons'>computer</i>works remotely{' '}
						<strong>{company.remote}</strong>
					</div>
					<div>
						<i className='material-icons'>language</i>languages{' '}
						<strong>{company.languages}</strong>
					</div>
					<div>
						<i className='material-icons'>speed</i>
						Respond Time <strong>{company.respond_time}</strong> hour
					</div>
					<div>
						<i className='material-icons'>terminal</i>Accepts Test projects{' '}
						<strong>{company.test_project ? 'Yes' : 'NO'}</strong>
					</div>
				</div>
				<hr />
				<div className='description'>
					<div>
						<h1>Description</h1>
					</div>
					<h5>{company.description}</h5>
				</div>
				<div className='App'>
					<span>
						<h2>
							{ratingCompany?.allRating}
							<sub>/10</sub>
						</h2>
					</span>
					<div id='i-box'>
						{
							<Rating
								allowHalfIcon={true}
								ratingValue={ratingCompany?.budget}
								readonly={true} /* Available Props */
							/>
						}
						<span>Budget</span>
					</div>
					<div id='i-box'>
						{
							<Rating
								allowHalfIcon={true}
								ratingValue={ratingCompany?.quality}
								readonly={true} /* Available Props */
							/>
						}
						<span>Quality</span>
					</div>
					<div id='i-box'>
						{
							<Rating
								allowHalfIcon={true}
								ratingValue={ratingCompany?.deadlines}
								readonly={true} /* Available Props */
							/>
						}
						<span>Deadlines</span>
					</div>
					<div id='i-box'>
						{
							<Rating
								allowHalfIcon={true}
								ratingValue={ratingCompany?.collaboration}
								readonly={true} /* Available Props */
							/>
						}
						<span>Collaboration</span>
					</div>
					<p>
						<u>{ratingCompany?.ratingNum} ratings</u>
					</p>
					
						<div>
							<div className='tb'>
								<div className='td' id='l-col'>
									<div className='l-cnt'>
										<div className='cnt-label'>
											<span>
												<p>Have you worked with {company.name} ?</p>
												<p>share your experience with us </p>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className='tb'>
								<div className='td' id='l-col'>
									<div className='l-cnt'>
										<div className='cnt-label'>
											<MDBBtn
												className='mb-4 btn-grad'
												onClick={goToRatingPage}
											>
												evaluate
											</MDBBtn>
										</div>
									</div>
								</div>
							</div>
						</div>
					
				</div>
			</div>
		</main>
	);
}
