const axios = require('axios');
const cheerio = require('cheerio');

axios.get('http://example.com')
	.then(response => {
		const $ = cheerio.load(response.data);
		$('a').each((index, element) => {
			console.log($(element).attr('href'));
		});
	})
	.catch(error => {
		console.log(error);
	});
