const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const port = process.env.PORT || 5000;
const pool = require('./db');
var session = require('express-session');
const fileUpload = require('express-fileupload');

var cors = require('cors');
//middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());

//Routes

//session
var sess = {
	secret: 'keyboard',
	cookie: {},
};
app.use(session(sess));
//add new user

app.post('/user', async (req, res) => {
	const client = await pool.connect();
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
	try {
		if (errors.length <= 0) {
			client
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
	} finally {
		client.release();
	}
});

//add new company

app.post('/company', async (req, res) => {
	const client = await pool.connect();
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
	try {
		if (errors.length <= 0) {
			client
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
	} finally {
		client.release();
	}
});

app.post('/login', async (req, res) => {
	const client = await pool.connect();
	let errors = [];

	const potentialLogin = await client.query(
		'SELECT * FROM companies WHERE email=$1',
		[req.body.email]
	);
	try {
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
	} finally {
		client.release();
	}
});

app.get('/home', async (req, res) => {
	const client = await pool.connect();
	const potentialLogin = await client.query('SELECT * FROM companies');
	try {
		if (potentialLogin.rowCount > 0) {
			res.json(potentialLogin);
		} else {
			res.json({ errors: errors });
		}
	} finally {
		client.release();
	}
});

app.post('/rating', async (req, res) => {
	const client = await pool.connect();
	client
		.query(
			'INSERT INTO evaluation ( budget, quality, deadlines, collaboration, company_id, user_id) VALUES ($1,$2,$3,$4,$5,$6) ;',
			[
				req.body.budget,
				req.body.quality,
				req.body.deadlines,
				req.body.collaboration,
				req.body?.company_id,
				req.body?.user_id,
			]
		)
		.then((data) => res.status(201).json(data))
		.then(res.json({ register: true }))
		.catch((err) => console.log(err));
	const ratingCompany = {
		budget: req.body.budget,
		quality: req.body.quality,
		deadlines: req.body.deadlines,
		collaboration: req.body.collaboration,
		company_id: req.body.company_id,
		user_id: req.body.user_id,
	};
	console.log(ratingCompany);
	client.release();
});

app.post('/companyrate', async (req, res) => {
	const client = await pool.connect();

	// console.log(req.body.company_id);
	const companyRating = await client.query(
		'SELECT  AVG(budget) AS avg_budget , AVG(quality) AS avg_quality,AVG(deadlines) AS avg_deadlines,AVG(collaboration) AS avg_collaboration FROM evaluation WHERE company_id=$1',
		[req.body.company_id]
	);

	const numRating = await client.query(
		'SELECT * FROM evaluation WHERE company_id=$1',
		[req.body.company_id]
	);

	try {
		if (companyRating.rowCount > 0) {
			// console.log(companyRating.rowCount + client.connect);

			const ratingCompany = {
				budget:
					Math.round(parseFloat(companyRating.rows[0].avg_budget) / 10) * 10,
				quality:
					Math.round(parseFloat(companyRating.rows[0].avg_quality) / 10) * 10,
				deadlines:
					Math.round(parseFloat(companyRating.rows[0].avg_deadlines) / 10) * 10,
				collaboration:
					Math.round(parseFloat(companyRating.rows[0].avg_deadlines) / 10) * 10,
				allRating:
					Math.round(
						(Math.round(parseFloat(companyRating.rows[0].avg_budget) / 10) *
							10 +
							Math.round(parseFloat(companyRating.rows[0].avg_quality) / 10) *
								10 +
							Math.round(parseFloat(companyRating.rows[0].avg_deadlines) / 10) *
								10 +
							Math.round(parseFloat(companyRating.rows[0].avg_deadlines) / 10) *
								10) /
							4
					) / 10,
				ratingNum: numRating.rowCount,
			};
			res.json({ ratingCompany: ratingCompany });
			// console.log(numRating.rowCount);
		}
	} finally {
		client.release();
	}
});

app.post('/info', async (req, res) => {
	const client = await pool.connect();
	await client
		.query(
			'UPDATE companies SET founded_year=$1, country=$2, city=$3, respond_time=$4, website=$5, category=$6, num_employees=$7, languages=$8, remote=$9, test_project=$10, description=$11, service=$12 WHERE company_id=$13 ;',
			[
				req.body.founded_year,
				req.body.country,
				req.body.city,
				req.body.responseTime,
				req.body.website,
				req.body.categories,
				req.body.teamSize,
				req.body.languages,
				req.body.remotly,
				req.body.testProjects,
				req.body.description,
				req.body.service,

				req.body.company_id,
			]
		)
		.then((data) => res.status(201).json(data))
		.catch((err) => res.send(err));

	const infoCompany = {
		company_id: req.body.company_id,
		name: req.body.name,
		email: req.body.email,
		loggedIn: req.body.loggedIn,
		founded_year: req.body.founded_year,
		country: req.body.country,
		city: req.body.city,
		responseTime: req.body.responseTime,
		website: req.body.website,
		categories: req.body.categories,
		teamSize: req.body.teamSize,
		languages: req.body.languages,
		remotly: req.body.remotly,
		testProjects: req.body.testProjects,
		description: req.body.description,
		service: req.body.service,
	};
	console.log(infoCompany);
	client.release();
});

app.post('/upload/:id', async (req, res) => {
	console.log(req.params.id);
	const client = await pool.connect();
	if (req.files) {
		// console.log(req.files.image.data.toString('utf8'));
	}
	await client
		.query('UPDATE companies SET image=$1, cover=$2 WHERE company_id=$3 ;', [
			req.files.image.data,
			req.files.cover.data,
			req.params.id,
		])
		.then((data) => res.status(201).json(data))
		.catch((err) => res.send(err));

	client.release();
});
app.post('/viewProfile', async (req, res) => {
	console.log(req.body.company_id);
	const client = await pool.connect();

	await client
		.query('SELECT * FROM companies WHERE company_id=$1', [req.body.company_id])
		.then((data) => res.send(data))
		.catch((err) => res.send(err));

	client.release();
});

app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});
