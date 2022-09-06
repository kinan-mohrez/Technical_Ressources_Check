import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Home from './components/Home';
import { useState } from 'react';
import StarRating from './components/StarRating';
import Done from './components/Done';
import Companyinfo from './components/Companyinfo';
import Thank from './components/Thank';

function App() {
	const [company, setCompany] = useState(null);
	const [user, setUser] = useState(null);
	return (
		<div className='container'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/home' element={<Home user={user} />}></Route>
					<Route path='/rating' element={<StarRating />}></Route>
					<Route path='/done' element={<Done />}></Route>
					<Route
						path='/login'
						element={<Login setCompany={setCompany} setUser={setUser} />}
					></Route>
					<Route
						path='/company'
						element={<Profile company={company} />}
					></Route>
					<Route
						path='/information'
						element={<Companyinfo company={company} />}
					></Route>
					<Route path='/thank_you' element={<Thank />}></Route>
					<Route path='*' element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
