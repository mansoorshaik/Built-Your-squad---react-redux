const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get

router.get('/test',(req, res)  => res.json({msg : 'still at the beggining'}));

router.get('/test1', (req, res, next) => {
	const url = 'http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}'
	const options = {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	}

	return fetch(url)
		.then((response) => response.json())
		.then((response) => res.send(response))
		.catch((err) => res.json(err))
})

module.exports = router; 