import React from 'react';
import '../style/profile.css';
import 'material-icons/iconfont/material-icons.css';
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';
import waves from '../images/waves.jpg';
import profileImage from '../images/sample-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Profile({ company }) {
	console.log(company);

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
								<h2>4.82</h2>
							</span>
						</div>
						<div id='i-box'>
							<span className='fa fa-star checked' />
							<span className='fa fa-star checked' />
							<span className='fa fa-star checked' />
							<span className='fa fa-star checked' />
							<span className='fa fa-star' />
						</div>
						<p>
							<u>11 ratings</u>
						</p>
						<MDBBtn className='mb-4 btn-grad'>contact</MDBBtn>
					</div>
				</div>
				<div className='catagories'>
					<div>
						<i className='material-icons'>people</i>
						{company.num_employees} Persons in Team
						<i className='material-icons'>edit</i>
					</div>
					<div>
						<i className='material-icons'>flag</i>established{' '}
						{company.founded_year}
						<i className='material-icons'>edit</i>
					</div>
					<div>
						<i className='material-icons'>computer</i>works remotely{' '}
						{company.remotely}
						<i className='material-icons'>edit</i>
					</div>
					<div>
						<i className='material-icons'>language</i>languages{' '}
						{company.languages}
						<i className='material-icons'>edit</i>
					</div>
					<div>
						<i className='material-icons'>speed</i>
						Respond Time {company.respond_time}
						<i className='material-icons'>edit</i>
					</div>
					<div>
						<i className='material-icons'>terminal</i>Accepts Test projects{' '}
						{company.test_project}
						<i className='material-icons'>edit</i>
					</div>
				</div>
				<hr />
				<div className='description'>
					<div>
						<h1>Description</h1>
					</div>
					<h5>{company.description}</h5>
				</div>
			</div>
		</main>
	);
}
