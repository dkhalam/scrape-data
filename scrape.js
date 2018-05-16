const puppeteer = require('puppeteer');

let scrape = async () => {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('http://books.toscrape.com/');
	// SIM CLICK OF PARTICULAR ELEMENT
	// await page.waitFor(1000);
	// await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img');

	const result = await page.evaluate(() => {
		// RETURN ONLY SINGULAR ELEMENTS
		// let title = document.querySelector('h1').innerText;
		// let price = document.querySelector('.price_color').innerText;

		// return {
		// 	title,
		// 	price
		// }
		// RETURN A LIST OF TITLES AND PRICES
		let data = [];
		let elements = document.querySelectorAll('.product_pod');

		// Loop through each product
		for (var element of elements) {
			// Select title and price
			let title = element.childNodes[5].innerText;
			let price = element.childNodes[7].children[0].innerText;

			data.push({title, price});
		}

		return data;
	});
	//  Scrape

	browser.close();
	return result;
};

scrape().then((value) => {
	console.log(value);
});