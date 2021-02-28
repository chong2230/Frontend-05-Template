const puppeteer  = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com', {
        waitUntil: 'networkidle2'
    });
    page.emulateMediaType('screen') 
    // await page.pdf({ page: 'hn.pdf', format: 'a4' });
    await page.pdf({path: 'page.pdf'});


    await browser.close();
})();