import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { MDBBtn, MDBContainer, MDBFile } from 'mdb-react-ui-kit';
import '../style/Companyinfo.css';

import {
	CountryDropdown,
	RegionDropdown,
	CountryRegionData,
} from 'react-country-region-selector';
import { useNavigate } from 'react-router-dom';

export default function Companyinfo({ company }) {
	const navigate = useNavigate();
	useEffect(() => {
		if (company?.website) {
			navigate('/company');
		}
	}, [company.website, navigate]);

	const [validated, setValidated] = useState(false);
	const [country, setCountry] = useState('');
	const [region, setRegion] = useState('');
	const [remotly, setRemotly] = useState('');
	const [testProjects, setTestProjects] = useState(false);
	const [image, setImage] = useState({ preview: '', data: '' });
	const [cover, setCover] = useState({ preview: '', data: '' });
	console.log(company);

	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		setValidated(true);
		if (form.checkValidity() === true) {
			event.preventDefault();

			try {
				const Companyinformations = {
					company_id: company.company_id,
					name: company.name,
					email: company.email,
					loggedIn: company.loggedIn,
					founded_year: event.target.founded_year.value,
					country: { country }.country,
					city: { region }.region,
					responseTime: event.target.responseTime.value,
					website: event.target.website.value,
					categories: event.target.categories.value,
					teamSize: event.target.teamSize.value,
					languages: event.target.languages.value,
					remotly: { remotly }.remotly,
					testProjects: { testProjects }.testProjects,
					description: event.target.description.value,
					service: event.target.service.value,
				};
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(Companyinformations),
				};
				await fetch('http://localhost:5000/info', requestOptions)
					.then((response) => response.json())
					.then((res) => {
						console.log(res);
						navigate('/upload');
					});
			} catch (err) {
				console.error(err.message);
			}
		}
	};

	return (
		<main>
			<header>
				<h3>General Info</h3>
			</header>
			<div id='main-content'>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<div className='tb'>
						<div className='cnt-label'>
							<Row className='mb-3'>
								<Form.Group as={Col} md='5'>
									<Form.Label>Country</Form.Label>
									<Form.Select type='text' placeholder='Country'></Form.Select>
									<CountryDropdown
										value={country}
										onChange={(val) => setCountry(val)}
									/>

									<Form.Control.Feedback type='invalid'>
										Please provide a valid country.
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md='5' controlId='validationCustom03'>
									<Form.Label>Founded in year</Form.Label>
									<Form.Control
										type='number'
										placeholder=' the Year'
										name='founded_year'
										min='1900'
										max='2022'
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Please provide a valid founded year.
									</Form.Control.Feedback>
								</Form.Group>
							</Row>
						</div>
					</div>
					<div className='tb'>
						<div className='cnt-label'>
							<Row className='mb-3'>
								<Form.Group as={Col} md='5'>
									{/* controlId='validationCustom03' */}
									<Form.Label>City</Form.Label>
									<Form.Select
										type='select'
										placeholder='Country'
										name='City'
									></Form.Select>
									<RegionDropdown
										country={country}
										value={region}
										onChange={(val) => setRegion(val)}
									/>
									<Form.Control.Feedback type='invalid'>
										Please provide a valid city.
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md='5' controlId='validationCustom03'>
									<Form.Label>Response time</Form.Label>
									<Form.Control
										type='number'
										placeholder='Response time'
										name='responseTime'
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Please provide a valid Response time.
									</Form.Control.Feedback>
								</Form.Group>
							</Row>
						</div>
					</div>
					<div className='tb'>
						<div className='cnt-label'>
							<Row className='mb-3'>
								<Form.Group as={Col} md='5' controlId='validationCustom03'>
									<Form.Label>Website</Form.Label>
									<Form.Control
										type='text'
										placeholder='Website'
										name='website'
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Please provide a valid Website.
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md='5' controlId='validationCustom03'>
									<Form.Label>Categories</Form.Label>
									<Form.Control
										type='text'
										placeholder='Category'
										name='categories'
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Please provide a valid Category.
									</Form.Control.Feedback>
								</Form.Group>
							</Row>
						</div>
					</div>
					<div className='tb'>
						<div className='cnt-label'>
							<Row className='mb-3'>
								<Form.Group as={Col} md='5' controlId='validationCustom03'>
									<Form.Label>Team size</Form.Label>
									<Form.Control
										type='number'
										placeholder='Team size'
										name='teamSize'
										required
									/>
									<Form.Control.Feedback type='invalid'>
										Please provide a valid Team size.
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md='5' controlId='validationCustom03'>
									<Form.Label>Languages</Form.Label>
									<Form.Control
										as='select'
										placeholder='languages'
										name='languages'
										required
									>
										<option></option>
										<option value='Afrikaans'>Afrikaans</option>
										<option value='Albanian'>Albanian</option>
										<option value='Arabic'>Arabic</option>
										<option value='Armenian'>Armenian</option>
										<option value='Basque'>Basque</option>
										<option value='Bengali'>Bengali</option>
										<option value='Bulgarian'>Bulgarian</option>
										<option value='Catalan'>Catalan</option>
										<option value='Cambodian'>Cambodian</option>
										<option value='Chinese (Mandarin)'>
											Chinese (Mandarin)
										</option>
										<option value='Croatian'>Croatian</option>
										<option value='Czech'>Czech</option>
										<option value='Danish'>Danish</option>
										<option value='Dutch'>Dutch</option>
										<option value='English'>English</option>
										<option value='Estonian'>Estonian</option>
										<option value='Fiji'>Fiji</option>
										<option value='Finnish'>Finnish</option>
										<option value='French'>French</option>
										<option value='Georgian'>Georgian</option>
										<option value='German'>German</option>
										<option value='Greek'>Greek</option>
										<option value='Gujarati'>Gujarati</option>
										<option value='Hebrew'>Hebrew</option>
										<option value='Hindi'>Hindi</option>
										<option value='Hungarian'>Hungarian</option>
										<option value='Icelandic'>Icelandic</option>
										<option value='Indonesian'>Indonesian</option>
										<option value='Irish'>Irish</option>
										<option value='Italian'>Italian</option>
										<option value='Japanese'>Japanese</option>
										<option value='Javanese'>Javanese</option>
										<option value='Korean'>Korean</option>
										<option value='Latin'>Latin</option>
										<option value='Latvian'>Latvian</option>
										<option value='Lithuanian'>Lithuanian</option>
										<option value='Macedonian'>Macedonian</option>
										<option value='Malay'>Malay</option>
										<option value='Malayalam'>Malayalam</option>
										<option value='Maltese'>Maltese</option>
										<option value='Maori'>Maori</option>
										<option value='Marathi'>Marathi</option>
										<option value='Mongolian'>Mongolian</option>
										<option value='Nepali'>Nepali</option>
										<option value='Norwegian'>Norwegian</option>
										<option value='Persian'>Persian</option>
										<option value='Polish'>Polish</option>
										<option value='Portuguese'>Portuguese</option>
										<option value='Punjabi'>Punjabi</option>
										<option value='Quechua'>Quechua</option>
										<option value='Romanian'>Romanian</option>
										<option value='Russian'>Russian</option>
										<option value='Samoan'>Samoan</option>
										<option value='Serbian'>Serbian</option>
										<option value='Slovak'>Slovak</option>
										<option value='Slovenian'>Slovenian</option>
										<option value='Spanish'>Spanish</option>
										<option value='Swahili'>Swahili</option>
										<option value='Swedish '>Swedish </option>
										<option value='Tamil'>Tamil</option>
										<option value='Tatar'>Tatar</option>
										<option value='Telugu'>Telugu</option>
										<option value='Thai'>Thai</option>
										<option value='Tibetan'>Tibetan</option>
										<option value='Tonga'>Tonga</option>
										<option value='Turkish'>Turkish</option>
										<option value='Ukrainian'>Ukrainian</option>
										<option value='Urdu'>Urdu</option>
										<option value='Uzbek'>Uzbek</option>
										<option value='Vietnamese'>Vietnamese</option>
										<option value='Welsh'>Welsh</option>
										<option value='Xhosa'>Xhosa</option>
									</Form.Control>
									<Form.Control.Feedback type='invalid'>
										Please provide a valid city.
									</Form.Control.Feedback>
								</Form.Group>
							</Row>
						</div>
					</div>
					<div className='tb'>
						<div className='l-cnt'>
							<Row className='mb-3'>
								<Form.Group
									as={Col}
									md='5'
									controlId='validationCustom03'
									required
								>
									<p>Do you agree to paid test projects?</p>
									<Form.Check
										inline
										label='YES'
										name='testProjects'
										onChange={() => setTestProjects(true)}
										type='radio'
									/>
									<Form.Check
										inline
										label='NO'
										name='testProjects'
										onChange={() => setTestProjects(false)}
										type='radio'
									/>
									<Form.Control.Feedback type='invalid'>
										Please provide a valid city.
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group as={Col} md='5' controlId='validationCustom03'>
									<p>Do you work remotely?</p>
									<Form.Check
										inline
										label='YES'
										name='remotely'
										onChange={() => setRemotly('yes')}
										type='radio'
									/>
									<Form.Check
										inline
										label='NO'
										name='remotely'
										onChange={() => setRemotly('no')}
										type='radio'
									/>
									<Form.Control.Feedback type='invalid'>
										Please provide a valid city.
									</Form.Control.Feedback>
								</Form.Group>
							</Row>
						</div>
					</div>

					<div className='tb'>
						<div className='l-cnt'>
							<Form.Group>
								<Form.Label>
									Tell us about your agency and why companies should choose you.
								</Form.Label>
								<Form.Control
									as='textarea'
									placeholder='We are your full-service web agency for individual, digital solutions. With expertise and passion we take on projects around web development and online marketing - from small to complex, from conception to success measurement. With over 8 years of experience in web design, programming, eCommerce, search engine optimization as well as online marketing, we are your contact for successful online communication.'
									style={{ height: '150px', width: '80%' }}
									name='description'
									required
								/>
							</Form.Group>
						</div>
					</div>
					<div className='tb'>
						<div className='l-cnt'>
							<Form.Group>
								<Form.Label>What is your service?</Form.Label>
								<Form.Control
									as='textarea'
									placeholder='3D construction
                                         visualization 
                                         prototypes'
									style={{ height: '150px', width: '80%' }}
									name='service'
									required
								/>
							</Form.Group>
						</div>
					</div>
					{/* <div className='tb'>
						<div className='l-cnt'>
							<div className='cnt-label'></div>
							<div className='mb-4 row'>
								<Form.Group controlId='formFile' className='mb-4'>
									<Form.Label>Upload your logo</Form.Label>
									<Form.Control
										type='file'
										style={{ width: '80%' }}
										name='image'
									/>
								</Form.Group>

								<Form.Group controlId='formFile' className='mb-4'>
									<Form.Label>Upload your cover</Form.Label>
									<Form.Control
										type='file'
										style={{ width: '80%' }}
										name='cover'
									/>
								</Form.Group>
							</div>
						</div>
					</div> */}

					<div className='buton_center'>
						<MDBBtn
							className='mb-4 w-25
                         btn-grad'
						>
							Done
						</MDBBtn>
					</div>
				</Form>
			</div>
		</main>
	);
}
