const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// const router = require('./routes');
const db = require('../database');;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', router);
app.use('/',express.static(path.join(__dirname, '../client/dist')));


app.post('/', (req, res) => {
	const params = [req.body.event_name, req.body.description];
	console.log('MY REQ', req.body);
	db.createEvent(params, (err, results) => {
		if (err) {
			console.log(err);
		} else {
			console.log(results);
		}
	})
	  
})



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

