const puppeteer = require('puppeteer');

(async ()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    const imgs = await page.$$('a');
    console.log(imgs);
})();