const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppetter.launch();
    const page = await browser.newPage();

    await page.goto(url);

    const  [el] = page.$x('//*[@id="main-image"]')

    const src = await el.getProperty('src');
    const srcTxt = await scr.jsonValue;

    console.log({srcTxt});

    browser.close()
}
scrapeProduct('https://www.amazon.com/gp/product/B07MXWCR3M?pf_rd_r=0SDBPG9RVG04G27H412N&pf_rd_p=6fc81c8c-2a38-41c6-a68a-f78c79e7253f')