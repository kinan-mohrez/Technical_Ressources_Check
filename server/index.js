const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const port = process.env.PORT || 5000;
const pool = require('./db');

var cors = require('cors');
//middleware
app.use(cors());
app.use(express.json());

//Routes

//add new user

app.post('/user', async (req, res) => {
	const {
		first_name,
		last_name,
		user_name,
		email,
		password,
		confirm_passsword,
		image,
	} = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);

	let errors = [];
	if (
		!first_name ||
		!last_name ||
		!user_name ||
		!email ||
		!password ||
		!confirm_passsword
	) {
		errors.push({ message: 'Please enter all fields' });
	}

	if (password.length < 3) {
		errors.push({ message: 'Password must be a least 3 characters long' });
	}

	if (password !== confirm_passsword) {
		errors.push({ message: 'Passwords do not match' });
	}

	pool
		.query(
			'INSERT INTO users ( first_name, last_name, user_name, email, password, image) VALUES ($1,$2,$3,$4,$5,$6) ;',
			[first_name, last_name, user_name, email, hashedPassword, image]
		)
		.then((data) => res.status(201).json(data))
		.catch((err) => console.log(err));
});

//add new company

app.post('/company', (req, res) => {
	const {
		name,
		password,
		email,
		country,
		website,
		num_employees,
		respond_time,
		founded_year,
		image,
	} = req.body;
	pool
		.query(
			'INSERT INTO companies (name, password, email , country, website ,num_employees, respond_time ,founded_year,image) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) ;',
			[
				name,
				password,
				email,
				country,
				website,
				num_employees,
				respond_time,
				founded_year,
				image,
			]
		)
		.then((data) => res.status(201).json(data))
		.catch((err) => console.log(err));
});

app.post('/login', async (req, res) => {
	const potentialLogin = await pool.query(
		'SELECT  email, password FROM users WHERE email=$1',
		[req.body.email]
	);
	if (potentialLogin.rowCount > 0) {
		const isSamePass = await bcrypt.compare(
			req.body.password,
			potentialLogin.rows[0].password
		);
		if (isSamePass) {
			console.log('Successful login');
		} else {
			console.log('Wrong Password');
		}
	} else {
		console.log('the Email is not correct');
	}
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});
