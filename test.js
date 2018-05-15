const puppeteer = require('puppeteer');

async function getPic() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://nba.com');
	await page.screenshot({path: 'nba.png'});
	await page.setViewport({width: 1000, height: 500})

	await browser.close();
}

getPic();