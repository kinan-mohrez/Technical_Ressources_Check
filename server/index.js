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
				description: req.body.description,
				name: req.body.name,
				company_id: req.body.company_id,
				email: req.body.email,
				country: req.body.country,
				website: req.body.website,
				num_employees: req.body.num_employees,
				respond_time: req.body.respond_time,
				founded_year: req.body.founded_year,
				image: req.body.image,
				category: req.body.category,
				cover: req.body.cover,

				languages: req.body.languages,
				test_project: req.body.test_project,
				city: req.body.city,
				remote: req.body.remote,
			};
			console.log('Successful login');

			res.json({
				loggedIn: true,
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
				description: potentialLogin.rows[0].description,
				languages: potentialLogin.rows[0].languages,
				test_project: potentialLogin.rows[0].test_project,
				test_project: potentialLogin.rows[0].test_project,
				city: potentialLogin.rows[0].city,
				remote: potentialLogin.rows[0].remote,
			});
		} else {
			console.log('Wrong Password');
			errors.push({ message: 'Wrong Password' });
			res.json({ errors: errors });
		}
	} else {
		console.log('the Email is not correct');
		errors.push({ message: 'The E-mail is not correct' });
		res.json({ errors: errors });
	}
});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});
