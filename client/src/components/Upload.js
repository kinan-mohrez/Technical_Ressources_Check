import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBFile } from 'mdb-react-ui-kit';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';

export default function Upload({ company, setCompany }) {
	const [image, setImage] = useState(null);
	const [cover, setCover] = useState(null);
	// console.log(company.company_id);
	const navigate = useNavigate();
	const [images, setImages] = React.useState([]);
	const maxNumber = 69;

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		// console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('image', image);
		formData.append('cover', cover);
		await fetch(`http://localhost:5000/upload/${company.company_id}`, {
			method: 'POST',
			body: formData,
		})
			.then((res) => {
				// console.log(res);
				navigate('/thank_you');
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const handleImageChange = (e) => {
		setImage(e.target.files[0]);
		// console.log(image);
	};
	const handleCoverChange = (e) => {
		setCover(e.target.files[0]);
		// console.log(cover);
	};

	return (
		<main>
			<header>
				<h3>Upload files</h3>
			</header>
			<div className='App'>
				<Form onSubmit={handleSubmit}>
					<div className='tb'>
						<div className='l-cnt'>
							<div className='cnt-label'></div>
							<div className='mb-4 row'>
								<Form.Group controlId='formFile' className='mb-4'>
									<Form.Label>Upload your logo</Form.Label>
									<Form.Control
										type='file'
										style={{ width: '80%' }}
										name='image'
										onChange={handleImageChange}
									/>
								</Form.Group>

								<Form.Group controlId='formFile' className='mb-4'>
									<Form.Label>Upload your cover</Form.Label>
									<Form.Control
										type='file'
										style={{ width: '80%' }}
										name='cover'
										onChange={handleCoverChange}
									/>
								</Form.Group>
							</div>
						</div>
						<div className='buton_center'>
							<MDBBtn
								className='mb-4 w-25
                         btn-grad'
							>
								finish
							</MDBBtn>
						</div>
					</div>
				</Form>
			</div>
		</main>
	);
}
