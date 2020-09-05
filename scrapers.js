const puppeteer = require('puppeteer');

const scrapeNepse = async (url) => {

  const browser = await puppeteer.launch({
    // headless: false
  });
  // headless allows you to actually see the browser open and running;
  const page = await browser.newPage();

  
  await page.goto(url, { waitUntil: 'networkidle2' });
  const data = await page.evaluate(() => {
    const title = document.querySelector('#home-contents > table').innerText;

    return {
      title,
    };
  });
  console.log(data);
  await browser.close();
};

scrapeNepse('http://www.nepalstock.com/floorsheet');
