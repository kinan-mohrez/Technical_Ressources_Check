const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const port = process.env.PORT || 5000;
const pool = require('./db');
var session = require('express-session');

var cors = require('cors');
//middleware
app.use(cors());
app.use(express.json());

//Routes

//session
var sess = {
	secret: 'keyboard',
	cookie: {},
};
app.use(session(sess));
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

	if (errors.length <= 0) {
		pool
			.query(
				'INSERT INTO users ( first_name, last_name, user_name, email, password, image) VALUES ($1,$2,$3,$4,$5,$6) ;',
				[first_name, last_name, user_name, email, hashedPassword, image]
			)
			.then((data) => res.status(201).json(data))
			.then(res.json({ register: true }))
			.catch((err) => console.log(err));
	} else {
		res.json({ register: false, errors: errors });
	}
});

//add new company

app.post('/company', async (req, res) => {
	const {
		name,
		email,
		password,

		confirm_passsword,
	} = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);

	let errors = [];
	if (!name || !email || !password || !confirm_passsword) {
		errors.push({ message: 'Please enter all fields' });
	}

	if (password.length < 3) {
		errors.push({ message: 'Password must be a least 3 characters long' });
	}

	if (password !== confirm_passsword) {
		errors.push({ message: 'Passwords do not match' });
	}

	if (errors.length <= 0) {
		pool
			.query(
				'INSERT INTO companies (name, password, email ) VALUES ($1,$2,$3) ;',
				[name, hashedPassword, email]
			)
			.then((data) => res.status(201).json(data))
			.then(res.json({ register: true }))
			.catch((err) => console.log(err));
	} else {
		res.json({ register: false, errors: errors });
	}
});

app.post('/login', async (req, res) => {
	let errors = [];

	const potentialLogin = await pool.query(
		'SELECT * FROM companies WHERE email=$1',
		[req.body.email]
	);

	if (potentialLogin.rowCount > 0) {
		const isSamePass = await bcrypt.compare(
			req.body.password,
			potentialLogin.rows[0].password
		);
		if (isSamePass) {
			req.session.company = {
				loggedIn: true,
				company_id: potentialLogin.rows[0].company_id,
				description: potentialLogin.rows[0].description,
				name: potentialLogin.rows[0].name,
				company_id: potentialLogin.rows[0].company_id,
				email: potentialLogin.rows[0].email,
				country: potentialLogin.rows[0].country,
				website: potentialLogin.rows[0].website,
				num_employees: potentialLogin.rows[0].num_employees,
				respond_time: potentialLogin.rows[0].respond_time,
				founded_year: potentialLogin.rows[0].founded_year,
				image: potentialLogin.rows[0].image,
				category: potentialLogin.rows[0].category,
				cover: potentialLogin.rows[0].cover,
				languages: potentialLogin.rows[0].languages,
				test_project: potentialLogin.rows[0].test_project,
				city: potentialLogin.rows[0].city,
				remote: potentialLogin.rows[0].remote,
			};
			console.log('Successful company login');

			res.json({ company_login: req.session.company });
		} else {
			console.log('Wrong Password');
			errors.push({ message: 'Wrong Password' });
			res.json({ errors: errors });
		}
	} else {
		const potentialLogin = await pool.query(
			'SELECT * FROM users WHERE email=$1',
			[req.body.email]
		);
		if (potentialLogin.rowCount > 0) {
			const isSamePass = await bcrypt.compare(
				req.body.password,
				potentialLogin.rows[0].password
			);
			if (isSamePass) {
				req.session.user = {
					loggedIn: true,
					user_id: potentialLogin.rows[0].user_id,
					first_name: potentialLogin.rows[0].first_name,
					last_name: potentialLogin.rows[0].last_name,
					user_name: potentialLogin.rows[0].user_name,
					email: potentialLogin.rows[0].email,
					image: potentialLogin.rows[0].image,
				};
				console.log('Successful user login');

				res.json({ user_login: req.session.user });
			}
		} else {
			console.log('the Email is not correct');
			errors.push({ message: 'The E-mail is not correct' });
			res.json({ errors: errors });
		}
	}
});

app.get('/home', async (req, res) => {
	const potentialLogin = await pool.query('SELECT * FROM companies');
	if (potentialLogin.rowCount > 0) {
		res.json(potentialLogin);
	} else {
		res.json({ errors: errors });
	}
});

app.post('/rating', async (req, res) => {
	const ratingCompany = {
		budget: req.body.budget,
		quality: req.body.quality,
		deadlines: req.body.deadlines,
		collaboration: req.body.collaboration,
	};
	console.log(ratingCompany);
});

app.post('/companyrate', async (req, res) => {
	console.log(req.body.company_id);
	const companyRating = await pool.query(
		'SELECT * FROM evaluation WHERE company_id=$1',
		[req.body.company_id]
	);
	if (companyRating.rowCount > 0) {
		const ratingCompany = {
			budget: companyRating.rows[0].budget,
			quality: companyRating.rows[0].quality,
			deadlines: companyRating.rows[0].deadlines,
			collaboration: companyRating.rows[0].collaboration,
		};
		res.json({ ratingCompany: ratingCompany });
	}
});

app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});
