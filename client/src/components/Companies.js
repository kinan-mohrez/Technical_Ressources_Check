import React from 'react';
import '../style/company_details.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Companies({ company_details }) {
	return (
		<div className='container'>
			<div className='td'>
				<div className='td'>
					<div className='image_company'>
						<img src='../../public/logo512.png' alt='company_image' />
					</div>
				</div>
				<div className='td'>
					<h4>Company name</h4>
					<button>web</button>
				</div>
				<div className='td'>
					<div className='Vertical_Line'></div>
				</div>
				<div className='td'>
					<i className='material-icons'>flag</i>
					<i>hh</i>
					<i className='material-icons'>people</i>
					<i>hh</i>
					<i className='material-icons'>speed</i>
					<i>hh</i>
					<i className='material-icons'>message</i>
					<i>hh</i>
				</div>
			</div>
		</div>
	);
}
